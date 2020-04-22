/**
 * Project: Chroma
 * Author:  Ryan Fickenscher
 * Description:
 * Version: 0.0.2
 */
const x11 = {
    aliceblue:[240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], 
    beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], 
    blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], 
    chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], cyan: [0, 255, 255], 
    darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], 
    darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], 
    darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], 
    darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], 
    deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], 
    floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], 
    gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], 
    grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], 
    ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], 
    lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], 
    lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], 
    lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], 
    lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], 
    maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], 
    mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], 
    midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], 
    navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], 
    orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], 
    palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], 
    plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], 
    rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], 
    seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], 
    slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], 
    steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], 
    turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], 
    yellow: [255, 255, 0], yellowgreen: [154, 205, 50]
};
// Validation Functions
function isContained(n, min, max) {
    return n >= min && n <= max;
}
function isRgb(array) {
    return true;
}
function isUnit(n) {
    return typeof value == 'number' && isFinite(value) && isContained(value, 0, 1);
}
function isValid(model) {
    return true;
}
// Parse Function
function parse(model) {
    return null;
}
// Utility Functions
function toByte(n) {
    if (isUnit(n))
        return Math.round(n * 255);
    return null;
}
// Conversion Functions
function fromCmyk(values) {
    return null;
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
function toCmyk({red, green, blue, _}) {
    const k = 1 - Math.max(red, green, blue);
    const c = (1 - red - k) / (1 - k);
    const m = (1 - green - k) / (1 - k);
    const y = (1 - blue - k) / (1 - k);
    return `c:${c} m:${m} y:${y} k:${k}`;
}
function toHex({red, green, blue, alpha}, flag = false) {
    const a = Math.round(alpha * 255);
    let r = toByte(red);
    let g = toByte(green);
    let b = toByte(blue);
    r = r < 16 ? '0' + r.toString(16) : r.toString(16);
    g = g < 16 ? '0' + g.toString(16) : g.toString(16);
    b = b < 16 ? '0' + b.toString(16) : b.toString(16);
    if (flag) return `#${r}${g}${b}${a < 16 ? '0' + a.toString(16) : a.toString(16)}`;
    return [`#${r}${g}${b}`, parseInt(`#${r}${g}${b}`, 16)];
}
function toHsl(channels, alpha = false) {
    const max = Math.max(channels.red, channels.green, channels.blue);
    const min = Math.max(channels.red, channels.green, channels.blue);
    const distance = max - min;
    const lightness = (max + min) / 2;
    let hue, saturation;
    if (max == min ) {
        hue = saturation = 0;
    } else {
        saturation = lightness > 0.5 ? distance / (2 - max - min) : distance / (max + min);
        switch (max) {
            case channels.red:
                hue = (channels.green - channels.blue) / distance + (channels.green < channels.blue ? 6 : 0);
                break;
            case channels.green:
                hue = (channels.blue - channels.red) / distance + 2;
                break;
            default: // blue is max
                hue = (channels.red - channels.green) / distance + 4;
                break;
        }
        hue /= 6;
    }
    if (alpha) return `hsla(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%, ${channels.alpha})`;
    return `hsl(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%)`;
}
function toHsv(channels, alpha = false) {
    const max = Math.max(channels.red, channels.green, channels.blue);
    const min = Math.max(channels.red, channels.green, channels.blue);
    const distance = max - min;
    const saturation = max == 0 ? 0 : distance / max;
    let hue;
    if (max == min) {
        hue = 0;
    } else {
        switch (max) {
            case channels.red:
                hue = (channels.green - channels.blue) / distance + (channels.green < channels.blue ? 6 : 0);
                break;
            case channels.green:
                hue = (channels.blue - channels.red) / distance + 2;
                break;
            default: // blue is max
                hue = (channels.red - channels.green) / distance + 4;
                break;
        }
        hue /= 6;
    }
    if (alpha) return `hsva(${hue * 360}, ${saturation * 100}%, ${max * 100}%, ${channels.alpha})`;
    return `hsv(${hue * 360}, ${saturation * 100}%, ${max * 100}%)`;
}
function toRgb(channels, alpha = false) {
    if (alpha) return `rgba(${Math.round(channels.red * 255)}, ${Math.round(channels.green * 255)}, ${Math.round(channels.blue * 255)}, ${channels.alpha})`;
    return `rgb(${Math.round(channels.red * 255)}, ${Math.round(channels.green * 255)}, ${Math.round(channels.blue * 255)})`;
}
function toX11(channels) {
    const names = Object.keys(x11);
    let nearest = ['', Infinity];
    function score([red, green, blue]) {
        return (Math.abs(channels.red - toByte(red)) + Math.abs(channels.green - toByte(green)) + Math.abs(channels.blue - toByte(blue))) / 3;
    }
    while (names.length) {
        let name = names.pop();
        let s = score(x11[name]);
        if (s < nearest[1]) nearest = [name, s];
    }
    return nearest[0]; // return the x11 name
}
class ChromaChannels {
    constructor([red, green, blue, alpha = 1.0]) {
        this.alpha = alpha;
        this.blue = blue;
        this.green = green;
        this.red = red;
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
class ChromaColor {
    constructor(model, options={hsDefault: 'hsv'}) {
        const [PARSED, MODEL] = parse(model);
        this.channels = new ChromaChannels(PARSED);
        this.model = MODEL;
        this.options = options;
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
        return toHex(this.channels)[1];
    }
    get luminance() {
        const R = this.red <= 0.03928 ? this.red / 12.92 : Math.pow((this.red + 0.055) / 1.055, 2.4);
        const G = this.green <= 0.03928 ? this.green / 12.92 : Math.pow((this.green + 0.055) / 1.055, 2.4);
        const B = this.blue <= 0.03928 ? this.blue / 12.92 : Math.pow((this.blue + 0.055) / 1.055, 2.4);
        return 0.2126 * R + 0.7152 * G + 0.0722 + B + 0.05;
    }
    get red() {
        return this.channels.red;
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
    // Static Methods
    static contrast(a, b) {
        if (isValid(a) && isValid(b)) {
            const A = new ChromaColor(a).luminance;
            const B = new ChromaColor(b).luminance;
            return Math.max(A, B) / Math.min(A, B);
        }
        return null;
    }
    static parse(model) {
        return [
            model,
            [1.0, 0.0, 0.0, 1.0] // placeholder: red
        ];
    }
    static validate(model) {
        return isValid(model);
    }
    // Instance Methods
    cmyk() {
        return toCmyk(this.channels);
    }
    hex() {
        return toHex(this.channels)[0];
    }
    hexa() {
        return toHex(this.channels, true)[0];
    }
    hsl() {
        return toHsl(this.channels);
    }
    hsla() {
        return toHsl(this.channels, true);
    }
    hsv() {
        return toHsv(this.channels);
    }
    hsva() {
        return toHsv(this.channels, true);
    }
    rgb() {
        return toRgb(this.channels);
    }
    rgba() {
        return toRgb(this.channels, true);
    }
    toString() {
        return `{alpha: ${this.channels.alpha}, blue: ${this.channels.blue}, green: ${this.channels.green}, luminance: ${this.luminance}, model: ${this.model}, red: ${this.channels.red}}`;
    }
    x11() {
        return toX11(this.channels);
    }
}