input.onButtonPressed(Button.A, function () {
    for (let Loop1 = 0; Loop1 <= 4; Loop1++) {
        for (let Loop2 = 0; Loop2 <= 4; Loop2++) {
            if (led.point(0, 0)) {
                radio.sendValue("R_X", Loop1)
                radio.sendValue("R_Y", Loop2)
                radio.sendValue("R_Led", 1)
            } else {
                radio.sendValue("R_X", Loop1)
                radio.sendValue("R_Y", Loop2)
                radio.sendValue("R_Led", 0)
            }
        }
    }
})
radio.setGroup(42)
basic.showIcon(IconNames.Heart)
let R_Led = 0
basic.forever(function () {
	
})
