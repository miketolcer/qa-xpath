const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("Google", async () => {
    await driver.get('https://www.google.com/')
    
    let searchSelector = ('[name="q"]')

    let searchBarElement = await driver.findElement(By.css(searchSelector))

    await searchBarElement.sendKeys('find current \n')

    await driver.sleep(10000)
    
    
    await driver.quit()
})