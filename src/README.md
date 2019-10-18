# Chroma.js
Chroma is a small custom javascript library that provides a very simple abstraction to translate colors.


## Chroma Function
The global chroma function is used to convert a chroma model into a ChromaColor object.
```
var color = chroma('pink');
//  Will create a new ChromaColor object
```

The chroma function has three useful methods: contrast, parse and validate.
**Contrast**
The contrast method returns a numeric value between the range of 1 and 21, that is the difference in luminance of two passed chroma colors. A value of one is considered to be of low contrast between the colors, while anything above eight is considered high contrast.
```
console.log(chroma.contast(chroma('pink'), chroma('blue')));
// logs 5.586830663049601 to the console
```

**Parse**
The parse method returns an array containing a string of the passed model's name and its parsed numeric values.
```
console.log(chroma.parse('pink'));
// logs ["x11", 255, 192, 203] to the console
```

**Validate**
The validate method returns a true boolean value if the method is passed a valid chroma model, and false if passed an invalid model.
```
console.log(chroma.validate('pink'));
// logs true to the console
console.log(chroma.validate(1234));
// logs false to the console
```

**Valid Color Models**
Valid Chroma color models inlclude the common string values of the rgb, rgba, hsl, hsla, hsv, hex and the 140 x11 web browser standard colors, along with hsva and several variations of hexadecimal color values.
```
// all 140 x11 browser standard colors
chroma('pink');

//  Various different rgb and rgba models
chroma('255, 193, 205');            // string of rgb values delimited by commas
chroma('255, 193, 205, 1');         // string of rgba values delimited by commas
chroma([255, 193, 205]);            // array of numeric rgb values
chroma([255, 193, 205, 1]);         // array of numeric rgba values
chroma('rgb(255, 193, 205)');       // css rgb model string
chroma('rgba(255, 193, 205, 1)');   // css rgba model string

//  Hexidecimal string values can begin with or without an octothorp (hash) character
chroma('#abcdef');                  // six character hex string, with an # sign
chroma('abcdef');                   // six character hex string, without an # sign
chroma('#abc');                     // three character shorthand, equivalent to '#aabbcc'
chroma('#ab');                      // two character shorthand, equivalent to '#ababab'
chroma('#a');                       // single character shorthand, equivalent to '#aaaaaa'

//  Chroma also accepts "hexa" values, hexadecimal values with an alpha channel
chroma('#000000ff');                // eight character hexa string, with an # sign
chroma('000000ff');                 // eight character hexa string, without an # sign
chroma('#abcf');                    // four character shorthand, equivalent to '#aabbccff'

//  Hsl, hsla, hsv and hsva string values
chroma('hsl(350, 100%, 88%)');      // css hsl model string
chroma('hsla(350, 100%, 88%, 1)');  // css hsla model string
chroma('hsv(350, 25%, 100%)');      // css hsv model string
chroma('hsva(350, 25%, 100%, 1)');  // hsva model string based on the css hsv model string
```



## Properties
**Model**
The model property is the stored original value that was passed to the `chroma` function call.
```
console.log(color.model);
//  logs "pink" to the console
```

**Channels**
The channels property is a `ChromaChannel` object, storing red, green, blue and alpha values for the `ChromaColor` object.

**Luminance**
The luminance property get the chroma color's luminance, or "apparent brightness"

**Red**
The red property gets and sets the red propery value of the `ChromaChannel` object stored in the `channels` property.
```
console.log(color.red);
//  logs 255 to the console
```

**Green**
The green property gets and sets the green propery value of the `ChromaChannel` object stored in the `channels` property.

**Blue**
The blue property gets and sets the blue propery value of the `ChromaChannel` object stored in the `channels` property.

**Alpha**
The alpha property gets and sets the alpha propery value of the `ChromaChannel` object stored in the `channels` property.


## Methods
ChromaColor objects have two methods to convert their color values.

**To**
The to method takes a valid chroma color model name, as a string, and returns a string of the passed model.
```
console.log(color.to('rgb'));
//  logs "rgb(255, 193, 205)" to the console
```

**ToArray**
The toArray method returns an array of numerical rgb values.
```
console.log(color.toArray());
//  logs [255, 193, 205, 1] to the console
```

To avoid recieving an alpha value, simply pass true as a parameter.
```
console.log(color.toArray(true));
//  logs [255, 193, 205] to the console
```


## Summary
And that about sums it up. If you'd like to see the library in action, check out my two projects, Chroma App or grab.js.