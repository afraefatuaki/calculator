let count = 0
let result = document.getElementById("results")
function plusOne() {

    count += 1
    result.innerHTML = count
}
function minusOne() {

    count -= 1
    result.innerHTML = count
}

function plusTen() {
    count += 10
    result.innerHTML = count
}
function minusTen() {
    count -= 10
    result.innerHTML = count
}

function plusHundred() {
    count += 100
    result.innerHTML = count
}
function minusHundred() {
    count -= 100
    result.innerHTML = count
}
function zero() {
    count = 0
    result.innerHTML = count
}
function multiplyTwo() {
    count *= 2
    result.innerHTML = count
}


