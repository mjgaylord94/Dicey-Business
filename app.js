let newButton = document.getElementById(`new-button`)
let rollButton = document.getElementById(`roll-button`)
let totalButton = document.getElementById(`total-button`)
let diceContainer = document.getElementById(`dice-container`)

class Die {
    constructor() {
        this.div = document.createElement(`div`)
        this.div.className = `die`
        diceContainer.append(this.div)
        this.value = this.roll()

        this.div.addEventListener(`click`, () => this.roll())
        this.div.addEventListener(`dblclick`, () => this.div.remove())
        rollButton.addEventListener(`click`, () => this.roll())
    }

    roll() {
        let random = Math.floor(Math.random() * 6) + 1
        this.value = random

        this.div.innerText = this.value
    }
}

newButton.addEventListener(`click`, function() {
    new Die()
})

totalButton.addEventListener(`click`, function() {
    let dice = document.getElementsByClassName(`die`)
    let total = 0

    for (i = 0; i < dice.length; i++) {
        total += parseInt(dice[i].innerText)
    }

    alert(`${total}`)
})