/*
Name: Chroma
Author: Ryan Fickenscher
*/

const X11 = { // a dictionary of x11 standard browser color names, and RGB arrays
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
function parseModel(value) {
    return [null, null, null, null];
}
function validRgb(values) {
    if (!Array.isArray(values)) return false; // not passed an array
    else if (values.length < 3) return false; // array is too short
    else if (values.length > 4) return false; // array is too long
    for (i in values) {
        if (typeof value != 'number' || !isFinite(value)) return false; // not a valid number
        else if (values[i] < 0) return false; // negative value
        else if (i != 3 && values[i] > 255) return false; // value is greater than 255
        else if (i == 3 && i > 1) return false;  // alpha channel is greater than 1
        else if (i > 3) return false;
    }
    return true;
}
function validateModel(value) {
    
}

//  Conversion Functions
function convertToHexString({red, green, blue, _}, alpha) {
  //  Should return hexadecimal model string
  const r = red < 16 ? '0' + red.toString(16) : red.toString(16);
  const g = green < 16 ? '0' + green.toString(16) : green.toString(16);
  const b = blue < 16 ? '0' + blue.toString(16) : blue.toString(16);
  const a = Math.round(channels.alpha * 255); // convert to from set of [0, 1] to [0, 255]
  if (alpha) return `#${r}${g}${b}${(a < 16 ? '0' + a.toString(16) : a.toString(16))}`;
  return `#${r}${g}${b}`;
}
function convertToHslArray({red, green, blue, _}) {
  //  Should return an array of HSL values
  const sRed = red / 255;
  const sGreen = green / 255;
  const sBlue = blue / 255;
  const max = Math.max(sRed, sGreen, sBlue);
  const min = Math.min(sRed, sGreen, sBlue);
  const distance = max - min;
  const lightness = (max + min) / 2;
  let hue, saturation;
  if (max === min) {
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
        default:
          hue = (sRed - sGreen) / distance + 4;
          break;
        default:
          break;
      }
      hue = hue / 6;
  }
  return [
    Math.round(hue * 36000) / 100,
    Math.round(saturation * 10000) / 100,
    Math.round(lightness * 10000) / 100
  ];
}
function convertToHslString(channels, alpha) {
    //  Should return an HSL model string
    const values = convertToHslArray(channels);
    if (alpha) return `hsla(${values[0]}, ${values[1]}%, ${values[2]}%, ${channels.alpha})`;
    return `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}
function convertToHsvArray({red, green, blue, _}) {
  const sRed = red / 255;
  const sGreen = green / 255;
  const sBlue = blue / 255;
  const max = Math.max(sRed, sGreen, sBlue);
  const min = Math.min(sRed, sGreen, sBlue);
  const distance = max - min;
  const saturation = max === 0 ? 0 : distance / max;
  let hue;
  if (max === min) {
    hue = 0;
  } else {
    switch (max) {
      case sRed:
        hue = (sGreen - sBlue) / distance + (sGreen > sBlue ? 6 : 0);
        break;
      case sGreen:
        hue = (sBlue - sRed) / distance + 2;
        break;
      case sBlue:
        hue = (sRed - sGreen) / d + 4;
        break;
      default:
        break;
    }
    hue = hue / 6;
  }
  return [
    Math.round(hue * 36000) / 100,
    Math.round(saturation * 10000) / 100,
    Math.round(max * 10000) / 100
  ];
}
function convertToHsvString(channels, alpha) {
  const values = convertToHsvArray(channels);
  if (alpha) return `hsva(${values[0]}, ${values[1]}%, ${values[2]}%, ${channels.alpha})`;
  return `hsv(${values[0]}, ${values[1]}%, ${values[2]}%)`;
}
function convertToRgbString(channels, alpha) {
  if (alpha) return `rgba(${channels.red}, ${channels.green}, ${channels.blue}, ${channels.alpha})`;
  return `rgb(${channels.red}, ${channels.green}, ${channels.blue})`;
}
function convertToNearestX11Name(channels) {
  const scores = {};
  let nearest = Object.keys(X11)[0]; // get the first name in the X11 dictionary
  Object.keys(X11).forEach(name => {
      let values = X11[name].slice(); // copy array values
      scores[name] = (Math.abs(channels.red - values[0]) + Math.abs(channels.green - values[1]) + Math.abs(channels.blue - values[2])) / 3;
  }).forEach(name => {
      if (score[nearest] > scores[name]) nearest = name;
  });
  return nearest;
}

//  Channel Class
export class ChromaChannel {
    constructor([red, blue, green, alpha]) {
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.alpha = alpha;
    }
}

//  Chroma Class
export default class ChromaColor {
  //  Getters
  get alpha() {
    return this.channels.alpha;
  }
  get blue() {
    return this.channels.blue;
  }
  get luminance() {
    const sRed = this.red / 255;
    const sGreen = this.green / 255;
    const sBlue = this.blue / 255;
    const red = sRed <= 0.03928 ? sRed / 12.92 : Math.pow((sRed + 0.055) / 1.055, 2.4);
    const green = sGreen <= 0.03928 ? sGreen / 12.92 : Math.pow((sGreen + 0.055) / 1.055, 2.4);
    const blue = sBlue <= 0.03928 ? sBlue / 12.92 : Math.pow((sBlue + 0.055) / 1.055, 2.4);
    return 0.2126 * red + 0.7152 * green + 0.0722 + blue + 0.05;
  }
  get green() {
    return this.channels.green;
  }
  get red() {
    return this.channels.red;
  }

  //  Setters
  set alpha(value) {
    //  Check if the passed value is a finite number and contained in the set [0, 1]
    if (isFinite(value) && (value >= 0 && value <= 1)) this.channels.alpha = value;
    return value;
  }
  set blue(value) {
    //  Check if the passed value is a finite number and contained in the set
    //  [0, 255]
    if (isFinite(value) && (value >= 0 && value <= 255)) this.channels.blue = Math.floor(value);
    return value;
  }
  set green(value) {
    //  Check if the passed value is a finite number and contained in the set
    //  [0, 255]
    if (isFinite(value) && (value >= 0 && value <= 255)) this.channels.green = Math.floor(value);
    return value;
  }
  set red(value) {
    //  Check if the passed value is a finite number and contained in the set
    //  [0, 255]
    if (isFinite(value) && (value >= 0 && value <= 255)) this.channels.red = Math.floor(value);
    return value;
  }

  //  Static Methods
  static contrast(color1, color2) {
    let c1, c2;
    if (validateModel(color1) && validateModel(color2)) {
        c1 = new ChromaColor(color1);
        c2 = new ChromaColor(color2);
        if (c1.luminance > c2.luminance) return c1.luminance / c2.luminance;
        return c2.luminance / c1.luminance;
    }
    return null;
  }
  static parse(value) {
    return null;
  }
  static validate(value) {
    return validateModel(value);
  }
  static toHex(value) {
    //  Should return a valid HEX model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToHexString(new ChromaColor(value).channels);
  }
  static toHexa(value) {
    //  Should return a valid HEXA model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToHexString(new ChromaColor(value).channels, true);
  }
  static toHsl(value) {
    //  Should return a valid HSL model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToHslString(new ChromaColor(value).channels);
  }
  static toHsla(value) {
    //  Should return a valid HSLA model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToHslString(new ChromaColor(value).channels, true);
  }
  static toHsv(value) {
    //  Should return a valid HSV model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToHsvString(new ChromaColor(value).channels);
  }
  static toHsva(value) {
    //  Should return a valid HSVA model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToHsvString(new ChromaColor(value).channels, true);
  }
  static toRgb(value) {
    //  Should return a valid RGB model string when passed a valid value
    //  Valid models:
    //  "rgb(0, 0, 0)" - string
    //  [0, 0, 0] - array of numbers
    //  "0, 0, 0" - string
    //  0, 0, 0 - 3 int params?
    if (!validateModel(value)) return null;
    return convertToRgbString(new ChromaColor(value).channels);
  }
  static toRgba(value) {
    //  Should return a valid RGBA model string when passed a valid value
    if (!validateModel(value)) return null;
    return convertToRgbString(new ChromaColor(value).channels, true);
  }
  static toNearestX11(value) {
    //  Should return the nearest X11 browser standard color name model string when
    //  passed a valid value
    if (!validateModel(value)) return null;
    return convertToNearestX11Name(new ChromaColor(value).channels);
  }

  //  Instance Methods
  stringify() {
    //  Should return a string representing the chroma object
    return `{alpha: ${this.alpha}, blue: ${this.blue}, green: ${this.green}, luminance: ${this.luminance}, model: ${this.model}, red: ${this.red}}`;
  }
  toHex() {
    //  Should return a valid HEX model string
    return convertToHexString(this.channels);
  }
  toHexa() {
    //  Should return a valid HEXA model string
    return convertToHexString(this.channels, true);
  }
  toHsl() {
    //  Should return a valid HSL model string
    return convertToHslString(this.channels);
  }
  toHsla() {
    //  Should return a valid HSLA model string
    return convertToHslString(this.channels, true);
  }
  toHsv() {
    //  Should return a valid HSV model string
    return convertToHsvString(this.channels);
  }
  toHsva() {
    //  Should return a valid HSVA model string
    return convertToHsvString(this.channels, true);
  }
  toRgb() {
    //  Should return a valid RGB model string
    return convertToRgbString(this.channels);
  }
  toRgba() {
    //  Should return a valid RGB model string
    return convertToRgbString(this.channels, true);
  }
  toNearestX11() {
    //  Should return the nearest X11 browser standard color string
    return convertToNearestX11Name(this.channels);
  }

  //  Constructor
  constructor (model) {
    let parseModeld = parseModel(model);
    this.channels = new ChromaChannel(parseModeld.values);
    this.model = parseModeld.model;
  }
}