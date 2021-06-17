let newButton = document.getElementById(`new-button`)
let rollButton = document.getElementById(`roll-button`)
let totalButton = document.getElementById(`total-button`)
let diceContainer = document.getElementById(`dice-container`)

class Die {
    constructor(value) {
        this.value = value
        this.div = document.createElement(`div`)
        this.div.className = `die`
        this.text = document.createTextNode(`${value}`)

        this.div.append(this.text)
        diceContainer.append(this.div)
    }

    roll() {
        this.value = Math.floor(Math.random() * 6)
        console.log(value)
    }
}

newButton.addEventListener(`click`, function() {
    new Die(Math.floor(Math.random() * 6))
})