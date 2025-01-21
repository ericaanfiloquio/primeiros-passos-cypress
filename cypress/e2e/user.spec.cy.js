import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
 
  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text--active",  
    secondItemComboBox: ".oxd-select-dropdown > :nth-child(2) > span",
    thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
  }

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    menuPage.accessPerformance()
    menuPage.accessAdmin()
    menuPage.accessPim()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessDirectory()
    menuPage.accessMaintenance(userData.userSuccess.password)
    menuPage.accessClaim()
    menuPage.accessBuzz()
    

  //   cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
  //   cy.get(selectorsList.middleNameField).clear()
  //   cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
  //   //cy.get(selectorsList.genericField).eq(3).clear().type('NickNameTest')
  //   cy.get(selectorsList.genericField).eq(3).clear().type('IdTest')
  //   cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
  //   cy.get(selectorsList.genericField).eq(5).clear().type('DriverTest')
  //   cy.get(selectorsList.genericField).eq(6).clear().type('2025-05-12')
  //   cy.get(selectorsList.dateCloseButton).click()
  //   //cy.get(selectorsList.genericField).eq(8).clear().type('SsnTest')
  //   //cy.get(selectorsList.genericField).eq(9).clear().type('SinTest')
  //   cy.get(selectorsList.submitButton).eq(0).click()
  //   cy.get('body').should('contain', 'Successfully Updated')
  //   cy.get('.oxd-toast')
  //   cy.get(selectorsList.genericComboBox).eq(0).click()
  //   cy.get(selectorsList.secondItemComboBox).click()
  //   cy.get(selectorsList.genericComboBox).eq(1).click()
  //   cy.get(selectorsList.thirdItemComboBox).click()
  // })

  // it('Login - Fail', () => {
  //   cy.visit('/auth/login')
  //   cy.get(selectorsList.usernameField).type(userData.userFail.username)
  //   cy.get(selectorsList.passwordField).type(userData.userFail.password)
  //   cy.get(selectorsList.loginButton).click()
  //   cy.get(selectorsList.wrongCredentialAlert)
  })
})