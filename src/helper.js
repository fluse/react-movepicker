
const greatestCommonDivisor = (a, b) => {
  return b ? greatestCommonDivisor(b, a % b) : a
}

exports.aspectRatio = ({ width, height }) => {
    const divisor = greatestCommonDivisor(width, height)

    let x = width / divisor
    let y = height / divisor

    return { x, y }
}

exports.round = (number) => {
    return (number + (number > 0 ? 0.5 : -0.5 )) << 0
}

exports.getPercentages = (ratio) => {

    let x, y;

    // equality
    if (ratio.x === ratio.y) {
        return {
            x: 0.5,
            y: 0.5
        }
    }

    if (ratio.x > ratio.y) {
        x = ratio.y / ratio.x
        y = 1 - ratio.y / ratio.x
    } else {
        y = ratio.x / ratio.y
        x = 1 - ratio.x / ratio.y
    }

    return { x, y }
}
