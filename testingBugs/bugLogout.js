const { Builder, By, Key } = require('selenium-webdriver');
var driver = new Builder().forBrowser('chrome').build();

const typeLogin = driver.findElement(By.name('login')).sendKeys('sayuri', Key.TAB);
const typePassword = driver.findElement(By.name('senha')).sendKeys('123456', Key.RETURN);

async function login() {
    await driver.get('http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000');
    Promise.all([typeLogin, typePassword]).catch(reason => {
        console.log(reason);
    }).then(() => {
        driver.findElement(By.id('btn_sair')).click().then(function() {
            return driver.getCurrentUrl();
        })
        .then(function(currentUrl) { 
            if (currentUrl !== 'http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000/logout') {
                console.log('BUG: After click logout, the session continue');
                console.log('Redirect for: '.concat(currentUrl));
                console.log('-------------------------------------------------------------------');
            }
            return 'Teste passou'
        });
    })
}

login()