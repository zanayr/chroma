// import chroma from '../../src/chroma-2.0.0';

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