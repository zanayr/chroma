// Invalid Models
describe('Testing invalid models with the Chroma 2.0 parse function', () => {
    it('\'\' should return null', () => {
        expect(parse('')).toBeNull();
    });
    it('\'foobar\' should return null', () => {
        expect(parse('foobar')).toBeNull();
    });
    it('\'null\' should return null', () => {
        expect(parse(null)).toBeNull();
    });
    it('\'undefined\' should return null', () => {
        expect(parse(undefined)).toBeNull();
    });
    it('\'[]\' should return null', () => {
        expect(parse([])).toBeNull();
    });
    it('\'255, 255\' should return null', () => {
        expect(parse(255, 255)).toBeNull();
    });
    it('\'255, 255, 255, 255, 255\' should return null', () => {
        expect(parse(255, 255, 255, 255, 255)).toBeNull();
    });
    it('\'#fffff\' should return null', () => {
        expect(parse('#fffff')).toBeNull();
    });
    it('\'#fffffff\' should return null', () => {
        expect(parse('#fffffff')).toBeNull();
    });
});


//  RGB Models
describe('Testing invalid rgb models with the Chroma 2.0 parse function', () => {
    it('\'rgb(-255, 0, 0)\' should be null', () => {
        expect(parse('rgb(-255, 0, 0)')).toBeNull();
    });
    it('\'rgb(256, 0, 0)\' should be null', () => {
        expect(parse('rgb(256, 0, 0)')).toBeNull();
    });
    it('\'rgb(0, 0)\' should be null', () => {
        expect(parse('rgb(0, 0)')).toBeNull();
    });
    it('\'rgb(0, 0, 0, 0, 0)\' should be null', () => {
        expect(parse('rgb(0, 0, 0, 0, 0)')).toBeNull();
    });
    it('\'rgb(foo, bar)\' should be null', () => {
        expect(parse('rgb(foo, bar)')).toBeNull();
    });
    it('\'rgb(0, foo)\' should be null', () => {
        expect(parse('rgb(0, foo)')).toBeNull();
    });
});
describe('Testing valid rgb models with the Chroma 2.0 parse function', () => {
    it('\'rgb(0, 0, 0)\' should be defined', () => {
        expect(parse('rgb(0, 0, 0)')).toBeDefined();
    });
    it('\'rgb(255, 255, 255)\' should be defined', () => {
        expect(parse('rgb(255, 255, 255)')).toBeDefined();
    });
    it('\'rgb(0, 128, 255)\' should be defined', () => {
        expect(parse('rgb(0, 128, 255)')).toBeDefined();
    });
});


//  HSL Models
describe('Testing invalid hsl models with the Chroma 2.0 parse function', () => {
    it('\'hsl(90, -100%, 100%)\' should be null', () => {
        expect(parse('hsl(90, -100%, 100%)')).toBeNull();
    });
    it('\'hsl(240, 101%, 100%)\' should be null', () => {
        expect(parse('hsl(240, 101%, 100%)')).toBeNull();
    });
    it('\'hsl(45, 100%)\' should be null', () => {
        expect(parse('hsl(45, 100%)')).toBeNull();
    });
    it('\'hsl(1080, 100%, 100%, 1.0, 0)\' should be null', () => {
        expect(parse('hsl(1080, 100%, 100%, 1.0, 0)')).toBeNull();
    });
    it('\'hsl(foo, bar)\' should be null', () => {
        expect(parse('hsl(foo, bar)')).toBeNull();
    });
    it('\'hsl(0, foo)\' should be null', () => {
        expect(parse('hsl(0, foo)')).toBeNull();
    });
});
describe('Testing valid hsl models with the Chroma 2.0 parse function', () => {
    it('\'hsl(-270, 33%, 50%)\' should be defined', () => {
        expect(parse('hsl(-270, 33%, 50%)')).toBeDefined();
    });
    it('\'hsl(540, 50%, 100%)\' should be defined', () => {
        expect(parse('hsl(540, 50%, 100%)')).toBeDefined();
    });
    it('\'hsl(180, 0%, 100%)\' should be defined', () => {
        expect(parse('hsl(180, 0%, 100%)')).toBeDefined();
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
    it('\'hsl(45, 100%)\' should be null', () => {
        expect(parse('hsv(45, 100%)')).toBeNull();
    });
    it('\'hsv(1080, 100%, 100%, 1.0, 0)\' should be null', () => {
        expect(parse('hsv(1080, 100%, 100%, 1.0, 0)')).toBeNull();
    });
    it('\'hsv(foo, bar)\' should be null', () => {
        expect(parse('hsv(foo, bar)')).toBeNull();
    });
    it('\'hsv(0, foo)\' should be null', () => {
        expect(parse('hsv(0, foo)')).toBeNull();
    });
});
describe('Testing valid hsv models with the Chroma 2.0 parse function', () => {
    it('\'hsv(-270, 33%, 50%)\' should be defined', () => {
        expect(parse('hsv(-270, 33%, 50%)')).toBeDefined();
    });
    it('\'hsv(540, 50%, 100%)\' should be defined', () => {
        expect(parse('hsv(540, 50%, 100%)')).toBeDefined();
    });
    it('\'hsv(180, 0%, 100%)\' should be defined', () => {
        expect(parse('hsv(180, 0%, 100%)')).toBeDefined();
    });
});