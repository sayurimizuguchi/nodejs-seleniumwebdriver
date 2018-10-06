const { Builder, By } = require('selenium-webdriver');

var driver = new Builder().forBrowser('chrome').build();

/**
 * By.id = id attribute inside HTML tag
 * Example: <button id=btn_login></input>
 */
async function errorNotPassword() {
    driver.get('http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000');
    await driver.findElement(By.name('login')).sendKeys('sayurimizuguchi');

    driver.findElement(By.id('btn_login')).click().then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) { 

        /**
         * By.css = HTML tag or class/id name from css
         * Example: <li>Text here</li>
         */
        var tagText = driver.findElement(By.css('li')).getText();
        var returnError;
        tagText.then((text) => {
            returnError = text.includes('A senha é obrigatória para realizar login, por favor, digite corretamente os dados.');
            if (currentUrl === 'http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000/autenticar' && returnError) {
                console.log('ERROR: User have not entered the password');
                console.log('Return from server: '.concat(text));
                console.log('-------------------------------------------------------------------');
            }
        });
        return 'OK'
    });
}

errorNotPassword();