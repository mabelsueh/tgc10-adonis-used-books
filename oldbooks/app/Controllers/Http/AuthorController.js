'use strict'

const Author =use('App/Models/Author')

class AuthorController {
  async index({view}) {
    let allAuthors = await Author.all()
    return view.render('authors/index', {
      'authors': allAuthors.toJSON()
    })
  }
}

module.exports = AuthorController
