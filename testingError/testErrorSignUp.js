const { Builder, By, Key } = require('selenium-webdriver');
var driver = new Builder().forBrowser('chrome').build();

async function errorSignUp() {
    driver.get('http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000');
    driver.findElement(By.id('btn_login')).click().then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) { 
        var tagText = driver.findElement(By.css('li')).getText();
        var returnError;
        tagText.then((text) => {
            returnError = text.includes('O usuário é obrigatório para realizar login, por favor, digite corretamente os dados.');
            if (currentUrl === 'http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000/autenticar' && returnError) {
                console.log('ERROR: User have not entered data');
                console.log('Return from server: '.concat(text));
                console.log('-------------------------------------------------------------------');
            }
        });
        return 'Teste passou'
    });
}

errorSignUp()