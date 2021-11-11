let Answer = 0
input.onGesture(Gesture.Shake, function () {
    Answer = randint(0, 7)
    if (Answer == 0) {
        soundExpression.sad.playUntilDone()
        basic.showString("No way!")
    } else if (Answer == 1) {
        soundExpression.mysterious.playUntilDone()
        basic.showString("Probably")
    } else if (Answer == 2) {
        soundExpression.slide.playUntilDone()
        basic.showString("Unlikely")
    } else if (Answer == 3) {
        soundExpression.giggle.playUntilDone()
        basic.showString("Definitely!")
    } else if (Answer == 4) {
        soundExpression.giggle.playUntilDone()
        basic.showString("Not sure")
    } else if (Answer == 5) {
        soundExpression.yawn.playUntilDone()
        basic.showString("Maybe")
    } else if (Answer == 6) {
        soundExpression.twinkle.playUntilDone()
        basic.showString("I don't think so")
    } else if (Answer == 7) {
        soundExpression.happy.playUntilDone()
        basic.showString("No doubt about it!")
    } else {
    	
    }
})
