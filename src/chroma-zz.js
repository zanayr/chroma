// Auxillary Functions
function leftPad(value, character, count) {
    for (let c = 0; c < count; c++)
        value = character + value;
    return value;
}
// Validation Functions
function isContained(value, set) {
    if (typeof value != 'number' || !isFinite(value)) return false;
    return value >= set[0] && value <= set[1];
}
function isUnit(value) {
    return typeof value == 'number' && isFinite(value) && isContained(value, [0, 1]);
}
function isValid(model) {

}
// From Functions
function fromCmyk(values) {
    let k = values.pop();
    return values.map(value => {
        return 255 * (1 - value) * (1 - k);
    });
}
function fromHex(values) {
    return null;
}
function fromHsl(values) {
    return null;
}
function fromHsv(values) {
    return null;
}
function fromRgb(values) {
    return null;
}
function fromX11(values) {
    return null;
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

    set alpha(value) {
        if (isUnit(value)) this.alpha = value;
        return value;
    }
    set blue(value) {
        if (isByte(value)) this.blue = value;
        return value;
    }
    set green(value) {
        if (isByte(value)) this.green = value;
        return value;
    }
    set red(value) {
        if (isByte(value)) this.red = value;
        return value;
    }
}
class ChromaParser {
    constructor(options = {hueModel: 'hsl'}) {
        this.options = options;
    }

