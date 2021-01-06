'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorsSchema extends Schema {
  up () {
    this.create('authors', (table) => {
      table.increments()
      table.string('firstname', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.date('dob').notNullable()

      table.timestamps()
    })
  }

  // INSERT INTO authors(firstname, lastname, dob) VALUES("CS", "Lewis", "1898-11-29");

  down () {
    this.drop('authors')
  }
}

module.exports = AuthorsSchema
