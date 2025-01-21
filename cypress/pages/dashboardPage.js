class DashboardPage { //Page Object: feita para deixar o meu código mais limpo e entendível por qualquer um. Criamos como uma classe sempre. O nome da classe é o mais fácil de entender. Como é do Dashboard, colocar ele no nome.
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
    }
    
    return selectors
    
    }

    checkDashboardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorsList().dashboardGrid).should('be.visible')     
    }
}

export default DashboardPage