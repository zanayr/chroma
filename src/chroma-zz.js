// Auxillary Functions
// Validation Functions
function isByte(value) {
    return isFinite(value) && isContained(value, [0, 255]);
}
function isContained(value, set) {
    if (!isFinite(value)) return false;
    return value >= set[0] && value <= set[1];
}
function isUnit(value) {
    return isFinite(value) && isContained(value, [0, 1]);
}
function isValid(model) {
    
}

function sortHue(hue, c, x, m) {
    if (hue < 60) {
        return [c + m, x + m, 0 + m];
    } else if (hue < 120) {
        return [x + m, c + m, 0 + m];
    } else if (hue < 180) {
        return [0 + m, c + m, x + m];
    } else if (hue < 240) {
        return [0 + m, x + m, c + m];
    } else if (hue < 300) {
        return [x + m, 0 + m, c + m];
    } else {
        return [c + m, 0 + m, x + m];
    }
}
// From Functions
function fromCmyk([cyan, magenta, yellow, black]) {
    for (value of [cyan, magenta, yellow, black])
        if (!isContained(value, [0, 100])) return null;
    return [
        (1 - cyan / 100) * (1 - black / 100),
        (1 - magenta / 100) * (1 - black / 100),
        (1 - yellow / 100) * (1 - black / 100),
        black / 100,
    ];
}
function fromHexa(value) {
    let match;
    switch (value.length) {
        case 1:
            return new Array(3).fill(parseInt(value + value, 16) / 255).concat(1.0);
        case 2:
            return new Array(3).fill(parseInt(value, 16) / 255).concat(1.0);
        case 3:
            match = value.match(/[a-f\d]{1}/g);
            if (!match) return null;
            return match.map(m => parseInt(m + m, 16) / 255).concat(1.0);
        case 4:
            match = value.match(/[a-f\d]{1}/g);
            if (!match) return null;
            return match.map(m => parseInt(m + m, 16) / 255);
        case 6:
            match = value.match(/[a-f\d]{2}/g);
            if (!match) return null;
            return match.map(m => parseInt(m, 16) / 255).concat(1.0);
        case 8:
            match = value.match(/[a-f\d]{2}/g);
            if (!match) return null;
            return match.map(m => parseInt(m, 16) / 255);
        default:
            return null;

    }
}
function fromHsla([hue, saturation, lightness, alpha = 1.0]) {
    if (!isFinite(hue)) return null;
    if (!isContained(saturation, [0, 100])) return null;
    if (!isContained(lightness, [0, 100])) return null;
    if (!isContained(alpha, [0, 1])) return null;
    hue = (360 + (hue % 360)) % 360;
    saturation /= 100;
    lightness /= 100;
    const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    return sortHue(hue, c, c * (1 - Math.abs((hue / 60 % 2) - 1)), lightness - c / 2).concat(alpha);
}
function fromHsva([hue, saturation, value, alpha = 1.0]) {
    if (!isFinite(hue)) return null;
    if (!isContained(saturation, [0, 100])) return null;
    if (!isContained(value, [0, 100])) return null;
    if (!isContained(alpha, [0, 1])) return null;
    hue = (360 + (hue % 360)) % 360;
    saturation /= 100;
    value /= 100;
    const c = value * saturation;
    return sortHue(hue, c, c * (1 - Math.abs((hue / 60 % 2) - 1)), value - c).concat(alpha);
}
function fromRgba([red, green, blue, alpha = 1.0]) {
    let values = [
        parseInt(red, 10),
        parseInt(green, 10),
        parseInt(blue, 10),
        parseFloat(alpha, 10)
    ];
    for (i in values)
        if (i != 3 ? !isContained(values[i], [0, 255]) : !isContained(values[i], [0, 1])) return null;
    return [red / 255, green / 255, blue / 255, alpha];
}
function fromX11(name) {
    const values = x11[name];
    if (!values) return null;
    return values.map(value => value / 255).concat(1.0);
}

