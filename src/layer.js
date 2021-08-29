const math = require('mathjs')
const {glslDir} = require('gpu-ez')

class Layer {

    inputs;
    weights;
    biases;

    constructor(weights, inputs, biases) {
        this.inputs = inputs;
        this.weights = weights;
        this.biases = biases;
    }

    getOutputs() {
        //TODO: GPU ACCELERATION!!!!!!!
        return math.add(math.multiply(this.inputs, math.transpose(this.weights)), this.biases);
    }
}

module.exports = {
    Layer: Layer
}