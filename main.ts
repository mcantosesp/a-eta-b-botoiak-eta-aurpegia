input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Pitchfork)
})
