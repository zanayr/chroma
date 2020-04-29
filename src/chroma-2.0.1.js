const parse = (...args) => {
    if (args.length == 1) {
        let model = args[0];
        if (model instanceof ChromaColor || model instanceof ChromaChannels) {
            return [model.rgb, model.model];
        } else if (typeof model == 'string' && model.length) {
            model = model.replace(/\s|#|0x/gi, '');
            if (isFinite(parseInt(model, 16)) && /^[\da-f]{1,8}/ig.test(model)) {
                return [fromHexa(model), model];
            } else if (/[a-z]+/ig.test(model)) {
                return [fromX11(model), model];
            } else if (/[-\d,\.]+/ig.test(model)) {
                let values = fromRgba(model.match(/(-?\d+\.?\d*)/g));
                return [values, toRgbString(values, true)];
            } else {
                if (/^rgba?\(/ig.test(model)) {
                    let values = fromRgba(model.match(/(-?\d+\.?\d*)/g));
                    return [values, toRgbString(values, true)];
                } else if (/^hsla?\(/ig.test(model)) {
                    let values = fromHsla(model.match(/(-?\d+\.?\d*)/g));
                    return [values, toHslString(values, true)];
                } else if (/^hsva?\(/ig.test(model)) {
                    let values = fromHsva(model.match(/(-?\d+\.?\d*)/g));
                    return [values, toHsvString(values, true)];
                } else if (/^cmyk\(/ig.test(model)) {
                    let values = fromCmyk(model.match(/(-?\d+\.?\d*)/g));
                    return [values, toCmykString(values)];
                }
            }
        } else if (typeof model == 'number' && isFinite(model)) {
            return parse(model.toString(16).padStart(6, '0'));
        } else if (Array.isArray(model) && isRgba(model)) {
            return model.map(value => parseFloat(value, 10));
        }
    } else if (args.length <= 4) {
        return parse(Array.from(args));
    }
    return null;
};