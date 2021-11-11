let Answer = 0
input.onGesture(Gesture.Shake, function () {
    Answer = randint(0, 7)
    if (Answer == 0) {
        basic.showString("No way!")
    } else if (Answer == 1) {
        basic.showString("Probably")
    } else if (Answer == 2) {
        basic.showString("Unlikely")
    } else if (Answer == 3) {
        basic.showString("Definitely!")
    } else if (Answer == 4) {
        basic.showString("Not sure")
    } else if (Answer == 5) {
        basic.showString("Maybe")
    } else if (Answer == 6) {
        basic.showString("I don't think so")
    } else if (Answer == 7) {
        basic.showString("No doubt about it!")
    } else {
    	
    }
})
