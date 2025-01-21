import userData from '../fixtures/user-data.json'

class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[data-v-6475d26d=''] [href='/web/index.php/buzz/viewBuzz']",
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessAdmin() {
        cy.get(this.selectorsList().adminButton).click()
    }

    accessPim() {
        cy.get(this.selectorsList().pimButton).click()
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    accessTime() {
        cy.get(this.selectorsList().timeButton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    accessDirectory() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    accessMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click()
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().loginButton).click()
    }

    accessClaim() {
        cy.get(this.selectorsList().claimButton).click()
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
    }


    

    
}

export default MenuPage