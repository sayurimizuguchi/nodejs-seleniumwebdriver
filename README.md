# Selenium webdriver with Node.js
##### Using Node.js for Test automation with Selenium webdriver and gulp.

# Simple examples to learning easily
##### Success examples:
  - [Register user](https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver/blob/master/testingSuccess/successCadastro.js)
  - [Logging user](https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver/blob/master/testingSuccess/successLogin.js)
##### Error examples:
  - [User not entered password](https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver/blob/master/testingError/errorNotPassword.js)
  - [User not entered any log in data](https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver/blob/master/testingError/testErrorSignUp.js)
##### Bug examples:
  - [User request logout](https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver/blob/master/testingBugs/bugLogout.js)
  - [Button does not work](https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver/blob/master/testingBugs/bugGoBack.js)

### Installation

Requires [Node.js](https://nodejs.org/) v4+ and v7.5- to run.

Clone the repository and Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/sayurimizuguchi/nodejs-seleniumwebdriver.git
$ cd testing
$ npm install -d
```

Testing and execute tasks with gulp

```sh
$ gulp --tasks
$ gulp nameOftheTask
```

### Good to know...

Instructions on how to use Selenium and gulp

| NAME | README |
| ------ | ------ |
| Selenium | [documentation](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/) |
| Gulp | [docs](https://gulpjs.org/API.html) |



#### Development

Some useful examples, like ```getText``` from element By.css
```
/**
 * By.css = HTML tag or class/id name from css
 * Example: <li>Text here</li>
 */
 
const tagText = driver.findElement(By.css('h1')).getText();
tagText.then((text) => {
    const hasText = text.includes('Menu do Jogo');
    if (hasText) {
        console.log('Text: '.concat(text));
        console.log('-------------------------------------------------------------------');
    }
});
```
Other useful example, like ```click()``` button By.id

```
/**
 * By.id = id attribute inside HTML tag
 * Example: <button id=btn_login></input>
 */
 
async function clickButton() {
    driver.get('yourWebSite');
    driver.findElement(By.id('btn_login')).click()
}
```

```getCurrentUrl``` example: 
```
/**
 * driver.getCurrentUrl
 * Example: go to page that you want, then use this function to get the current URL
 */
 
async function getUrl() {
    driver.get('yourWebSite');
    driver.findElement(By.id('btn_login')).click().then(function() {
        return driver.getCurrentUrl();
    }).then(function(currentUrl) {
        console.log(currentUrl);
    })
}
```

**Free Software, Hell Yeah!**

