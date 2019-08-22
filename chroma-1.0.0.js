var chroma;
(function () {
    var dictionary = {},
        from = {},
        to = {};
    //  Validation Functions  //
    function validChroma (obj) {
        if (typeof obj !== 'object' || obj === null)
            return false;
        return Object.getPrototypeOf(obj) === Chroma.prototype;
    }
    function validHsx (arr) {
        var i;
        for (i = 0; i < arr.length; i = i + 1) {
            if (i && 0 > arr[i])
                return false;
            if (i === 3 && arr[i] > 1) {
                return false;
            } else if (i && arr[i] > 100) {
                return false;
            }
        }
        return true;
    }
    function validRgb (arr) {
        var i;
        for (i = 0; i < arr.length; i = i + 1) {
            if (i && 0 > arr[i])
                return false;
            if (i === 3 && arr[i] > 1) {
                return false;
            } else if (i && arr[i] > 255) {
                return false;
            }
        }
        return true;
    }
    function validModel () {
        var match;
        function percents (arr) {
            var i, c = 0;
            for (i = 0; i < arr.length; i = i + 1)
                if (typeof arr[i] === 'string' && arr[i].includes('%'))
                    c = c + 1
            return c;
        }
        function parse (arr) {
            var i, n, a = [];
            if (!arr)
                return [];
            for (i = 0; i < arr.length; i = i + 1) {
                n = parseFloat(arr[i]);
                if (typeof n !== 'number' || !Number.isFinite(n))
                    return [];
                a.push(n);
            }
            return a;
        }
        if (typeof value === 'string' && value.length) {
            if (value.includes(',')) {
                match = parse(value.match(/(-?\d{1,3}(\.?\d*)?)+/g));
                if (match && match.length === 3) {
                    if (/^hsl\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^hsv\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^rgb\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    }
                } else if (match && match.length === 4) {
                    if (/^hsla\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^hsva\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^rgba\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    }
                }
            } else if (/^(?:#|0x|0X)?([\da-f]{1,8}){1}$/g.test(value)) {
                match = value.replace(/^#|0x/ig, '').match(/([\da-f])/g);
                if (match && (match.length === 4 || match.length === 8)) {
                    return true;
                } else if (match && (match.length !== 5 && match.length !== 7)) {
                    return true;
                }
            } else if (/^[a-z]{2,}$/g.test(value)) {
                match = x11Dictionary[value];
                if (match && match.length === 3)
                    return true
            }
        } else if (Array.isArray(value) && 2 < value.length && value.length < 5) {
            match = parse(value);
            if (match && percents(value) === 2) {
                if (match.length === 3) {
                    return validHsx(match) ? true : false;
                } else if (match.length === 4) {
                    return validHsx(match) ? true : false;
                }
            } else if (match && !percents(value)) {
                if (match.length === 3) {
                    return validRgb(match) ? true : false;
                } else if (match.length === 4) {
                    return validRgb(match) ? true : false;
                }
            }
        } else if (validChroma(value)) {
            return true;
        }
        return false;
    }
    //  Auxilary Functions  //
    function parseModel () {
        var match;
        function percents (arr) {
            var i, c = 0;
            for (i = 0; i < arr.length; i = i + 1)
                if (typeof arr[i] === 'string' && arr[i].includes('%'))
                    c = c + 1
            return c;
        }
        function parse (arr) {
            var i, n, a = [];
            if (!arr)
                return [];
            for (i = 0; i < arr.length; i = i + 1) {
                n = parseFloat(arr[i]);
                if (typeof n !== 'number' || !Number.isFinite(n))
                    return [];
                a.push(n);
            }
            return a;
        }
        if (typeof value === 'string' && value.length) {
            if (value.includes(',')) {
                match = parse(value.match(/(-?\d{1,3}(\.?\d*)?)+/g));
                if (match && match.length === 3) {
                    if (/^hsl\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsl'].concat(match) : null;
                    } else if (/^hsv\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsv'].concat(match) : null;
                    } else if (/^rgb\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgb'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsv'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgb'].concat(match) : null;
                    }
                } else if (match && match.length === 4) {
                    if (/^hsla\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsla'].concat(match) : null;
                    } else if (/^hsva\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsva'].concat(match) : null;
                    } else if (/^rgba\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgba'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsva'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgba'].concat(match) : null;
                    }
                }
            } else if (/^(?:#|0x|0X)?([\da-f]{1,8}){1}$/g.test(value)) {
                match = value.replace(/^#|0x/ig, '').match(/([\da-f])/g);
                if (match && (match.length === 4 || match.length === 8)) {
                    return ['hexa'].concat(match);
                } else if (match && (match.length !== 5 && match.length !== 7)) {
                    return ['hex'].concat(match);
                }
            } else if (/^[a-z]{2,}$/g.test(value)) {
                match = dictionary[value];
                if (match && match.length === 3)
                    return ['x11'].concat(match);
            }
        } else if (Array.isArray(value) && 2 < value.length && value.length < 5) {
            match = parse(value);
            if (match && percents(value) === 2) {
                if (match.length === 3) {
                    return validHsx(match) ? ['hsv'].concat(match) : null;
                } else if (match.length === 4) {
                    return validHsx(match) ? ['hsva'].concat(match) : null;
                }
            } else if (match && !percents(value)) {
                if (match.length === 3) {
                    return validRgb(match) ? ['rgb'].concat(match) : null;
                } else if (match.length === 4) {
                    return validRgb(match) ? ['rgba'].concat(match) : null;
                }
            }
        } else if (validChroma(value)) {
            return ['rgba'].concat(parse([value.red, value.green, value.blue, value.alpha]));
        }
        return null;
    }
    //  From Functions  //
    function fromHex (arr) {
        switch (arr.length) {
            case 1:
                return [parseInt(arr[0] + arr[0], 16), parseInt(arr[0] + arr[0], 16), parseInt(arr[0] + arr[0], 16)];
            case 2:
                return [parseInt(arr[0] + arr[1], 16), parseInt(arr[0] + arr[1], 16), parseInt(arr[0] + arr[1], 16)];
            case 3:
                return [parseInt(arr[0] + arr[0], 16), parseInt(arr[1] + arr[1], 16), parseInt(arr[2] + arr[2], 16)];
            default:
                return [parseInt(arr[0] + arr[1], 16), parseInt(arr[2] + arr[3], 16), parseInt(arr[4] + arr[5], 16)];
        }
    }
    function fromHexa (arr) {
        switch (arr.length) {
            case 4:
                return [parseInt(arr[0] + arr[0], 16), parseInt(arr[1] + arr[1], 16), parseInt(arr[2] + arr[2], 16), Math.round(parseInt(arr[3] + arr[3], 16) / 2.55) / 100];
            default:
                return [parseInt(arr[0] + arr[1], 16), parseInt(arr[2] + arr[3], 16), parseInt(arr[4] + arr[5], 16), Math.round(parseInt(arr[6] + arr[7], 16) / 2.55) / 100];
        }
    }
    function fromHsl (arr) {
        var r, g, b;
        function hue (t, s, l) {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                p = 2 * l - q;
            t = t < 0 ? t + 1 : t;
            t = t > 1 ? t - 1 : t;
            if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            } else if (t < 1 / 2) {
                return q;
            } else if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            } else {
                return p;
            }
        }
        if (values[1] === 0) {
            r = g = b = values[2] / 100;
        } else {
            r = hue((values[0] % 360) / 360 + 1 / 3, values[1] / 100, values[2] / 100);
            g = hue((values[0] % 360) / 360, values[1] / 100, values[2] / 100);
            b = hue((values[0] % 360) / 360 - 1 / 3, values[1] / 100, values[2] / 100);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function fromHsla (arr) {
        return fromHsl(arr).concat(Math.round(100 * arr[3]) / 100);
    }
    function fromHsv (arr) {
        var r,
            g,
            b,
            i = Math.floor(((values[0] % 360) / 360) * 6),
            f = ((values[0] % 360) / 360) * 6 - i,
            p = (values[2] / 100) * (1 - (values[1] / 100)),
            q = (values[2] / 100) * (1 - f * (values[1] / 100)),
            t = (values[2] / 100) * (1 - (1 - f) * (values[1] / 100));
        switch (i % 6) {
            case 0:
                r = values[2] / 100;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = values[2] / 100;
                b = p;
                break;
            case 2:
                r = p;
                g = values[2] / 100;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = values[2] / 100;
                break;
            case 4:
                r = t;
                g = p;
                b = values[2] / 100;
                break;
            case 5:
                r = values[2] / 100;
                g = p;
                b = q;
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function fromHsva (arr) {
        return fromHsv(arr).concat(Math.round(100 * arr[3]) / 100);
    }
    function fromRgba (arr) {
        return [arr[0], arr[1], arr[2], Math.round(100 * arr[3]) / 100];
    }
    function from (arr) {
        var dict = {hex: 0, hexa: 1, hsl: 2, hsla: 3, hsv: 4, hsva: 5, rgba: 6};
        switch (dict[arr[0]]) {
            case 0:
                return fromHex(arr.slice(1));
            case 1:
                return fromHexa(arr.slice(1));
            case 2:
                return fromHsl(arr.slice(1));
            case 3:
                return fromHsla(arr.slice(1));
            case 4:
                return fromHsv(arr.slice(1));
            case 5:
                return fromHsva(arr.slice(1));
            case 6:
                return fromRgba(arr.slice(1));
            default:
                return arr.slice(1)
        }
    }
    //  To Functions  //
    function toHex (model, obj) {
        var alpha = (Math.round(obj.alpha * 255));
        if (model === 'hex')
            return '#' + (obj.red < 16 ? '0' + obj.red.toString(16) : obj.red.toString(16)) + (obj.green < 16 ? '0' + obj.green.toString(16) : obj.green.toString(16)) + (obj.blue < 16 ? '0' + obj.blue.toString(16) : obj.blue.toString(16));
        return '#' + (obj.red < 16 ? '0' + obj.red.toString(16) : obj.red.toString(16)) + (obj.green < 16 ? '0' + obj.green.toString(16) : obj.green.toString(16)) + (obj.blue < 16 ? '0' + obj.blue.toString(16) : obj.blue.toString(16)) + (alpha < 16 ? '0' + alpha.toString(16) : alpha.toString(16));
    }
    function toHsl (obj) {
        var r = obj.red / 255,
            g = obj.green / 255,
            b = obj.blue / 255,
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h,
            s,
            l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    break;
            }
            h = h / 6;
        }
        return [Math.round(h * 36000) / 100,Math.round(s * 10000) / 100, Math.round(l * 10000) / 100];
    }
    function toHsv (obj) {
        var r = obj.red / 255,
            g = obj.green / 255,
            b = obj.blue / 255,
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h,
            s = max === 0 ? 0 : d / max,
            v = max;
        if (max === min) {
            h = 0;
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h = h / 6;
        }
        return [Math.round(h * 36000) / 100, Math.round(s * 10000) / 100, Math.round(v * 10000) / 100];
    }
    function toHsx (model, obj) {
        var arr = /^hsla?$/g.test(model) ? toHsl(obj) : toHsv(obj);
        if (/^hsla|hsva$/g.test(model))
            return model + '(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%, ' + Math.round(obj.alpha * 100) / 100 + ')';
        return  model + '(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%)';
    }
    function toRgb (model, obj) {
        if (/^rgba$/g.test(model))
            return 'rgba(' + obj.red + ', ' + obj.green + ', ' + obj.blue + ', ' + Math.round(obj.alpha * 100) / 100 + ')';
        return  'rgb(' + obj.red + ', ' + obj.green + ', ' + obj.blue + ')';
    }
    function toX11 (obj) {
        var scores = {},
            nearest = 'snow';
        Object.keys(dictionary).forEach(function (color) {
            var channels = dictionary[color];
            scores[color] = (Math.abs(obj.red - channels[0]) + Math.abs(obj.green - channels[1]) + Math.abs(obj.blue - channels[2])) / 3;
        });
        Object.keys(scores).forEach(function(score) {
            if (scores[nearest] > scores[score])
                nearest = score;
        });
        return nearest;
    }
    function to (model, obj) {
        var dict = {hex: 0, hexa: 0, hsl: 1, hsla: 1, hsv: 1, hsva: 1, rgb: 2, rgba: 2};
        switch (dict[arr[0]]) {
            case 0:
                return toHex(model, obj);
            case 1:
                return toHsx(model, obj);
            case 2:
                return toRgb(model, obj);
            default:
                return toX11(obj);
        }
    }
    //  Chroma Object  //
    function Chroma (red, green, blue, alpha) {
        Object.defineProperties(this, {
            alpha: {
                get: function () {
                    return this.channels.alpha;
                },
                set: function (value) {
                    if (value >= 0 && value <= 1)
                        this.channles.alpha = value;
                    return value;
                }
            },
            blue: {
                get: function () {
                    return this.channels.blue;
                },
                set: function (value) {
                    if (value >= 0 && value <= 255)
                        this.channels.blue = value;
                    return value;
                }
            },
            channels: {
                value: {
                    alpha: typeof alpha === 'number' && Number.isFinite(alpha) ? alpha : 1,
                    blue: blue,
                    green: green,
                    red: red
                }
            },
            green: {
                get: function () {
                    return this.channels.green;
                },
                set: function (value) {
                    if (value >= 0 && value <= 255)
                        this.channels.green = value;
                    return value;
                }
            },
            luminance: {
                get: function () {
                    var sR = this.red / 255,
                        sG = this.green / 255,
                        sB = this.blue / 255,
                        R = sR <= 0.03928 ? sR / 12.92 : Math.pow((sR + 0.055) / 1.055, 2.4),
                        G = sG <= 0.03928 ? sG / 12.92 : Math.pow((sG + 0.055) / 1.055, 2.4),
                        B = sB <= 0.03928 ? sB / 12.92 : Math.pow((sB + 0.055) / 1.055, 2.4);
                    return 0.2126 * R + 0.7152 * G + 0.0722 * B + 0.05;
                }
            },
            red: {
                get: function () {
                    return this.channels.red;
                },
                set: function (value) {
                    if (value >= 0 && value <= 255)
                        this.channels.red = value;
                    return value;
                }
            },
            to: {
                value: function (model) {
                    if (typeof model === 'string' && /^hexa?|hsla?|hsva?|rgba?$/ig.test(model))
                        return to(model, this.channels);
                    return null;
                }
            },
            toHex: {
                value: function () {
                    return to('hex', this.channels);
                }
            },
            toHexa: {
                value: function () {
                    return to.hexa('hexa', this.channels);
                }
            },
            toHsl: {
                value: function () {
                    return to.hsl('hsl', this.channels);
                }
            },
            toHsla: {
                value: function () {
                    return to.hsla('hsla', this.channels);
                }
            },
            toHsv: {
                value: function () {
                    return to.hsv('hsv', this.channels);
                }
            },
            toHsva: {
                value: function () {
                    return to.hsva('hsva', this.channels);
                }
            },
            toRgb: {
                value: function () {
                    return to.rgb('rgb', this.channels);
                }
            },
            toRgba: {
                value: function () {
                    return to.rgba('rgba', this.channels);
                }
            }
        });
    }
    //  Chroma Function  //
    chroma = function (model) {
        var channels;
        if (validColor(model)) {
            channels = from(parseModel(model));
            return new Chroma(channels[1], channels[2], channels[3], channels[4]);
        }
        return null;
    };
    //  Chroma Methods  //
    chroma.contrast = function (color1, color2) {
        var c1 = chroma(color1),
            c2 = chroma(color2);
        if (c1 && c2) 
            return (c1.luminance > c2.luminance ? c1.luminance : c2.luminance) / (c1.luminance > c2.luminance ? c2.luminance : c1.luminance);
        return null;
    };
    chroma.parse = function (value) {
        return parseModel(value)
    };
    chroma.validate = function (value) {
        return validModel(value);
    };
}());