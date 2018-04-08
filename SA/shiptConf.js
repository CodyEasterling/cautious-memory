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
              homeLogin: '//*[@id="main"]/div[1]/header/nav/ul[2]/li[1]/a',
              loginEmail: '//*[@id="myid"]/div/ion-content/div/div/div/div[2]/form/div/label[1]/input',
              loginPassword: '//*[@id="myid"]/div/ion-content/div/div/div/div[2]/form/div/label[2]/input',
              startShopping: '//*[@id="start_shopping_login_button"]',
              accountButton: '//*[@id="homeIonContent"]/div/div/shipt-web-subheader/div/div/button[3]',
              accountEdit: '//*[@id="root"]/div/div[2]/section/div[2]/div[1]/div/button',
              accountSave: '/html/body/div[4]/div/div/div/section/form/button[2]',
              accountName: '/html/body/div[4]/div/div/div/section/form/div[1]/div/div/div/label/input',
              accountNameValue: '//*[@id="root"]/div/div[2]/section/div[2]/div[1]/div/div/div/div[1]',
              accountEmail: '/html/body/div[4]/div/div/div/section/form/div[2]/div/div/div/label/input',
              accountEmailValue: '//*[@id="root"]/div/div[2]/section/div[2]/div[1]/div/div/div/div[2]',
              accountPhone: '/html/body/div[4]/div/div/div/section/form/div[3]/div/div/div/label/input'
            }



  



};
