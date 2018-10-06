const { Builder, By, Key } = require('selenium-webdriver');
var driver = new Builder().forBrowser('chrome').build();

/**
 * By.name = name attribute inside HTML tag
 * Example: <input name=login></input>
 */
const typeLogin = driver.findElement(By.name('login')).sendKeys('sayuri', Key.TAB);
const typePassword = driver.findElement(By.name('senha')).sendKeys('123456', Key.RETURN);

async function login() {
    await driver.get('http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000');
    Promise.all([typeLogin, typePassword]).catch(reason => {
        console.log(reason);
    }).then(() => {
        const tagText = driver.findElement(By.css('h1')).getText();
        tagText.then((text) => {
            const hasMenu = text.includes('Menu do Jogo');
            if (hasMenu) {
                console.log('OK: User logged with success');
                console.log('Redirect to: '.concat(text));
                console.log('-------------------------------------------------------------------');
            }
        });
    })
}

login()