// Conversion Functions
function toByte(value) {
    if (isUnit(value)) return Math.round(value * 255);
    return null;
}
function toCmykString({red, green, blue, _}) {
    const k = 1 - Math.max(red, green, blue);
    const c = (1 - red - k) / (1 - k);
    const m = (1 - green - k) / (1 - k);
    const y = (1 - blue - k) / (1 - k);
    return `c:${c} m:${m} y:${y} k:${k}`;
}
function toHexNumber([red, green, blue]) {
    let r = toByte(red).toString(16);
    let g = toByte(green).toString(16);
    let b = toByte(blue).toString(16);
    r = r.length == 1 ? '0' + r : r; // left pad all single
    g = g.length == 1 ? '0' + g : g; // hexadecimal characters,
    b = b.length == 1 ? '0' + b : b; // with 0, e.g. 'f' -> '0f'
    return parseInt(`${r}${g}${b}`, 16);
}
function toHexString({red, green, blue, alpha}, bool) {
    let r = toByte(red).toString(16);
    let g = toByte(green).toString(16);
    let b = toByte(blue).toString(16);
    let a = toByte(alpha).toString(16);
    r = r.length == 1 ? '0' + r : r; // left pad all
    g = g.length == 1 ? '0' + g : g; // single hexadecimal
    b = b.length == 1 ? '0' + b : b; // characters with 0
    a = a.length == 1 ? '0' + a : a; // e.g. 'f' -> '0f'
    if (bool) return `#${r}${g}${b}${a}`;
    return `#${r}${g}${b}`;
}
function toHslString({red, green, blue, alpha}, bool = false) {
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const distance = max - min;
    const lightness = (max + min) / 2;
    let hue, saturation;
    if (max == min) {
        hue = saturation = 0;
    } else {
        saturation = lightness > 0.5 ? distance / (2 - max - min) : distance / (max + min);
        switch (max) {
            case red:
                hue = (green - blue) / distance + (green < blue ? 6 : 0);
                break;
            case green:
                hue = (blue - red) / distance + 2;
                break;
            default: // blue is max
                hue = (red - green) / distance + 4;
                break;
        }
        hue /= 6;
    }
    if (bool) return `hsla(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%, ${alpha})`;
    return `hsl(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%)`;
}
function toHsvString({red, green, blue, alpha}, bool = false) {
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const distance = max - min;
    const saturation = max == 0 ? 0 : distance / max;
    let hue;
    if (max == min) {
        hue = 0;
    } else {
        switch (max) {
            case red:
                hue = (green - blue) / distance + (green < blue ? 6 : 0);
                break;
            case green:
                hue = (blue - red) / distance + 2;
                break;
            default: // blue is max
                hue = (red - green) / distance + 4;
                break;
        }
        hue /= 6;
    }
    if (bool) return `hsva(${hue * 360}, ${saturation * 100}%, ${max * 100}%, ${alpha})`;
    return `hsv(${hue * 360}, ${saturation * 100}%, ${max * 100}%)`;
}
function toRgbString({red, green, blue, alpha}, bool = false) {
    if (bool) return `rgba(${toByte(red)}, ${toByte(green)}, ${toByte(blue)}, ${alpha})`;
    return `rgb(${toByte(red)}, ${toByte(green)}, ${toByte(blue)})`;
}
function toX11String({red, green, blue, _}) {
    const names = Object.keys(x11);
    let nearest = ['', Infinity];
    function score([r, g, b]) {
        return (Math.abs(red - toByte(r)) + Math.abs(green - toByte(g)) + Math.abs(blue - toByte(b))) / 3;
    }
    while (names.length) {
        let name = names.pop();
        let s = score(x11[name]);
        if (s < nearest[1]) nearest = [name, s];
    }
    return nearest[0]; // return just the name
}

class ChromaChannels {
    constructor([red, green, blue, alpha]) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}

class ChromaParser {
    constructor(options = {byte: false}) {
        this.byte = options.byte;
    }

