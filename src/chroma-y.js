/*
 * Name:        Chroma
 * Description: Color conversion library
 * Author:      Ryan Fickenscher
 */

//  TO DO
//  parse models
//  find and link the documentation on luminance
//  make a module

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

//  Auxillary Functions
function parse(model) {
    return {
        model: model,
        values: [255, 0, 0] // placeholder red
    };
}
function sColor({red, green, blue, _}) {
    return [red / 255, green / 255, blue / 255];
}
function isContained(n, min, max) {
    return n >= min && n <= max;
}
function isValid(model) {
    if (parse(model)) return true;
    return false;
}
function isValidRGBArray(values) {
    if (!Array.isArray(values)) return false; // not an array
    else if (values.length < 3) return false; // too short
    else if (values.length > 4) return false; // too long
    for (i in values) {
        if (typeof value[i] != 'number' || !isFinite(value[i])) return false; // not valid number
        else if (values[i] < 0) return false; // no negative values
        else if (i != 3 && values[i] > 255) return false; // not alpha and is greater than 255
        else if (i == 3 && i > 1) return false; // is alpha and is greater than 1.0
        else if (i > 3) return false; // shouldn't get to here...
    }
    return true;
}

//  Convert to String Functions
function toHexString({red, green, blue, alpha}, bool) {
    const r = red < 16 ? '0' + red.toString(16) : red.toString(16);
    const g = green < 16 ? '0' + green.toString(16) : green.toString(16);
    const b = blue < 16 ? '0' + blue.toString(16) : blue.toString(16);
    const a = Math.round(alpha * 255); // convert alpha from set [0, 1] to set [0, 255]
    if (bool) return `#${r}${g}${b}${(a < 16 ? '0' + a.toString(16) : a.toString(16))}`; // alpha channel
    return `#${r}${g}${b}`; // no alpha channel
}
function toHslString(channels, bool) {
    //  Should return an HSL or HSLA model string
    const values = toHslArray(channels);
    if (bool) return `hsla(${values[0]}, ${values[1]}%, ${values[2]}%, ${channels.alpha})`;
    return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}
