const connection = require('./connection')

function getPets(db = connection) {
  return db('pets').select()
}

function getRandomPet(humanId, db = connection) {
  return db('pets')
    .whereNot('owner_id', humanId)
    .orderBy(db.raw('RANDOM()'))
    .limit(1)
    .first()
}

module.exports = {
  getPets
}
