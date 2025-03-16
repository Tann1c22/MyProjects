const display_1 = document.getElementById("display_1")
const display_2 = document.getElementById("display_2")
const isEqualTo = document.querySelector(".btn")
const output = document.querySelector(".output")
const selectOperation = document.getElementById("selectOperation")


isEqualTo.addEventListener("click", () => {
    let value1 = +display_1.value
    let value2 = +display_2.value
    let valueOp = selectOperation.value
    const result = calculate(value1, value2, valueOp)

    output.innerHTML = result
})