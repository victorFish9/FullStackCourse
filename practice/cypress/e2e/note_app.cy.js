describe('Note app', function () {
  beforeEach(function () {
    //cy.login({ username: 'vcherkasov', password: '12345' })


    // cy.request('POST', 'http://localhost:3001/api/login', {
    //   username: 'vcherkasov', password: '12345'
    // }).then(response => {
    //   localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
    //   cy.visit('http://localhost:5173')
    // })


    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      name: 'Alisa Liubarskaia',
      username: 'aliubarskaia',
      password: '12345'
    }
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    cy.visit('http://localhost:5173')


    // cy.contains('Log in').click()
    // cy.get('#username').type('vcherkasov')
    // cy.get('#password').type('12345')
    // cy.get('#login-button').click()
  })

  it('login fails with wrong password', function () {
    //cy.contains('Logout').click()
    cy.contains('Log in').click()
    cy.get('#username').type('vcherkasov')
    cy.get('#password').type('1234')
    cy.get('#login-button').click()

    cy.get('.error').should('contain', 'wrong credentials')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.87)')
    cy.get('html').should('not.contain', 'Victor Cherkasov logged in')
    //cy.contains('Victor Cherkasov logged in').should('not.exist')
  })

  it('front page can be opened', function () {
    cy.contains('Notes')


    // cy.contains('new note').click()
    // cy.get('#note-input').type('a note created by cypress')
    // cy.contains('Save').click()
    // cy.contains('a note created by cypress')
    // cy.contains('Notes')
    // cy.contains('make not important')
  })

  describe('when logged in', function () {
    describe('and seeral notes exist', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })
    })
    beforeEach(function () {
      cy.login({ username: 'aliubarskaia', password: '12345' })
      // cy.contains('Log in').click()
      // cy.get('#username').type('aliubarskaia')
      // cy.get('#password').type('12345')
      // cy.get('#login-button').click()
    })

    it('a new note can be created', function () {
      cy.contains('new note').click()
      cy.get('#note-input').type('a note created by cypress')
      cy.contains('Save').click()
      cy.contains('a note created by cypress')
    })
    /*
        it('a new note can be deleted', function () {
          cy.contains('Delete').click()
        })*/
  })
  describe('and a note exists', function () {
    beforeEach(function () {
      cy.createNote({
        content: 'another note cypress',
        important: true
      })

    })

    it('it can be made important', function () {
      cy.contains('another note cypress')
        .contains('make not important')
        .click()

      cy.contains('another note cypress')
        .contains('make important')
    })
  })
})

