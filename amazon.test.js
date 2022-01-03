const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("amazon", async () => {
    await driver.get('https://www.amazon.com/')

    let first = await driver.findElement(By.css('img[alt="Fitness equipment"]'))

    await first.click()

    let pic = await driver.findElement(By.css('img[data-image-index="4"]'))

    await pic.click()

    await driver.findElement(By.css('span[class="a-dropdown-prompt"]')).click()

    
    jest.setTimeout(30000)
    
    await driver.quit()
})