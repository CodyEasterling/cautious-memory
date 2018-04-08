const functions = require('../Helpers/helperFunctions.js');
const gl = browser.params;


describe('Shipt login', function() {

it('should log in to test user', function() {
    browser.get('https://www.shipt.com');
    browser.manage().window().maximize();
    functions.clickWait(gl.homeLogin);
    functions.keysWait(gl.loginEmail,'test3@email.com');
    functions.keysWait(gl.loginPassword,'passwordtest1');
    functions.clickWait(gl.startShopping);
    functions.titleWait('Shipt Groceries');
  });



});