    // Instance Methods
    contrast(a, b) {
        if (!isValid(a) || !isValid(b)) return null;
        const l = new ChromaColor(a).luminance;
        const m = new ChromaColor(b).luminance;
        return Math.max(l, m) / Math.min(l, m);
    }
    parse(model) {
        if (arguments.length == 1) {
            if (typeof model == 'string' && model.length) {
                model = model.replace(/\s|#|0x/gi, ''); // remove all whitespace, `#` or `0x`
                if (isFinite(parseInt(model, 16)) && /^[\da-f]{1,8}/ig.test(model)) {
                    return fromHexa(model);
                } else if (/[a-z]+/ig.test(model)) {
                    return fromX11(model);
                } else if (/[-\d,\.]+/ig.test(model)) {
                    let match = model.match(/(-?\d+\.?\d*)/g);
                    if (!match) return null;
                    return fromRgba(match);
                } else {
                    let match = model.match(/(-?\d+\.?\d*)/g);
                    if (!match) return null;
                    if (/^rgba?\(/ig.test(model)) {
                        return fromRgba(match);
                    } else if (/^hsla?\(/ig.test(model)) {
                        return fromHsla(match);
                    } else if (/^hsva?\(/ig.test(model)) {
                        return fromHsva(match);
                    } else if (/^cmyk\(/ig.test(model)) {
                        return fromCmyk(match);
                    }
                }
            } else if (typeof model == 'number' && isFinite(model)) {
                return this.parse(model.toString(16).padStart(6, '0')); // run it again as a hex string
            } else if (Array.isArray(model) && (model.length == 3 || model.length == 4)) {
                // 1. Parse each element, and check for valid number values
                // 2. Check the first three values, depending on mode, do not fit their
                //    bounds OR if the fourth does not fit its bound either
                let values = [];
                for (let m in model) {
                    let value = parseFloat(model[m], 10);
                    if (!isFinite(value)) return null;
                    if (!(m != 3 && this.byte ? isByte(value) : isUnit(value)) && !(m == 3 && isUnit(value))) return null;
                    values.push(value);
                }
                return values;
            }
        } else if (arguments.length == 3 || arguments.length == 4) {
            return this.parse(Array.from(arguments)); // run it again as an array of values
        }
        return null;
    }
    toCmyk(model) {
        if (!isValid(model)) return null;
        return toCmykString(new ChromaColor(model).channels);
    }
    toHex(model) {
        if (!isValid(model)) return null;
        return toHexString(new ChromaColor(model).channels, false);
    }
    toHexa(model) {
        if (!isValid(model)) return null;
        return toHexString(new ChromaColor(model).channels, true);
    }
    toHsl(model) {
        if (!isValid(model)) return null;
        return toHslString(new ChromaColor(model).channels, false);
    }
    toHsla(model) {
        if (!isValid(model)) return null;
        return toHslString(new ChromaColor(model).channels, true);
    }
    toHsv(model) {
        if (!isValid(model)) return null;
        return toHsvString(new ChromaColor(model).channels, false);
    }
    toHsva(model) {
        if (!isValid(model)) return null;
        return toHsvString(new ChromaColor(model).channels, true);
    }
    toRgb(model) {
        if (!isValid(model)) return null;
        return toRgbString(new ChromaColor(model).channels, false);
    }
    toRgba(model) {
        if (!isValid(model)) return null;
        return toRgbString(new ChromaColor(model).channels, true);
    }
    toX11(model) {
        if (!isValid(model)) return null;
        return toX11String(new ChromaColor(model).channels);
    }
    validate(model) {
        return isValid(model);
    }
}

class ChromaColor {
    constructor(model) {
        const [values, original] = arguments.length == 1 ? ChromaParser.parse2(model) : ChromaParser.parse2(Array.from(arguments));
        //  Create a new channel object and store the original model and options object
        this.channels = new ChromaChannels(values);
        this.model = original;

    }

    // Getters
    get alpha() {
        return this.channels.alpha;
    }
    get blue() {
        return this.channels.blue;
    }
    get green() {
        return this.channels.green;
    }
    get hex() {
        return toHexNumber([this.red, this.green, this.blue]);
    }
    get luminance() {
        const r = this.red <= 0.03928 ? this.red / 12.92 : Math.pow((this.red + 0.055) / 1.055, 2.4);
        const g = this.green <= 0.03928 ? this.green / 12.92 : Math.pow((this.green + 0.055) / 1.055, 2.4);
        const b = this.blue <= 0.03928 ? this.blue / 12.92 : Math.pow((this.blue + 0.055) / 1.055, 2.4);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b + 0.05;
    }
    get red() {
        return this.channels.red;
    }
    get rgb() {
        return [this.red, this.green, this.blue, this.alpha];
    }

    // Setters
    set alpha(value) {
        if (isUnit(value)) this.channels.alpha = value;
        return value;
    }
    set blue(value) {
        if (isUnit(value)) this.channels.blue = value;
        return value;
    }
    set green(value) {
        if (isUnit(value)) this.channels.green = value;
        return value;
    }
    set red(value) {
        if (isUnit(value)) this.channels.red = value;
        return value;
    }
}