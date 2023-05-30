enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showString("Year 6")
    basic.showIcon(IconNames.Square)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.setGroup(1)
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
basic.forever(function () {
	
})
