// let empty_string_color = new ChromaColor('');

// describe('Test the empty string model ``', () => {
//     it('`empty_string_color` should be an instance of `ChromaColor`', () => {
//         expect(empty_string_color).toBeInstanceOf(ChromaColor);
//     });
//     it('`empty_string_color.channels` should be undefined', () => {
//         expect(empty_string_color.channels).toBeUndefined();
//     });
//     it('`empty_string_color.model` should be undefined', () => {
//         expect(empty_string_color.model).toBeUndefined();
//     });
// });

let rgb_model_test_1 = new ChromaColor('rgb(0, 0, 0)');
// let rgb_model_test_2 = new ChromaColor('rgb(255, 255, 255)');
// let rgb_model_test_3 = new ChromaColor('rgb(0, 128, 255)');
// let rgb_model_test_4 = new ChromaColor('rgb(0, 0, 256)');
// let rgb_model_test_5 = new ChromaColor('rgb(-1, 0, 0)');

describe('Test the string model `rgb(0, 0, 0)`', () => {
    it('`color2` should be an instance of `ChromaColor`', () => {
        expect(rgb_model_test_1).toBeInstanceOf(ChromaColor);
    });
    it('`color.model` should be defined', () => {
        expect(rgb_model_test_1.model).toBeDefined();
    });
    // Channels
    it('`color.red` should be defined', () => {
        expect(rgb_model_test_1.red).toBe(0.0);
    });
    it('`color.green` should be defined', () => {
        expect(rgb_model_test_1.blue).toBe(0.0);
    });
    it('`color.blue` should be defined', () => {
        expect(rgb_model_test_1.green).toBe(0.0);
    });
    it('`color.alpha` should be defined', () => {
        expect(rgb_model_test_1.alpha).toBe(1.0);
    });
    // Luminance
    it('`color.luminance` should be defined', () => {
        expect(rgb_model_test_1.alpha).toBe(0.5);
    });
});