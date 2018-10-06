const { Builder, By, Key } = require('selenium-webdriver');
var driver = new Builder().forBrowser('chrome').build();

async function goBack() {
    await driver.get('http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000/cadastro');
    driver.findElement(By.id('btn_voltar')).click().then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) { 
        if (currentUrl === 'http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000/cadastro') {
            console.log('BUG: User not redirected');
            console.log('-------------------------------------------------------------------');
        }
        return 'Teste passou'
    });
} 

goBack();