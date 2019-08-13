var chroma;
(function () {
    var x11Dictionary = {
        snow: [255, 250, 250], ghostwhite: [248, 248, 255], whitesmoke: [245, 245, 245],
        gainsboro: [220, 220, 220], floralwhite: [255, 250, 240], oldlace: [253, 245, 230],
        linen: [250, 240, 230], antiquewhite: [250, 235, 215], papayawhip: [255, 239, 213],
        blanchedalmond: [255, 235, 205], bisque: [255, 228, 196], peachpuff: [255, 218, 185],
        navajowhite: [255, 222, 173], moccasin: [255, 228, 181], cornsilk: [255, 248, 220],
        ivory: [255, 255, 240], lemonchiffon: [255, 250, 205], seashell: [255, 245, 238],
        honeydew: [240, 255, 240], mintcream: [245, 255, 250], azure: [240, 255, 255],
        aliceblue: [240, 248, 255], lavender: [230, 230, 250], lavenderblush: [255, 240, 245],
        mistyrose: [255, 228, 225], white: [255, 255, 255], black: [0, 0, 0],
        darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105], slategray: [112, 128, 144], slategrey: [112, 128, 144],
        lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], gray: [128, 128, 128],
        grey: [128, 128, 128], lightgrey: [211, 211, 211], lightgray: [211, 211, 211],
        midnightblue: [25, 25, 112], navy: [0, 0, 128], cornflowerblue: [100, 149, 237],
        darkslateblue: [72, 61, 139], slateblue: [106, 90, 205], mediumslateblue: [123, 104, 238],
        mediumblue: [0, 0, 205], royalblue: [65, 105, 225], blue: [0, 0, 255],
        dodgerblue: [30, 144, 255], deepskyblue: [0, 191, 255], skyblue: [135, 206, 235],
        lightskyblue: [135, 206, 250], steelblue: [70, 130, 180], lightsteelblue: [176, 196, 222],
        lightblue: [173, 216, 230], powderblue: [176, 224, 230], paleturquoise: [175, 238, 238],
        darkturquoise: [0, 206, 209], mediumturquoise: [72, 209, 204], turquoise: [64, 224, 208],
        cyan: [0, 255, 255], lightcyan: [224, 255, 255], cadetblue: [95, 158, 160],
        mediumaquamarine: [102, 205, 170], aquamarine: [127, 255, 212], darkgreen: [0, 100, 0],
        darkolivegreen: [85, 107, 47], darkseagreen: [143, 188, 143], seagreen: [46, 139, 87],
        mediumseagreen: [60, 179, 113], lightseagreen: [32, 178, 170], palegreen: [152, 251, 152],
        springgreen: [0, 255, 127], lawngreen: [124, 252, 0], green: [0, 128, 0],
        chartreuse: [127, 255, 0], mediumspringgreen: [0, 250, 154], greenyellow: [173, 255, 47],
        limegreen: [50, 205, 50], yellowgreen: [154, 205, 50], forestgreen: [34, 139, 34],
        olivedrab: [107, 142, 35], darkkhaki: [189, 183, 107], khaki: [240, 230, 140],
        palegoldenrod: [238, 232, 170], lightgoldenrodyellow: [250, 250, 210], lightyellow: [255, 255, 224],
        yellow: [255, 255, 0], gold: [255, 215, 0], goldenrod: [218, 165, 32], darkgoldenrod: [184, 134, 11],
        rosybrown: [188, 143, 143], indianred: [205, 92, 92], saddlebrown: [139, 69, 19],
        sienna: [160, 82, 45], peru: [205, 133, 63], burlywood: [222, 184, 135],
        beige: [245, 245, 220], wheat: [245, 222, 179], sandybrown: [244, 164, 96],
        tan: [210, 180, 140], chocolate: [210, 105, 30], firebrick: [178, 34, 34],
        brown: [165, 42, 42], darksalmon: [233, 150, 122], salmon: [250, 128, 114],
        lightsalmon: [255, 160, 122], orange: [255, 165, 0], darkorange: [255, 140, 0],
        coral: [255, 127, 80], lightcoral: [240, 128, 128], tomato: [255, 99, 71],
        orangered: [255, 69, 0], red: [255, 0, 0], hotpink: [255, 105, 180],
        deeppink: [255, 20, 147], pink: [255, 192, 203], lightpink: [255, 182, 193],
        palevioletred: [219, 112, 147], maroon: [128, 0, 0], mediumvioletred: [199, 21, 133],
        magenta: [255, 0, 255], violet: [238, 130, 238], plum: [221, 160, 221],
        orchid: [218, 112, 214], mediumorchid: [186, 85, 211], darkorchid: [153, 50, 204],
        darkviolet: [148, 0, 211], blueviolet: [138, 43, 226], purple: [128, 0, 128],
        mediumpurple: [147, 112, 219], thistle: [216, 191, 216], darkgrey: [169, 169, 169],
        darkgray: [169, 169, 169], darkblue: [0, 0, 139], darkcyan: [0, 139, 139],
        darkmagenta: [139, 0, 139], darkred: [139, 0, 0], lightgreen: [144, 238, 144],
        aqua: [0, 255, 255], fuchsia: [255, 0, 255], indigo: [75, 0, 130],
        lime: [0, 255, 0], olive: [128, 128, 0], rebeccapurple: [102, 51, 153],
        silver: [192, 192, 192], teal: [0, 128, 128]
    },
    models = ['hsx', 'rgb', 'hex'],
    validation = {
        hex: function (arr) {
            if (!arr[0].length || arr[0].length === 5 || arr[0].length === 7 || arr[0].length > 8)
                return false;
            return true;
        },
        hsx: function (arr) {
            var i;
            if (3 > arr.length || arr.length > 4)
                return false;
            for (i = 0; i < arr.length; i = i + 1) {
                if (!Number.isFinite(parseFloat(arr[i])))
                    return false;
                if (i === 3 && !validAlphaValue(parseFloat(arr[i]))) {
                    return false;
                } else if (i && (0 > parseFloat(arr[i], 10) || parseFloat(arr[i], 10) > 100)) {
                    return false;
                }
            }
            return true;
        },
        rgb: function (arr) {
            var i;
            if (3 > arr.length || arr.length > 4)
                return false;
            for (i = 0; i < arr.length; i = i + 1) {
                if (i === 3 ? !validAlphaValue(parseFloat(arr[i])) : !validRGBValue(parseInt(arr[i])))
                    return false;
            }
            return true;
        }
    };
    function validAlphaValue (value) {
        if (typeof value !== 'number' || !Number.isFinite(value))
            return false;
        return 0 <= value && value <= 1;
    }
    function validRGBValue (value) {
        if (typeof value !== 'number' || !Number.isFinite(value))
            return false;
        return 0 <= value && value <= 255;
    }
    function validChromaObject (obj) {
        var k;
        if (Object.keys(obj).length !== 4)
            return false;
        for (k in obj) {
            if (/^r|red|g|green|b|blue|a|alpha$/i.test(k) && (k === 'alpha' ? validAlphaValue(obj[k]) : validRGBValue(obj[k])))
                continue;
            return false;
        }
        return true;
    }
    function validateRGBArray (arr) {
        var i;
        if (arr.length < 3 || arr.length > 4)
            return false;
        for (i = 0; i < arr.length; i = i + 1)
            if (i === 3 ? !validAlphaValue(parseFloat(arr[i], 10)) : !validRGBValue(parseInt(arr[i], 10)))
                return false;
        return true;
    }
    function sanitize (result) {
        if (result === null)
            return false;
        return result.slice(1).filter(function (r) {
            return r ? true : false;
        });
    }
    function validate (clean, fn) {
        if (Array.isArray(clean) && clean.length)
            return fn(clean);
        return false;
    }

    
    chroma = function (model) {
        console.log(model);
    };
    chroma.validate = function (value) {
        var rx, regex = [
            /^(?:hsla?|hsva?\()?(-?\d{1,}),\s*(\d{1,3})%,\s*(\d{1,3})%,?\s*(\d+\.?\d*|\.\d+)?\s*\)?;*?$/i,
            /^(?:rgba?\()?(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),?\s*(\d+\.?\d*|\.\d+)?\s*\)?;*?$/i,
            /^(?:#|0x)([0-9A-F]{1,8})$/i
        ];
        if (typeof value === 'string' && /^[A-Z]+$/i.test(value)) {
            return x11Dictionary[value] ? true : false;
        } else if (typeof value === 'string' && value.length) {
            for (rx in regex)
                if (regex[rx].test(value))
                    return validate(sanitize(value.match(regex[rx])), validation[models[rx]]);
            return false;
        } else if (Array.isArray(value)) {
            return validateRGBArray(value);
        } else {
            return validChromaObject(value);
        }
    }
}());