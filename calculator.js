const operation = {
    sum: "+",
    subtract: "-",
    divide: "/",
    multiply: "*",
}

function calculate(a, b, op) {
    result = ""
    switch(op) {
        case operation.sum:
            result = sum(a, b)
            break
        case operation.subtract:
            result = subtract(a, b)
            break
        case operation.multiply:
            result = multiply(a, b)
            break
        case operation.divide:
            result = divide(a, b)
            break
        default:
            break
    }
    return result
}