function toHsvString(channels, bool) {
    //  Should return an HSL or HSLA model string
    const values = toHsvArray(channels);
    if (bool) return `hsva(${values[0]}, ${values[1]}%, ${values[2]}%, ${channels.alpha})`;
    return `hsv(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}
function toRgbString(channels, bool) {
    if (bool) return `rgba(${channels.red}, ${channels.green}, ${channels.blue}, ${channels.alpha})`;
    return `rgb(${channels.red}, ${channels.green}, ${channels.blue})`;
}
function toX11String(channels) {
    const names = Object.keys(x11);
    let nearest = ['', Infinity];
    function score([red, green, blue]) {
        return (Math.abs(channels.red - red) + Math.abs(channels.green - green) + Math.abs(channels.blue - blue)) / 3;
    }
    while (names.length) {
        let name = names.pop();
        let s = score(x11[name]);
        if (s < nearest[1]) nearest = [name, s];
    }
    return nearest[0]; // return the x11 name
}

//  Convert to Array
function toHslArray(channels) {
    //  Should return an array of HSL values
    const [sRed, sGreen, sBlue] = sColor(channels);
    const max = Math.max(sRed, sGreen, sBlue);
    const min = Math.min(sRed, sGreen, sBlue);
    const distance = max - min;
    const lightness = (max + min) / 2;
    let hue, saturation;
    if (max == min ) {
        hue = saturation = 0;
    } else {
        saturation = lightness > 0.5 ? distance / (2 - max - min) : distance / (max + min);
        switch (max) {
            case sRed:
                hue = (sGreen - sBlue) / distance + (sGreen < sBlue ? 6 : 0);
                break;
            case sGreen:
                hue = (sBlue - sRed) / distance + 2;
                break;
            default: // sBlue is max
                hue = (sRed - sGreen) / distance + 4;
                break;
        }
        hue /= 6;
    }
    return [
        Math.round(hue * 36000) / 100,
        Math.round(saturation * 10000) / 100,
        Math.round(lightness * 10000) / 100
    ];
}
function toHsvArray(channels) {
    const [sRed, sGreen, sBlue] = sColor(channels);
    const max = Math.max(sRed, sGreen, sBlue);
    const min = Math.min(sRed, sGreen, sBlue);
    const distance = max - min;
    const saturation = max == 0 ? 0 : distance / max;
    let hue;
    if (max == min) {
        hue = 0;
    } else {
        switch (max) {
            case sRed:
                hue = (sGreen - sBlue) / distance + (sGreen > sBlue ? 6 : 0);
                break;
            case sGreen:
                hue = (sBlue - sRed) / distance + 2;
                break;
            default: // sBlue is max
                hue = (sRed - sGreen) / distance + 4;
                break;
        }
        hue /= 6;
    }
    return [
        Math.round(hue * 36000) / 100,
        Math.round(saturation * 10000) / 100,
        Math.round(max * 10000) / 100
    ];
}

//  Chroma Objects
class ChromaChannels {
    constructor([red, green, blue, alpha=1.0]) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}
class ChromaColor {
    //  Getters
    get alpha() {
        //  Should return the alpha channel value
        return this.channels.alpha;
    }
    get blue() {
        //  Should return the blue channel value
        return this.channels.blue;
    }
    get luminance() {
        //  Should return the luminance of a color using a confusing forumla that can
        //  read about here:
        const [sR, sG, sB] = sColor(this.channels);
        const r = sR <= 0.03928 ? sR / 12.92 : Math.pow((sR + 0.055) / 1.055, 2.4);
        const g = sG <= 0.03928 ? sG / 12.92 : Math.pow((sG + 0.055) / 1.055, 2.4);
        const b = sB <= 0.03928 ? sB / 12.92 : Math.pow((sB + 0.055) / 1.055, 2.4);
        return 0.2126 * r + 0.7152 * g + 0.0722 + b + 0.05;
    }
    get green() {
        //  Should return the green channel value
        return this.channels.green;
    }
    get red() {
        //  Should return the red channel value
        return this.channels.red;
    }

    //  Setters
    set alpha(value) {
        //  Should set the alpha channel if the passed value is a finite number and is
        //  contained in the set [0.0 1.0]
        if (isFinite(value) && isContained(value, 0, 1)) this.channels.alpha = value;
        return value; // return passed value
    }
    set blue(value) {
        //  Should set the blue channel if the passed value is a finite number and is
        //  contained in the set [0, 255]
        if (isFinite(value) && isContained(value, 0, 255)) this.channels.blue = Math.floor(value);
        return value; // return passed value
    }
    set green(value) {
        //  Should set the green channel if the passed value is a finite number and is
        //  contained in the set [0, 255]
        if (isFinite(value) && isContained(value, 0, 255)) this.channels.green = Math.floor(value);
        return value; // return value
    }
    set red(value) {
        //  Should set the red channel if the passed value is a finite number and is
        //  contained in the set [0, 255]
        if (isFinite(value) && isContained(value, 0, 255)) this.channels.red = Math.floor(value);
        return value;
    }

    //  Constructor
    constructor(model) {
        let parsed = parse(model);
        this.channels = new ChromaChannels(parsed.values);
        this.model = parsed.model;
    }

    //  Static Methods
    static contrast(a, b) {
        //  Should return a value contained in the set [0.0, 1.0] that is a ratio of
        //  the contrast between the two colors using their luminance values
        //  The darker color is the denominator
        let c, d;
        if (isValid(a) && isValid(b)) {
            // c = new ChromaColor(a);
            // d = new ChromaColor(b);
            return Math.max(a.luminance, b.luminance) / Math.min(a.luminance, b.luminance);
        }
        return null;
    }
    static toHex(model) {
        if (!isValid(model)) return null;
        return toHexString(new ChromaColor(model).channels);
    }
    static toHexa(model) {
        if (!isValid(model)) return null;
        return toHexString(new ChromaColor(model).channels, true);
    }
    static toHsl(model) {
        if (!isValid(model)) return null;
        return toHslString(new ChromaColor(model).channels);
    }
    static toHsla(model) {
        if (!isValid(model)) return null;
        return toHslString(new ChromaColor(model).channels, true);
    }
    static toHsv(model) {
        if (!isValid(model)) return null;
        return toHsvString(new ChromaColor(model).channels);
    }
    static toHsva(model) {
        if (!isValid(model)) return null;
        return toHsvString(new ChromaColor(model).channels, true);
    }
    static toRgb(model) {
        if (!isValid(model)) return null;
        return toRgbString(new ChromaColor(model).channels);
    }
    static toRgba(model) {
        if (!isValid(model)) return null;
        return toRgbString(new ChromaColor(model).channels, true);
    }
    static toX11(model) {
        if (!isValid(model)) return null;
        return toX11String(new ChromaColor(model).channels);
    }
    static parse(model) {
        //  Should return an object that contains the parsed values in the values
        //  field and the passed model in the model field
        return {
            model: model,
            values: [255, 0, 0] // placeholder red
        }
    }
    static validate(model) {
        //  Should return a boolean value depending on if the passed model is a valid
        //  Chroma model
        return isValid(model);
    }

    // Instance Methods
    toHex() {
        return toHexString(this.channels);
    }
    toHexa() {
        return toHexString(this.channels, true);
    }
    toHsl() {
        return toHslString(this.channels);
    }
    toHsla() {
        return toHslString(this.channels, true);
    }
    toHsv() {
        return toHsvString(this.channels);
    }
    toHsva() {
        return toHsvString(this.channels, true);
    }
    toRgb() {
        return toRgbString(this.channels);
    }
    toRgba() {
        return toRgbString(this.channels, true);
    }
    toX11() {
        return toX11String(this.channels);
    }
    toString() {
        return `{alpha: ${this.channels.alpha}, blue: ${this.channels.blue}, green: ${this.channels.green}, luminance: ${this.luminance}, model: ${this.model}, red: ${this.channels.red}}`;
    }
}