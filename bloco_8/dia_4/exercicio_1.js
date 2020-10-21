const assert = require('assert')

const rectangleArea = (width, height) => width * height

const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

// Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

for(rectangle of rectangles) { // passa por todos índices do arr rectangles
    assert.equal(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // testa se a função rectangleArea passando os valores dos índices do arr retangle1, retangle2... 
}