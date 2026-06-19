let countEl = document.getElementById("count-el") //pass in arguments
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
let count = 0
function increment() {
    count = count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//function reset() {
//    count = 0
//    countEl.textContent = count
//    console.log(count)
//}


//let lapsCompleted = 0
//function incrementLap() {
//    lapsCompleted = lapsCompleted + 1
//}

//   incrementLap()
//  incrementLap()
//incrementLap()
//console.log(lapsCompleted)


//document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
//let count = firstBatch + secondBatch
//console.log(count)

//let myAge = 19
//let humanDogRatio = 7
//let myDogAge = myAge*humanDogRatio
//console.log(myDogAge)

//let bonusPoints = 50
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)
//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)

