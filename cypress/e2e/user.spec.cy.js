import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => 

  it('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.name({ nationality: 'en' }), chance.last({ nationality: 'en' }))
    myInfoPage.fillEmployeeDetails('EmployeeId', 'otherId', 'Drivers Number', '2025-29-07', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
    // menuPage.accessPerformance()
    // menuPage.accessAdmin()
    // menuPage.accessPim()
    // menuPage.accessLeave()
    // menuPage.accessTime()
    // menuPage.accessRecruitment()
    // menuPage.accessDirectory()
    // menuPage.accessMaintenance(userData.userSuccess.password)
    // menuPage.accessClaim()
    // menuPage.accessBuzz()
  })
)