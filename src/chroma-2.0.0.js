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
// Auxillary Functions
// Validation Functions
function isContained(value, set) {
    if (!isFinite(value)) return false;
    return value >= set[0] && value <= set[1];
}
function isCmyk(array) {
    const values = array.map(value => parseFloat(value, 10));
    for (i in values) {
        if (isNaN(values[i]) || !isContained(values[i], [0, 100])) return false;
    }
    return true;
}
function isHexa(string) {
    if (!string) return false;
    if (string.length == 5 || string.length == 7) return false;
    if (!/^[\da-f]$/ig.test(model)) return false;
    if (!isFinite(parseInt(string, 16))) return false;
    return true;
}
function isHueModel(array) {
    if (array.length != 3 || array.length != 4) return false;
    if (!isFinite(parseFloat(array[0], 10)) ||
        !isContained(parseFloat(array[1], 10), [0, 100]) ||
        !isContained(parseFloat(array[2], 10), [0, 100])) return false;
    if (array[3] && !isContained(parseFloat(array[3], 10), [0, 1])) return false;
    return true;
}
function isRgba(array) {
    if (array.length != 3 || array.length != 4) return false;
    for (i in array)
        if (i != 3 ? !isContained(parseInt(array[i], [0, 255]), 10) : !isContained(parseFloat(array[i], [0, 1]), 10)) return false;
    return true;
}
function isValid(model) {
    if (arguments.length == 1) {
        if (model instanceof ChromaColor || model instanceof ChromaChannels) {
            return true;
        } else if (typeof model == 'string' && model.length) {
            model = model.replace(/\s|#|0x/gi, '');
            if (/^[\da-f]{1,8}/ig.test(model)) {
                return isHexa(model);
            } else if (x11[model]) {
                return true;
            } else if (/[-\d,\.]+/ig.test(model)) {
                return isRgba(model.match(/(-?\d+\.?\d*)/g));
            } else if (/^rgba?\(/ig.test(model)) {
                return isRgba(model.match(/(-?\d+\.?\d*)/g));
            } else if (/^hsva?|hsla?\(/ig.test(model)) {
                return isHueModel(model.match(/(-?\d+\.?\d*)/g));
            } else if (/^cmyk\(/ig.test(model)) {
                return isCmyk(model.match(/(-?\d+\.?\d*)/g));
            }
        } else if (typeof model == 'number' && isFinite(model)) {
            return isValid(model.toString(16).padStart(6, '0'));
        } else if (Array.isArray(model)) {
            return isRgba(model);
        }
    } else if (arguments.length <= 4) {
        return isValid(Array.from(arguments));
    }
    return false;
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
        1.0,
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
function fromHsla([hue, saturation, lightness, alpha=1.0]) {
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
function fromHsva([hue, saturation, value, alpha=1.0]) {
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
function fromRgba([red, green, blue, alpha=1.0]) {
    let values = [
        parseInt(red, 10),
        parseInt(green, 10),
        parseInt(blue, 10),
        parseFloat(alpha, 10)
    ];
    for (i in values)
        if (i != 3 ? !isContained(values[i], [0, 255]) : !isContained(values[i], [0, 1])) return null;
    return [red / 255, green / 255, blue / 255, values[3]];
}
function fromX11(name) {
    const values = x11[name];
    if (!values) return null;
    return values.map(value => value / 255).concat(1.0);
}

// Conversion Functions
function toCmykString([red, green, blue, _]) {
    const k = 1 - Math.max(red, green, blue);
    const c = (1 - red - k) / (1 - k);
    const m = (1 - green - k) / (1 - k);
    const y = (1 - blue - k) / (1 - k);
    return `c:${Math.round(c * 100) / 100}% m:${Math.round(m * 100) / 100}% y:${Math.round(y * 100) / 100}% k:${Math.round(k * 100) / 100}%`;
}
function toHexNumber([red, green, blue]) {
    let r = Math.round(red * 255).toString(16);
    let g = Math.round(green * 255).toString(16);
    let b = Math.round(blue * 255).toString(16);
    r = r.length == 1 ? '0' + r : r; // left pad all single
    g = g.length == 1 ? '0' + g : g; // hexadecimal characters,
    b = b.length == 1 ? '0' + b : b; // with 0, e.g. 'f' -> '0f'
    return parseInt(`${r}${g}${b}`, 16);
}
function toHexString([red, green, blue, alpha=1.0], bool) {
    let r = Math.round(red * 255).toString(16);
    let g = Math.round(green * 255).toString(16);
    let b = Math.round(blue * 255).toString(16);
    let a = Math.round(alpha * 255).toString(16);
    r = r.length == 1 ? '0' + r : r; // left pad all
    g = g.length == 1 ? '0' + g : g; // single hexadecimal
    b = b.length == 1 ? '0' + b : b; // characters with 0
    a = a.length == 1 ? '0' + a : a; // e.g. 'f' -> '0f'
    if (bool) return `#${r}${g}${b}${a}`;
    return `#${r}${g}${b}`;
}
function toHslString([red, green, blue, alpha=1.0], bool=false) {
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
function toHsvString([red, green, blue, alpha=1.0], bool=false) {
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
function toRgbString([red, green, blue, alpha=1.0], bool=false) {
    if (bool) return `rgba(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)}, ${alpha})`;
    return `rgb(${Math.round(red * 255)}, ${Math.round(green * 255)}, ${Math.round(blue * 255)})`;
}
function toX11String({red, green, blue, _}) {
    const names = Object.keys(x11);
    let nearest = ['', Infinity];
    function score([r, g, b]) {
        return (Math.abs(red - Math.round(r * 255)) + Math.abs(green - Math.round(g * 255)) + Math.abs(blue - Math.round(b * 255))) / 3;
    }
    while (names.length) {
        let name = names.pop();
        let s = score(x11[name]);
        if (s < nearest[1]) nearest = [name, s];
    }
    return nearest[0]; // return just the name
}


const validate = value => {
    
};

const parse = (...args) => {
    if (args.length == 1) {
        let model = args[0];
        if (model instanceof ChromaColor || model instanceof ChromaChannels) {
            return [model.rgb, model.model];
        } else if (typeof model == 'string' && model.length) {
            model = model.replace(/\s|#|0x/gi, '').toLowerCase();
            if (/^[\da-f]{1,8}$/ig.test(model) && (model.length != 5 && model.length != 7)) {
                return [fromHexa(model), model];
            } else if (/^[a-z]+$/ig.test(model) && x11[model]) {
                return [x11[model].map(value => value / 255).concat(1.0), model];
            } else if (/^rgb?\(((\d+\.?\d*),?){3}\)$/ig.test(model)) {
                let values = fromRgba(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toRgbString(values, true)];
            } else if (/^rgba\(((\d+\.?\d*),?){4}\)$/ig.test(model)) {
                let values = fromRgba(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toRgbString(values, true)];
            } else if (/^hsl\(((-?\d+\.?\d*)%?,?){3}\)$/ig.test(model)) {
                let values = fromHsla(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toHslString(values, true)];
            } else if (/^hsla\(((-?\d+\.?\d*)%?,?){4}\)$/ig.test(model)) {
                let values = fromHsla(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toHslString(values, true)];
            } else if (/^hsv\(((-?\d+\.?\d*)%?,?){3}\)$/ig.test(model)) {
                let values = fromHsva(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toHsvString(values, true)];
            } else if (/^hsva\(((-?\d+\.?\d*)%?,?){4}\)$/ig.test(model)) {
                let values = fromHsva(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toHsvString(values, true)];
            }  else if (/^cmyk\(((\d+\.?\d*)%,?){4}\)$/ig.test(model)) {
                let values = fromCmyk(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toCmykString(values)];
            } else if (/^((\d+\.?\d*),?){3,4}$/ig.test(model) ) {
                let values = fromRgba(model.match(/(-?\d+\.?\d*)/g));
                if (values) return [values, toRgbString(values, true)];
            }
        } else if (typeof model == 'number' && isFinite(model)) {
            return parse(model.toString(16).padStart(6, '0'));
        } else if (Array.isArray(model) && (model.length == 3 || model.length == 4)) {
            for (i in model)
                if (!isContained(parseFloat(model[i], 10), [0, 1])) return null;
            if (model.length == 3) return [model.map(value => parseFloat(value, 10)).concat(1.0), model.concat(1.0).toString().replace(/,/g, ', ')]
            return [model.map(value => parseFloat(value, 10)), model.toString().replace(/,/g, ', ')];
        }
    } else if (args.length <= 4) {
        return parse(Array.from(args));
    }
    return null;
};


class ChromaChannels {
    constructor([red, green, blue, alpha]) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}

// class ChromaParser {
//     static byte = false;

//     // Instance Methods
//     contrast(a, b) {
//         if (!isValid(a) || !isValid(b)) return null;
//         const l = new ChromaColor(a).luminance;
//         const m = new ChromaColor(b).luminance;
//         return Math.max(l, m) / Math.min(l, m);
//     }
//     static parse(model) {
//         if (arguments.length == 1) {
//             if (model instanceof ChromaColor || model instanceof ChromaChannels) {
//                 // return [[model.red, model.green, model.blue, model.alpha], model.model];
//             } else if (typeof model == 'string' && model.length) {
//                 model = model.replace(/\s|#|0x/gi, ''); // remove all whitespace, `#` or `0x`
//                 if (/^rgba?\(/ig.test(model)) {
//                     let values = fromRgba(model.match(/(-?\d+\.?\d*)/g));
//                     return [
//                         values,
//                         toRgbString({red: values[0], green: values[1], blue: values[2], alpha: values[3]}, true)
//                     ];
//                 }
//                 // if (isFinite(parseInt(model, 16)) && /^[\da-f]{1,8}/ig.test(model)) {
//                 //     return [fromHexa(model), model];
//                 // } else if (/[a-z]+/ig.test(model)) {
//                 //     return [fromX11(model), model];
//                 // } else if (/[-\d,\.]+/ig.test(model)) {
//                 //     let match = model.match(/(-?\d+\.?\d*)/g);
//                 //     if (!match) return null;
//                 //     return [fromRgba(match), model];
//                 // } else {
//                 //     let match = model.match(/(-?\d+\.?\d*)/g);
//                 //     if (!match) return null;
//                 //     if (/^rgba?\(/ig.test(model)) {
//                 //         return [fromRgba(match), model];
//                 //     } else if (/^hsla?\(/ig.test(model)) {
//                 //         return [fromHsla(match), model];
//                 //     } else if (/^hsva?\(/ig.test(model)) {
//                 //         return [fromHsva(match), model];
//                 //     } else if (/^cmyk\(/ig.test(model)) {
//                 //         return [fromCmyk(match), model];
//                 //     }
//                 // }
//             } else if (typeof model == 'number' && isFinite(model)) {
//                 // return ChromaParser.parse(model.toString(16).padStart(6, '0')); // run it again as a hex string
//             } else if (Array.isArray(model)) {
//                 // if (model.length == 2) {
//                 //     if (ChromaParser.byte ? isContained(model[0], [0, 255]) : isContained(model[1], [0, 1])) return null;
//                 //     if (isContained(model[1], [0, 1])) return null;
//                 //     if (ChromaParser.byte) return [[model[0] / 255, model[0] / 255, model[0] / 255, model[1]],  toRgba(model)];
//                 //     return [[model[0], model[0], model[0], model[1]], toRgba(model)];
//                 // } else if (model.length <= 4) {
//                 //     if (!model[3]) model[3] = 1.0;
//                 //     for (let i in model)
//                 //         if (!(m != 3 && ChromaParser.byte ? isContained(model[i], [0, 255]) : isContained(model[i], [0, 1])) && !(m == 3 && isContained(model[i], [0, 1]))) return null;
//                 //     if (ChromaParser.byte) return [model[0] / 255, model[1] / 255, model[2] / 255, model[3]];
//                 //     return model;
//                 // }
//             }
//         } else if (arguments.length <= 4) {
//             // return ChromaParser.parse(Array.from(arguments)); // run it again as an array of values
//         }
//         return null;
//     }
//     // toCmyk(model) {
//     //     if (!isValid(model)) return null;
//     //     return toCmykString(new ChromaColor(model).channels);
//     // }
//     // toHex(model) {
//     //     if (!isValid(model)) return null;
//     //     return toHexString(new ChromaColor(model).channels, false);
//     // }
//     // toHexa(model) {
//     //     if (!isValid(model)) return null;
//     //     return toHexString(new ChromaColor(model).channels, true);
//     // }
//     // toHsl(model) {
//     //     if (!isValid(model)) return null;
//     //     return toHslString(new ChromaColor(model).channels, false);
//     // }
//     // toHsla(model) {
//     //     if (!isValid(model)) return null;
//     //     return toHslString(new ChromaColor(model).channels, true);
//     // }
//     // toHsv(model) {
//     //     if (!isValid(model)) return null;
//     //     return toHsvString(new ChromaColor(model).channels, false);
//     // }
//     // toHsva(model) {
//     //     if (!isValid(model)) return null;
//     //     return toHsvString(new ChromaColor(model).channels, true);
//     // }
//     // toRgb(model) {
//     //     if (!isValid(model)) return null;
//     //     return toRgbString(new ChromaColor(model).channels, false);
//     // }
//     // toRgba(model) {
//     //     if (!isValid(model)) return null;
//     //     return toRgbString(new ChromaColor(model).channels, true);
//     // }
//     // toX11(model) {
//     //     if (!isValid(model)) return null;
//     //     return toX11String(new ChromaColor(model).channels);
//     // }
//     // validate(model) {
//     //     return isValid(model);
//     // }
// }

class ChromaColor {
    constructor(...args) {
        const [values, model] = (arguments.length == 1 ? parse(args[0]) : parse(Array.from(args)));
        if (!values || !model) return;
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
        if (isContained(value, [0, 1])) this.channels.alpha = value;
        return value;
    }
    set blue(value) {
        if (isContained(value, [0, 1])) this.channels.blue = value;
        return value;
    }
    set green(value) {
        if (isContained(value, [0, 1])) this.channels.green = value;
        return value;
    }
    set red(value) {
        if (isContained(value, [0, 1])) this.channels.red = value;
        return value;
    }
}



