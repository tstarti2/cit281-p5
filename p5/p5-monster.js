// Import monster class
const MonsterGame = require('./p5-monster-game.js')

// Create monster class
class Monster {
  constructor ({ monsterName = 'Unknown', minimumLife = 0, currentLife = 100 }) {
    this.monsterName = monsterName
    this.minimumLife = minimumLife
    this.currentLife = currentLife
    this.isAlive = currentLife >= minimumLife ? true : false
    this.convertAlive = this.isAlive ? 'Alive' : 'Dead'
  }

  updateLife (lifeChangeAmount) {
    this.currentLife += lifeChangeAmount
    this.currentLife < 0 ? (this.currentLife = 0) : this.currentLife
    this.currentLife > 0 ? (this.isAlive = true) : (this.isAlive = false)
    this.convertAlive = this.isAlive ? 'Alive' : 'Dead'
  }

  getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  randomLifeDrain (minimumLifeDrain, maximumLifeDrain) {
    const lifeChangeAmount = this.getRandomInteger(
      minimumLifeDrain,
      maximumLifeDrain + 1
    )
    this.updateLife(-lifeChangeAmount)
    console.log(`${this.monsterName} random power drain of ${lifeChangeAmount}`)
  }
}

module.exports = Monster
