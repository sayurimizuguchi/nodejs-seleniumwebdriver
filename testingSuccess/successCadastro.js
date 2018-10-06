const { Builder, By, Key } = require('selenium-webdriver');
var driver = new Builder().forBrowser('chrome').build();

/**
 * By.name = name attribute inside HTML tag
 * Example: <input name=login></input>
 */
const typeName = driver.findElement(By.name('nome')).sendKeys('Sayuri', Key.TAB);
const typeLogin = driver.findElement(By.name('login')).sendKeys('sayurimizuguchi', Key.TAB);
const typeSerie = driver.findElement(By.name('serie')).sendKeys('4', Key.TAB);
const typePassword = driver.findElement(By.name('senha')).sendKeys('123456', Key.RETURN);

async function register() {
    await driver.get('http://ec2-13-59-235-34.us-east-2.compute.amazonaws.com:3000/cadastro');
    Promise.all([typeName, typeLogin, typeSerie, typePassword]).catch(reason => { 
        console.log(reason)
      })
      .then(function() {
        const tagText = driver.findElement(By.css('li')).getText();
        tagText.then((text) => {
            const hasRegisterOK = text.includes('Cadastrado com sucesso!');
            if (hasRegisterOK) {
                console.log('OK: User already registered');
                console.log('Return from server: '.concat(text));
                console.log('-------------------------------------------------------------------');
            }
        });
    });;
} 

register();