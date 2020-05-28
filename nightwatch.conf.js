require('babel-core/register');

module.exports = {
  src_folders: ['src'],
  page_objects_path: ['src/pages'],
  // globals_path : "globals.js",

      "webdriver": {
        "start_process": true, 
        //"server_path": "node_modules/.bin/chromedriver",
        "server_path": "./node_modules/chromedriver/lib/chromedriver/chromedriver",
        "cli_args": [
          "--verbose"
        ],
        "port": 9515
      },

      // test_runner: {
      //   type: 'mocha',
      //   options: {
      //     ui: 'bdd',
      //     reporter: 'spec'
      //   }
      // },
    
      "test_settings" : {
        "default" : {
          "skip_testcases_on_fail": true,
          "desiredCapabilities" : {
            "browserName" : "chrome",
            "javascriptEnabled": true,
            "acceptSslCerts": true,
            
            chromeOptions: {
                args: [
                  '--headless',
                  '--no-sandbox',
                  '--disable-gpu'
                ]
            }
          }
        }
      }
    }