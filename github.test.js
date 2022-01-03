const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("github", async () => {
    await driver.get('https://github.com/')

    let hub = await driver.findElement(By.css('[class="HeaderMenu-link flex-shrink-0 no-underline"]'))

    await hub.click()

    let oneHub = await driver.findElement(By.css('[name="login"]'))

    await oneHub.sendKeys("miketolcer@yahoo.com")

    let pass = await driver.findElement(By.css('[name="password"]'))

    await pass.sendKeys(".......")

    let cl = await driver.findElement(By.css('[name="commit"]'))

    await cl.click()

    let cd = await driver.findElement(By.xpath('(//span[@class="dropdown-caret"])[2]'))

    await cd.click()

    // await driver.manage().setTimeouts( { implicit: 10000 } );


    let chips = await driver.findElement(By.xpath('html/body/div[1]/header/div[7]/details/details-menu/a[2]'))

    await chips.click

})    