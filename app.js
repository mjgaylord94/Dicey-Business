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
        rollButton.addEventListener(`click`, () => this.roll())
        // rolling all could also be achieved by pushing each class when constructed into a global array and looping through on click to run roll()
        this.div.addEventListener(`dblclick`, () => this.div.remove())
        // if you made a global array, you would need to remove the die from the array as well
    }

    roll() {
        let random = Math.floor(Math.random() * 6) + 1
        this.value = random
        this.getChar()
        this.div.innerText = this.char
    }

    getChar() {
        if (this.value === 1) {
            this.char = "⚀"
        } else if (this.value === 2) {
            this.char = "⚁"
        } else if (this.value === 3) {
            this.char = "⚂"
        } else if (this.value === 4) {
            this.char = "⚃"
        } else if (this.value === 5) {
            this.char = "⚄"
        } else if (this.value === 6) {
            this.char = "⚅"
        }
    }
}

newButton.addEventListener(`click`, function() {
    new Die()
})

totalButton.addEventListener(`click`, function() {
    let dice = document.getElementsByClassName(`die`)
    let total = 0

    for (i = 0; i < dice.length; i++) {
        if (dice[i].innerText === "⚀") {
            total += 1
        } else if (dice[i].innerText === "⚁") {
            total += 2
        } else if (dice[i].innerText === "⚂") {
            total += 3
        } else if (dice[i].innerText === "⚃") {
            total += 4
        } else if (dice[i].innerText === "⚄") {
            total += 5
        } else if (dice[i].innerText === "⚅") {
            total += 6
        }
    }

    alert(`${total}`)
    // if using numbers instead of die faces, you would need to convert innertext to intergers using parseInt
    // if wanting to use this.value to achieve the sum, you would need to have pushed dice into a global array upon creation and loop through to add the value to the total
})