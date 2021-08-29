const {Layer} = require('./layer')

const inputs = [1, 2, 3, 2.5]
const weights = [
    [  0.2,   0.8, -0.5,  1.0],
    [  0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87],
]
const biases = [2, 3, 0.5]

test('Check Layer Output', () => {
    expect(new Layer(weights, inputs, biases).getOutputs()).toStrictEqual([ 4.8, 1.21, 2.385 ])
})