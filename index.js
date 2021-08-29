const {Layer} = require('./src/layer')

const inputs = [
    [1, 2, 3, 2.5],
    [2, 5, 1, 2],
    [-1.5, 2.7, 3.3, -0.8]
]
const weights = [
    [  0.2,   0.8, -0.5,  1.0],
    [  0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87],
]
const biases = [2, 3, 0.5]

const layer = new Layer(weights, inputs, biases);

console.log(layer.getOutputs()) 