it("Log in to canary cloud account and Add five device options", function(){     
  cy.visit('https://canary.api.meld.cx/login'),
  cy.get(':nth-child(2) > span > input').type(Cypress.env('email')),
cy.get(':nth-child(3) > span > input').type(Cypress.env('password')),
cy.get('.glow > span').click(),
cy.get('.nav-bar-burger').click(),
cy.get('[href="/devices"]').click(),
cy.get(':nth-child(1) > .tr-link > .td-name').contains(Cypress.env('chromedevicename')).click(),
cy.get('.tabs > :nth-child(4)').click(),
//  Cypress._.times(5, function() { 
cy.get('#content-applications > .content > .table-options').clearAllLocalStorage('.table-options'),
cy.get('*[class^="short table-left-padding"]').find('tbody').then(($tbody)=>{
        let count = 0
        cy.get('tbody tr:visible').should('have.length.gt',0).its('length').then((tr)=>{ 
        var i=0;
        for(i=0;i<5;i++){
    const value = () => Cypress._.random(0, 1e6);
    const NaV = value();
    const NameV = `nameV${NaV}`;
    cy.get('.create-row > :nth-child(1)').type(NameV),
    cy.get('.create-row > :nth-child(2)').type('true'),
    cy.get('.create-row > select').select('Secret'),
    cy.get('.end > .material-icons').click()
    //cy.get('*[class^="short table-left-padding"]').find('tr').should('have.callCount',5)
    }
    count += i
    cy.log('done: ${count} tr')
    cy.wrap(count).as('count')
})
    })
    cy.get('@count').should('equal',5)
})
//cy.wait(5000).then(() => {               // arbitrary wait       // since we don't know exactly
    //expect(tr).to.eq(5) })     // what loads last
   // cy.get('*[class^="short table-left-padding"]').find('tr').should('have.callCount',5)})

//})