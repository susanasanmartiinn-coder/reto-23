input.onButtonPressed(Button.A, function () {
    basic.showNumber(Movimientos)
})
input.onGesture(Gesture.Shake, function () {
    Movimientos += 1
})
input.onButtonPressed(Button.B, function () {
    Movimientos = 0
    basic.showNumber(Movimientos)
})
let Movimientos = 0
Movimientos = 0
basic.showNumber(Movimientos)
