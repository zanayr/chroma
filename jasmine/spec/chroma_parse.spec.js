// Invalid Models
describe('Testing invalid models with the Chroma 2.0 parse function', () => {
    it('\'\' should return null', () => {
        expect(parse('')).toBeNull();
    });
    it('\'null\' should return null', () => {
        expect(parse(null)).toBeNull();
    });
    it('\'undefined\' should return null', () => {
        expect(parse(undefined)).toBeNull();
    });
});


//  RGB Models
describe('Testing invalid rgb models with the Chroma 2.0 parse function', () => {
    it('\'rgb(-1, 0, 0)\' should be null', () => {
        expect(parse('rgb(-1, 0, 0)')).toBeNull();
    });
    it('\'rgb(256, 0, 0)\' should be null', () => {
        expect(parse('rgb(256, 0, 0)')).toBeNull();
    });
    it('\'rgb(255, 0)\' should be null', () => {
        expect(parse('rgb(255, 0)')).toBeNull();
    });
    it('\'rgb(255, 255, 255, 1.0, 0)\' should be null', () => {
        expect(parse('rgb(255, 255, 255, 1.0, 0)')).toBeNull();
    });
    it('\'rgb(255, 255, 255, m)\' should be null', () => {
        expect(parse('rgb(255, 255, 255, m)')).toBeNull();
    });
    it('\'rgb(foo, bar)\' should be null', () => {
        expect(parse('rgb(foo, bar)')).toBeNull();
    });
    it('\'rgb(255, foo)\' should be null', () => {
        expect(parse('rgb(255, foo)')).toBeNull();
    });
});
describe('Testing valid rgb models with the Chroma 2.0 parse function', () => {
    it('\'rgb(255, 0, 0)\' should be red', () => {
        expect(parse('rgb(255, 0, 0)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'rgb(0, 255, 0)\' should be green', () => {
        expect(parse('rgb(0, 255, 0)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'rgb(0, 0, 255)\' should be blue', () => {
        expect(parse('rgb(0, 0, 255)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'rgb(0, 0, 0)\' should be black', () => {
        expect(parse('rgb(0, 0, 0)')[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'rgb(255, 255, 255)\' should be white', () => {
        expect(parse('rgb(255, 255, 255)')[0]).toEqual([1, 1, 1, 1]);
    });
});


//  HSL Models
describe('Testing invalid hsl models with the Chroma 2.0 parse function', () => {
    it('\'hsl(90, -100%, 50%)\' should be null', () => {
        expect(parse('hsl(90, -100%, 50%)')).toBeNull();
    });
    it('\'hsl(240, 101%, 50%)\' should be null', () => {
        expect(parse('hsl(240, 101%, 50%)')).toBeNull();
    });
    it('\'hsl(45, 100%)\' should be null', () => {
        expect(parse('hsl(45, 100%)')).toBeNull();
    });
    it('\'hsl(1080, 100%, 50%, 1.0, 0)\' should be null', () => {
        expect(parse('hsl(1080, 100%, 50%, 1.0, 0)')).toBeNull();
    });
    it('\'hsl(1080, 100%, 50%, m)\' should be null', () => {
        expect(parse('hsl(1080, 100%, 50%, m)')).toBeNull();
    });
    it('\'hsl(foo, bar)\' should be null', () => {
        expect(parse('hsl(foo, bar)')).toBeNull();
    });
    it('\'hsl(0, foo)\' should be null', () => {
        expect(parse('hsl(0, foo)')).toBeNull();
    });
});
describe('Testing valid hsl models with the Chroma 2.0 parse function', () => {
    it('\'hsl(0, 100%, 50%)\' should be red', () => {
        expect(parse('hsl(0, 100%, 50%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsl(360, 100%, 50%)\' should be red', () => {
        expect(parse('hsl(360, 100%, 50%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsl(720, 100%, 50%)\' should be red', () => {
        expect(parse('hsl(720, 100%, 50%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsl(-720, 100%, 50%)\' should be red', () => {
        expect(parse('hsl(-720, 100%, 50%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsl(120, 100%, 50%)\' should be green', () => {
        expect(parse('hsl(120, 100%, 50%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsl(480, 100%, 50%)\' should be green', () => {
        expect(parse('hsl(480, 100%, 50%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsl(840, 100%, 50%)\' should be green', () => {
        expect(parse('hsl(840, 100%, 50%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsl(-600, 100%, 50%)\' should be green', () => {
        expect(parse('hsl(-600, 100%, 50%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsl(240, 100%, 50%)\' should be blue', () => {
        expect(parse('hsl(240, 100%, 50%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsl(600, 100%, 50%)\' should be blue', () => {
        expect(parse('hsl(600, 100%, 50%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsl(960, 100%, 50%)\' should be blue', () => {
        expect(parse('hsl(960, 100%, 50%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsl(-480, 100%, 50%)\' should be blue', () => {
        expect(parse('hsl(-480, 100%, 50%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsl(0, 0%, 100%)\' should be white', () => {
        expect(parse('hsl(0, 0%, 100%)')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'hsl(0, 0%, 0%)\' should be black', () => {
        expect(parse('hsl(0, 0%, 0%)')[0]).toEqual([0, 0, 0, 1]);
    });
});

//  HSV Models
describe('Testing invalid hsv models with the Chroma 2.0 parse function', () => {
    it('\'hsv(90, -100%, 100%)\' should be null', () => {
        expect(parse('hsv(90, -100%, 100%)')).toBeNull();
    });
    it('\'hsv(240, 101%, 100%)\' should be null', () => {
        expect(parse('hsv(240, 101%, 100%)')).toBeNull();
    });
    it('\'hsv(45, 100%)\' should be null', () => {
        expect(parse('hsv(45, 100%)')).toBeNull();
    });
    it('\'hsv(1080, 100%, 100%, 1.0, 0)\' should be null', () => {
        expect(parse('hsv(1080, 100%, 100%, 1.0, 0)')).toBeNull();
    });
    it('\'hsv(1080, 100%, 100%, m)\' should be null', () => {
        expect(parse('hsv(1080, 100%, 100%, m)')).toBeNull();
    });
    it('\'hsv(foo, bar)\' should be null', () => {
        expect(parse('hsv(foo, bar)')).toBeNull();
    });
    it('\'hsv(0, foo)\' should be null', () => {
        expect(parse('hsv(0, foo)')).toBeNull();
    });
});
describe('Testing valid hsv models with the Chroma 2.0 parse function', () => {
    it('\'hsv(0, 100%, 100%)\' should be red', () => {
        expect(parse('hsv(0, 100%, 100%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsv(360, 100%, 100%)\' should be red', () => {
        expect(parse('hsv(360, 100%, 100%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsv(720, 100%, 100%)\' should be red', () => {
        expect(parse('hsv(720, 100%, 100%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsv(-720, 100%, 100%)\' should be red', () => {
        expect(parse('hsv(-720, 100%, 100%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'hsv(120, 100%, 100%)\' should be green', () => {
        expect(parse('hsv(120, 100%, 100%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsv(480, 100%, 100%)\' should be green', () => {
        expect(parse('hsv(480, 100%, 100%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsv(840, 100%, 100%)\' should be green', () => {
        expect(parse('hsv(840, 100%, 100%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsv(-600, 100%, 100%)\' should be green', () => {
        expect(parse('hsv(-600, 100%, 100%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'hsv(240, 100%, 100%)\' should be blue', () => {
        expect(parse('hsv(240, 100%, 100%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsv(600, 100%, 100%)\' should be blue', () => {
        expect(parse('hsv(600, 100%, 100%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsv(960, 100%, 100%)\' should be blue', () => {
        expect(parse('hsv(960, 100%, 100%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsv(-480, 100%, 100%)\' should be blue', () => {
        expect(parse('hsv(-480, 100%, 100%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'hsv(0, 0%, 100%)\' should be white', () => {
        expect(parse('hsv(0, 0%, 100%)')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'hsv(0, 100%, 0%)\' should be black', () => {
        expect(parse('hsv(0, 100%, 0%)')[0]).toEqual([0, 0, 0, 1]);
    });
});

//  CMYK Models
describe('Testing invalid cmyk models with the Chroma 2.0 parse function', () => {
    it('\'cmyk(-100%, 0%, 0%, 0%)\' should be null', () => {
        expect(parse('cmyk(-100%, 0%, 0%, 0%)')).toBeNull();
    });
    it('\'cmyk(101%, 0%, 0%, 0%)\' should be null', () => {
        expect(parse('cmyk(101%, 0%, 0%, 0%)')).toBeNull();
    });
    it('\'cmyk(100%, 100%)\' should be null', () => {
        expect(parse('cmyk(100%, 100%)')).toBeNull();
    });
    it('\'cmyk(100%, 100%, 100%, 100%, 100%)\' should be null', () => {
        expect(parse('cmyk(100%, 100%, 100%, 100%, 100%)')).toBeNull();
    });
    it('\'cmyk(0%, 100%, 100%, m%)\' should be null', () => {
        expect(parse('cmyk(0%, 100%, 100%, m%)')).toBeNull();
    });
    it('\'cmyk(foo, bar)\' should be null', () => {
        expect(parse('cmyk(foo, bar)')).toBeNull();
    });
    it('\'cmyk(0%, foo)\' should be null', () => {
        expect(parse('cmyk(0%, foo)')).toBeNull();
    });
});
describe('Testing valid cmyk models with the Chroma 2.0 parse function', () => {
    it('\'cmyk(0%, 100%, 100%, 0%)\' should be red', () => {
        expect(parse('cmyk(0%, 100%, 100%, 0%)')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'cmyk(100%, 0%, 100%, 0%)\' should be green', () => {
        expect(parse('cmyk(100%, 0%, 100%, 0%)')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'cmyk(100%, 100%, 0%, 0%)\' should be blue', () => {
        expect(parse('cmyk(100%, 100%, 0%, 0%)')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'cmyk(100%, 100%, 100%, 0%)\' should be black', () => {
        expect(parse('cmyk(100%, 100%, 100%, 0%)')[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'cmyk(0%, 0%, 0%, 0%)\' should be white', () => {
        expect(parse('cmyk(0%, 0%, 0%, 0%)')[0]).toEqual([1, 1, 1, 1]);
    });
});

//  RGB Strings
describe('Testing invalid rgb strings with the Chroma 2.0 parse function', () => {
    it('\'-1, 0, 0\' should be null', () => {
        expect(parse('-1, 0, 0')).toBeNull();
    });
    it('\'256, 0, 0\' should be null', () => {
        expect(parse('256, 0, 0')).toBeNull();
    });
    it('\'0, 0\' should be null', () => {
        expect(parse('0, 0')).toBeNull();
    });
    it('\'0, 0, 0, 0, 0\' should be null', () => {
        expect(parse('0, 0, 0, 0, 0')).toBeNull();
    });
    it('\'m, n, p\' should be null', () => {
        expect(parse('m, n, p')).toBeNull();
    });
    it('\'0, 0, 0, m\' should be null', () => {
        expect(parse('0, 0, 0, m')).toBeNull();
    });
});
describe('Testing valid rgb strings with the Chroma 2.0 parse function', () => {
    it('\'255, 0, 0\' should be red', () => {
        expect(parse('255, 0, 0')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'0, 255, 0\' should be green', () => {
        expect(parse('0, 255, 0')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'0, 0, 255\' should be blue', () => {
        expect(parse('0, 0, 255')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'0, 0, 0\' should be black', () => {
        expect(parse('0, 0, 0')[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'255, 255, 255\' should be white', () => {
        expect(parse('255, 255, 255')[0]).toEqual([1, 1, 1, 1]);
    });
});

//  HEX
describe('Testing invalid hex with the Chroma 2.0 parse function', () => {
    it('\'#00000h\' should be null', () => {
        expect(parse('#00000h')).toBeNull();
    });
    it('\'#h00000\' should be null', () => {
        expect(parse('#h00000')).toBeNull();
    });
    it('\'0x12345\' should be null', () => {
        expect(parse('0x12345')).toBeNull();
    });
    it('\'0x123456789\' should be null', () => {
        expect(parse('0x123456789')).toBeNull();
    });
    it('\'12345\' should be null', () => {
        expect(parse('12345')).toBeNull();
    });
    it('\'123456789\' should be null', () => {
        expect(parse('123456789')).toBeNull();
    });
});
describe('Testing valid hex with the Chroma 2.0 parse function', () => {
    it('\'#ff0000\' should be red', () => {
        expect(parse('#ff0000')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'0x00FF00\' should be green', () => {
        expect(parse('0x00ff00')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'0000fF\' should be blue', () => {
        expect(parse('0000ff')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'#000000\' should be black', () => {
        expect(parse('#000000')[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'0xf\' should be white', () => {
        expect(parse('0xf')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'0xFF\' should be white', () => {
        expect(parse('0xff')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'0xfff\' should be white', () => {
        expect(parse('0xfff')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'0xFFFFFF\' should be white', () => {
        expect(parse('0xffffff')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'0x000000\' should be black', () => {
        expect(parse(0x000000)[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'0xff0000\' should be red', () => {
        expect(parse(0xff0000)[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'0x00ff00\' should be green', () => {
        expect(parse(0x00ff00)[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'0x0000ff\' should be blue', () => {
        expect(parse(0x0000ff)[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'0xffffff\' should be white', () => {
        expect(parse(0xffffff)[0]).toEqual([1, 1, 1, 1]);
    });
});


//  X11
describe('Testing invalid x11 with the Chroma 2.0 parse function', () => {
    it('\'foobar\' should be null', () => {
        expect(parse('foobar')).toBeNull();
    });
    it('\'not a color\' should be null', () => {
        expect(parse('not a color')).toBeNull();
    });
    it('\'rad\' should be null', () => {
        expect(parse('rad')).toBeNull();
    });
    it('\'bleu\' should be null', () => {
        expect(parse('bleu')).toBeNull();
    });
    it('\'рurple\' should be null', () => {
        expect(parse('рurple')).toBeNull();
    });
    it('\'örange\' should be null', () => {
        expect(parse('örange')).toBeNull();
    });
});
describe('Testing valid x11 with the Chroma 2.0 parse function', () => {
    it('\'red\' should be red', () => {
        expect(parse('red')[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'lime\' should be green', () => {
        expect(parse('lime')[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'blue\' should be blue', () => {
        expect(parse('blue')[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'BLACK\' should be black', () => {
        expect(parse('BLACK')[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'White\' should be white', () => {
        expect(parse('White')[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'light pink\' should be light pink', () => {
        expect(parse('light pink')[0]).toEqual([ 1, 0.7137254901960784, 0.7568627450980392, 1 ]);
    });
});

//  Arrays
describe('Testing invalid arrays with the Chroma 2.0 parse function', () => {
    it('\'[]\' should be null', () => {
        expect(parse([])).toBeNull();
    });
    it('\'[\'hello\', \'world\', \'foo\', \'bar\']\' should be null', () => {
        expect(parse(['hello', 'world', 'foo', 'bar'])).toBeNull();
    });
    it('\'[255, 0, 0]\' should be null', () => {
        expect(parse([255, 0, 0])).toBeNull();
    });
    it('\'[1.1, 0, 0]\' should be null', () => {
        expect(parse([1.1, 0, 0])).toBeNull();
    });
    it('\'[-0.1, 0, 0]\' should be null', () => {
        expect(parse([-0.1, 0, 0])).toBeNull();
    });
    it('\'[1, 1, 1, 1, 1]\' should be null', () => {
        expect(parse([1, 1, 1, 1, 1])).toBeNull();
    });
});
describe('Testing valid arrays with the Chroma 2.0 parse function', () => {
    it('\'[1.0, 0, 0]\' should be red', () => {
        expect(parse([1.0, 0, 0])[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'[0, 1.0, 0]\' should be green', () => {
        expect(parse([0, 1.0, 0])[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'[0, 0, 1.0]\' should be blue', () => {
        expect(parse([0, 0, 1.0])[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'[0, 0, 0]\' should be black', () => {
        expect(parse([0, 0, 0])[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'[1.0, 1.0, 1.0]\' should be white', () => {
        expect(parse([1, 1, 1])[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'[1, 0.7137254901960784, 0.7568627450980392]\' should be lightpink', () => {
        expect(parse([1, 0.7137254901960784, 0.7568627450980392])[0]).toEqual(x11['lightpink'].map(value => value / 255).concat(1));
    });
});

// Arguments
describe('Testing invalid arguments with the Chroma 2.0 parse function', () => {
    it('\'\' should be null', () => {
        expect(parse()).toBeNull();
    });
    it('\'[\'hello\', \'world\', \'foo\', \'bar\']\' should be null', () => {
        expect(parse('hello', 'world', 'foo', 'bar')).toBeNull();
    });
    it('\'255, 0, 0\' should be null', () => {
        expect(parse(255, 0, 0)).toBeNull();
    });
    it('\'1.1, 0, 0\' should be null', () => {
        expect(parse(1.1, 0, 0)).toBeNull();
    });
    it('\'-0.1, 0, 0\' should be null', () => {
        expect(parse(-0.1, 0, 0)).toBeNull();
    });
    it('\'1, 1, 1, 1, 1\' should be null', () => {
        expect(parse(1, 1, 1, 1, 1)).toBeNull();
    });
});
describe('Testing valid arguments with the Chroma 2.0 parse function', () => {
    it('\'1.0, 0, 0\' should be red', () => {
        expect(parse(1.0, 0, 0)[0]).toEqual([1, 0, 0, 1]);
    });
    it('\'0, 1.0, 0\' should be green', () => {
        expect(parse(0, 1.0, 0)[0]).toEqual([0, 1, 0, 1]);
    });
    it('\'0, 0, 1.0\' should be blue', () => {
        expect(parse(0, 0, 1.0)[0]).toEqual([0, 0, 1, 1]);
    });
    it('\'0, 0, 0\' should be black', () => {
        expect(parse(0, 0, 0)[0]).toEqual([0, 0, 0, 1]);
    });
    it('\'1.0, 1.0, 1.0\' should be white', () => {
        expect(parse(1, 1, 1)[0]).toEqual([1, 1, 1, 1]);
    });
    it('\'1, 0.7137254901960784, 0.7568627450980392\' should be light pink', () => {
        expect(parse(1, 0.7137254901960784, 0.7568627450980392)[0]).toEqual(x11['lightpink'].map(value => value / 255).concat(1));
    });
});