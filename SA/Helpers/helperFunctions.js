//globals
var EC = protractor.ExpectedConditions;


module.exports = {

  



  clickWait: (path) => {
    var findIt = element(by.xpath(path));
    var isClickable = EC.elementToBeClickable(findIt);
      browser.wait(isClickable, 8000).then(() => {
        findIt.click();
        expect(EC.elementToBeClickable(findIt));
    })
  },

  

  valueCheck: (path, text) => {
    var findIt = element(by.xpath(path));
    var isClickable = EC.elementToBeClickable(findIt);
    browser.wait(isClickable, 8000).then(() => {
      expect(findIt.getText()).toEqual(text);
    });
  },

keysWait: (path,text) =>  {
  var findIt = element(by.xpath(path));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
  findIt.clear().sendKeys(text);
  expect(findIt.getAttribute('value')).toEqual(text);
  })
},

titleWait: (pageTitle) => {
  var findIt = $('.logo-button-container');
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000)
    .then(() => {
        return browser.getTitle()
        .then((titleString) => {
expect(pageTitle).toEqual(titleString);
    });
  });
},

expectWait: (locator, path) => {
  var findIt = element(locator(path));
  var isClickable = EC.elementToBeClickable(findIt);
  browser.wait(isClickable, 8000).then(() => {
expect(element(locator(path)).isDisplayed()).toBe(true);
  });
},







}
