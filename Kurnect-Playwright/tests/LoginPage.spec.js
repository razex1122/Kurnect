let {test, expect} = require('@playwright/test')

test('Login Page', async ({page}) => {
    
   await page.goto('https://qa.wekurnect.io/');

   const pageTitle=page.title();
})
