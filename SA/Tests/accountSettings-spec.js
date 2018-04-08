const functions = require('../Helpers/helperFunctions.js');
const gl = browser.params;

describe('Shipt basic account config', function() {

  
  it('should correctly update account name', function() {
    functions.clickWait(gl.accountButton);
    browser.waitForAngularEnabled(false);
    functions.clickWait(gl.accountEdit);
    functions.keysWait(gl.accountName, 'new test name');
    functions.clickWait(gl.accountSave);
    browser.sleep(1000);
    functions.valueCheck(gl.accountNameValue, 'new test name');    
  });

   it('should revert account name', function() {   
     functions.clickWait(gl.accountEdit);
     functions.keysWait(gl.accountName, 'test name');
     functions.clickWait(gl.accountSave);
     browser.sleep(1000);
     functions.valueCheck(gl.accountNameValue, 'test name');
   });

   it('should correctly update account email', function() {
    functions.clickWait(gl.accountEdit);
    functions.keysWait(gl.accountEmail,'test4@email.com');
    functions.clickWait(gl.accountSave);
    browser.sleep(1000);
    functions.valueCheck(gl.accountEmailValue, 'test4@email.com');
   });

   it('should revert account email', function() {
    functions.clickWait(gl.accountEdit);
    functions.keysWait(gl.accountEmail,'test3@email.com');
    functions.clickWait(gl.accountSave);
    browser.sleep(1000);
    functions.valueCheck(gl.accountEmailValue, 'test3@email.com');
   });


   //currently failing due to defect, cannot update phone number to one previously used
   it('should correctly update account phone number', function() {
    functions.clickWait(gl.accountEdit);
    functions.keysWait(gl.accountPhone, '2051234567');
    functions.clickWait(gl.accountSave);
   });

   //currently failing due to defect, cannot update phone number to one previously used
   it('should revert phone number', function() {
    functions.clickWait(gl.accountEdit);
    functions.keysWait(gl.accountPhone, '2057654321');
    functions.clickWait(gl.accountSave);
   });


});