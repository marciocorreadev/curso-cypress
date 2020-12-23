/// <reference types="cypress"/>

it('A external test...', () => {
    
})

describe('Should group teste...', () => {


    describe('Should group more specific tests....', () => {

    })

    it('A internal test...', () => {
        
    })
    
});

describe.only('Only', () => {


    describe.skip('Skip', () => {

    })

    it('..', () => {
        
    })
    
});