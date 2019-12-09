const { aspectRatio, getPercentages } = require('./helper.js')

const list = 100

const mousePos = {
    x: 50,
    y: 50
}

const rect = {
    width: 100,
    height: 400
}

const ratio = aspectRatio(rect)
const perc = getPercentages(ratio)

console.log('perc', perc)

let root = Math.sqrt(list)

let xSize = root * perc.x
let ySize = root * perc.y

let elements = {}




if (xSize > (root - xSize) ) {
    elements.x = root + (root - xSize)
    elements.y = root * ySize
}



console.log(xSize)
