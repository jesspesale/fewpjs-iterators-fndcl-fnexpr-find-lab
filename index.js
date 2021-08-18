
function superbowlWin(array) {
    const winner = array.find( win => win.result === "W")
    if  (winner) {
        return winner.year
    }
    else {
        return undefined
    }
}