    // Static Methods
    static contrast(a, b) {
        if (!isValid(a) || !isValid(b)) return null;
        const l = new ChromaColor(a).luminance;
        const m = new ChromaColor(b).luminance;
        return Math.max(l, m) / Math.min(l, m);
    }
    static parse() {
        function hueSwitch(v, value) {
            switch (v) {
                case 0:
                    if (isFinite(parseFloat(value, 10))) return true;
                case 1:
                case 2:
                    if (isContained(parseFloat(value, 10), [0, 100])) return true;
                    break;
                case 3:
                    if (isContained(parseFloat(value, 10), [0, 1])) return true;
                    break;
            }
            return false;
        }
        if (arguments.length == 1) {
            let model = arguments[0];
            //  string, number, array
            if (typeof model == 'number') {
                this.parse(model.toString(16).padStart(6, '0'));
            } else if (Array.isArray(model)) {
                //  array of unit interval rgb values
            } else if (typeof model == 'string') {
                if (model.includes(',')) {
                    let values = model.match(/(-?\d{1,3}(\.?\d*)?)+/g);
                    if (values && values.length == 3) {
                        if (/^hsl\(/g.test(model)) {
                            for (let v in values)
                                if (!hueSwitch(v, values[v])) return null;
                            return fromHsl(values.map(value => parseFloat(value, 10)));
                        } else if (/^hsv\(/g.test(model)) {
                            for (let v in values)
                                if (!hueSwitch(v, values[v])) return null;
                            return fromHsv(values.map(value => parseFloat(value, 10)));
                        } else if (/^rgb\(/g.test(model) || !model.includes('%')) {
                            for (let value of values)
                                if (!isContained(parseInt(value, 10), [0, 255])) return null;
                            return fromRgb(values.map(value => parseInt(value, 10)));
                        } else if (model.match(/%/g).length == 2) {
                            if (this.options.hueModel == 'hsl') {
                                for (let v in values)
                                    if (!hueSwitch(v, values[v])) return null;
                                return fromHsl(values.map(value => parseFloat(value, 10)));
                            } else {
                                for (let v in values)
                                    if (!hueSwitch(v, values[v])) return null;
                                return fromHsv(values.map(value => parseFloat(value, 10)));
                            }
                        }
                    } else if (values && values.length == 4) {
                        if (/^cmyk\(/g.test(model)) {
                            for (let value of values)
                                if (!isContained(parseFloat(value, 10), [0, 10])) return null;
                            return fromCmyk(values.map(value => parseFloat(value, 10)));
                        } else if (/^hsla\(/g.test(model)) {
                            for (let v in values)
                                if (!hueSwitch(v, values[v])) return null;
                            return fromHsl(values.map(value => parseFloat(value, 10)));
                        } else if (/^hsva\(/g.test(model)) {
                            for (let v in values)
                                if (!hueSwitch(v, values[v])) return null;
                            return fromHsv(values.map(value => parseFloat(value, 10)));
                        } else if (/^rgba\(/g.test(model) || !model.includes('%')) {
                            for (let v in values) {
                                let [value, max] = v != 3 ? [parseInt(values[v], 10), 255] : [parseInt(values[v], 10), 1];
                                if (!isContained(value, [0, max])) return null;
                            }
                            return fromRgb(values.map((value, i) => {
                                if (i != 3) return parseInt(value, 10);
                                return parseFloat(value, 10);
                            }));
                        } else if (model.match(/%/g).length == 2) {
                            if (this.options.hueModel == 'hsl') {
                                for (let v in values)
                                    if (!hueSwitch(v, values[v])) return null;
                                return fromHsl(values.map(value => parseFloat(value, 10)));
                            } else {
                                for (let v in values)
                                    if (!hueSwitch(v, values[v])) return null;
                                return fromHsv(values.map(value => parseFloat(value, 10)));
                            }
                        }
                    }
                } else if (/^(?:#|0x|0X)?([\da-f]{1,8}){1}$/g.test(arg)) {
                    let match = model.replace(/^#|0x/ig, '').match(/([\da-f])/g);
                    if (match && (match.length != 5 || match.length != 7)) return fromHex(match);
                } else if (/^[a-z]{2,}$/g.test(model)) {
                    let match = x11[model];
                    if (match && match.length == 3) return fromX11(x11[arg]);
                }
            }
        } else if (arguments.length == 3 || arguments.length == 4) {
            this.parse(Array.from(arguments));
        }
        return null;
    }
    static toCmyk(model) {
        if (!isValid(model)) return null;
        return toCmykString(new ChromaColor(model).channels);
    }
    static toHex(model) {
        if (!isValid(model)) return null;
        return toHexString(new ChromaColor(model).channels, false);
    }
    static toHexa(model) {
        if (!isValid(model)) return null;
        return toHexString(new ChromaColor(model).channels, true);
    }
    static toHsl(model) {
        if (!isValid(model)) return null;
        return toHslString(new ChromaColor(model).channels, false);
    }
    static toHsla(model) {
        if (!isValid(model)) return null;
        return toHslString(new ChromaColor(model).channels, true);
    }
    static toHsv(model) {
        if (!isValid(model)) return null;
        return toHsvString(new ChromaColor(model).channels, false);
    }
    static toHsva(model) {
        if (!isValid(model)) return null;
        return toHsvString(new ChromaColor(model).channels, true);
    }
    static toRgb(model) {
        if (!isValid(model)) return null;
        return toRgbString(new ChromaColor(model).channels, false);
    }
    static toRgba(model) {
        if (!isValid(model)) return null;
        return toRgbString(new ChromaColor(model).channels, true);
    }
    static toX11(model) {
        if (!isValid(model)) return null;
        return toX11String(new ChromaColor(model).channels);
    }
    static validate(model) {
        return isValid(model);
    }
}
class ChromaColor {
    constructor(model) {
        const [values, model] = ChromaParser.parse(model);
        //  Create a new channel object and store the original model and options object
        this.channels = new ChromaChannels(values);
        this.model = model;
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
        return 0.2126 * r + 0.7152 * g + 0.0722 + b + 0.05;
    }
    get red() {
        return this.channels.red;
    }
    get rgb() {
        return [this.red, this.green, this.blue, this.alpha];
    }

    // Setters
    set alpha(value) {
        return this.channels.alpha = value;
    }
    set blue(value) {
        return this.channels.blue = value;
    }
    set green(value) {
        return this.channels.green = value;
    }
    set red(value) {
        return this.channels.red = value;
    }
}