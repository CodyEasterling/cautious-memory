exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',


  specs: ['./Tests/shiptLogIn-spec.js',
          './Tests/accountSettings-spec.js'
          ],

//uncomment this if you have chrome and firefox installed, and you want to test with multiple browsers
//currently only tested against Chrome
/*  multiCapabilities: [{
              'browserName': 'chrome'
            }, {
              'browserName': 'firefox'
            },

           ],

            maxSessions: 1,*/





            //global variables pushed
   params: {
              homeLogin: '//*[@class="right"]/li[1]/a',
              loginEmail: '//*[@type="email"]',
              loginPassword: '//*[@type="password"]',
              startShopping: '//*[@id="start_shopping_login_button"]',
              accountButton: '//*[@ng-click="vm.accountClick()"]',
              accountEdit: '//*[contains(text(),"Edit")]',
              accountSave: '//*/section/form/button[2]',
              accountName: '//*[@name="name"]',
              accountNameValue: '//*[@class="small mb4 mb0-m"]/div[1]',
              accountEmail: '//*[@name="email"]',
              accountEmailValue: '//*[@class="small mb4 mb0-m"]/div[2]',
              accountPhone: '//*[@name="phone"]'
            }



  



};
