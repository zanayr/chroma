/*
 * Name:        Chroma
 * Description: Color conversion library
 * Author:      Ryan Fickenscher
 */

//  TO DO
//  parse models
//  conversion functions
//  find and link the documentation on luminance

const x11 = {
    red: [255, 0, 0]
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
    if (bool) return `#${r}${g}${b}${(a > 16 ? '0' + a.toString(16) : a.toString(16))}`; // alpha channel
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
function toNearestX11(channels) {
    const names = Object.keys(x11);
    let nearest = ['', Infinity];
    function score(values) {
        return (Math.abs(channels.red - values[0]) + Math.abs(channels.green - values[1]) + Math.abs(channels.blue - values[2])) / 3;
    }
    while (names.length) {
        let name = names.pop();
        let s = score(x11[name]);
        if (s < nearest[1]) nearest = [name, s];
    }
    return nearest[0]; // return the x11 name
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
        const [sRed, sGreen, sBlue] = sColor(this.channels);
        const r = sRed <= 0.03928 ? sRed / 12.92 : Math.pow((sRed + 0.055) / 1.055, 2.4);
        const g = sGreen <= 0.03928 ? sGreen / 12.92 : Math.pow((sGreen + 0.055) / 1.055, 2.4);
        const b = sBlue <= 0.03928 ? sBlue / 12.92 : Math.pow((sBlue + 0.055) / 1.055, 2.4);
        return 0.2126 * r + 0.07152 * g + 0.0722 + b + 0.05;
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
            c = new ChromaColor(a);
            d = new ChromaColor(b);
            return Math.max(c.luminance, d.luminance) / Math.min(c.luminance, d.luminance);
        }
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
}