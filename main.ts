input.onSound(DetectedSound.Loud, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.setSoundThreshold(SoundThreshold.Loud, 146)
basic.forever(function () {
    if (input.lightLevel() >= 100) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
