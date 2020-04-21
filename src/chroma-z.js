/**
 * Project: Chroma
 * Author:  Ryan Fickenscher
 * Description:
 * Version: 0.0.2
 */
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
function toCmyk(values) {
    return null;
}
function toHex(values) {
    return null;
}
function toHsl(values) {
    return null;
}
function toHsv(values) {
    return null;
}
function toRgb(values) {
    return null;
}
function toX11(values) {
    return null;
}
class ChromaChannels {
    constructor([red, green, blue, alpha = 1.0]) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    set red(value) {
        if (isUnit(value))
            this.red = value;
        return value;
    }
    set green(value) {
        if (isUnit(value))
            this.green = value;
        return value;
    }
    set blue(value) {
        if (isUnit(value))
            this.blue = value;
        return value;
    }
    set alpha(value) {
        if (isUnit(value))
            this.alpha = value;
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
        return toHexNumber(this.channels);
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
            [255, 0, 0] // placeholder: red
        ];
    }
    static toHexString(model) {
        if (!isValid(model)) return null;
        return toHex(new ChromaColor(model).channels);
    }
    static toHexaString(model) {
        if (!isValid(model)) return null;
        return toHex(new ChromaColor(model).channels, true);
    }
    static toHslString(model) {
        if (!isValid(model)) return null;
        return toHsl(new ChromaColor(model).channels);
    }
    static toHslaString(model) {
        if (!isValid(model)) return null;
        return toHsl(new ChromaColor(model).channels, true);
    }
    static toHsvString(model) {
        if (!isValid(model)) return null;
        return toHsl(new ChromaColor(model).channels);
    }
    static toHsvaString(model) {
        if (!isValid(model)) return null;
        return toHsl(new ChromaColor(model).channels, true);
    }
    static toRgbString(model) {
        if (!isValid(model)) return null;
        return toHsl(new ChromaColor(model).channels);
    }
    static toRgbaString(model) {
        if (!isValid(model)) return null;
        return toHsl(new ChromaColor(model).channels, true);
    }
    static toX11String(model) {
        if (!isValid(model)) return null;
        return toX11(new ChromaColor(model).channels);
    }
    static validate(model) {
        return isValid(model);
    }
    // Instance Methods
    contrast(model) {
        if (isValid(model)) {
            const L = new ChromaColor(model).luminance;
            return Math.max(this.luminance, L) / Math.min(this.luminance, L);
        }
        return null;
    }
    toHex() {
        return toHex(this.channels);
    }
    toHexa() {
        return toHex(this.channels, true);
    }
    toHsl() {
        return toHsl(this.channels);
    }
    toHsla() {
        return toHsl(this.channels, true);
    }
    toHsv() {
        return toHsv(this.channels);
    }
    toHsva() {
        return toHsv(this.channels, true);
    }
    toRgb() {
        return toRgb(this.channels);
    }
    toRgba() {
        return toRgb(this.channels, true);
    }
    toString() {
        return `{alpha: ${this.channels.alpha}, blue: ${this.channels.blue}, green: ${this.channels.green}, luminance: ${this.luminance}, model: ${this.model}, red: ${this.channels.red}}`;
    }
    toX11() {
        return toX11(this.channels);
    }
}