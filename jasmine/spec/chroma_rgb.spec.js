describe('Validity of all rgb models', () => {
    let empty = new ChromaColor('');
    it('\'\' should be an instance of ChromaColor', () => {
        expect(empty).toBeInstanceOf(ChromaColor);
    });
    it('\'\' should an empty instance of ChromaColor', () => {
        expect(empty.channels).toBeUndefined();
        expect(empty.model).toBeUndefined();
    });

    let black = new ChromaColor('rgb(0, 0, 0)');
    it('black should be an instance of ChromaColor', () => {
        expect(black).toBeInstanceOf(ChromaColor);
    });
    it('black.channels should be an instance of ChromaChannels', () => {
        expect(black.channels).toBeInstanceOf(ChromaChannels);
    });
    it('black.model should be `rgb(0,0,0)`', () => {
        expect(black.model).toBe('rgb(0,0,0)');
    });
    it('black.red should be `0`', () => {
        expect(black.red).toBe(0);
    });
    it('black.green should be `0`', () => {
        expect(black.green).toBe(0);
    });
    it('black.blue should be `0`', () => {
        expect(black.blue).toBe(0);
    });
    it('black.alpha should be `1.0`', () => {
        expect(black.alpha).toBe(1.0);
    });

    let white = new ChromaColor('rgb(255, 255, 255)');
    it('white should be an instance of ChromaColor', () => {
        expect(white).toBeInstanceOf(ChromaColor);
    });
    it('white.channels should be an instance of ChromaChannels', () => {
        expect(white.channels).toBeInstanceOf(ChromaChannels);
    });
    it('white.model should be `rgb(255,255,255)`', () => {
        expect(white.model).toBe('rgb(255,255,255)');
    });
    it('white.red should be `1.0`', () => {
        expect(white.red).toBe(1.0);
    });
    it('white.green should be `1.0`', () => {
        expect(white.green).toBe(1.0);
    });
    it('white.blue should be `1.0`', () => {
        expect(white.blue).toBe(1.0);
    });
    it('white.alpha should be `1.0`', () => {
        expect(white.alpha).toBe(1.0);
    });

    let over = new ChromaColor('rgb(256, 0, 0)');
    it('over should be an instance of ChromaColor', () => {
        expect(over).toBeInstanceOf(ChromaColor);
    });
    it('over.channels should be undefined', () => {
        expect(over.channels).toBeUndefined();
    });
    it('over.model should be undefined', () => {
        expect(over.model).toBeUndefined();
    });

    let under = new ChromaColor('rgb(-128, 0, 0)');
    it('under should be an instance of ChromaColor', () => {
        expect(under).toBeInstanceOf(ChromaColor);
    });
    it('under.channels should be undefined', () => {
        expect(under.channels).toBeUndefined();
    });
    it('under.model should be undefined', () => {
        expect(under.model).toBeUndefined();
    });
});