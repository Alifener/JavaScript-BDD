# PHOTOBOX GITHUB RESGISTRATION

Prerequisite:

1.  npm installed

2.  Chrome Installed

3.  Chromedriver executable available on your path($PATH)

    Verify chromedriver is working by opening a terminal and typing 'chromedriver'. 
    export PATH=$PATH:{chromedriver_path}:.

You should see:

    Alis-MBP:alifener$ chromedriver 
    Starting ChromeDriver 2.25.426935 (820a95b0b81d33e42712f9198c215f703412e1a1) on port 9515
    Only local connections are allowed.


If all seems OK, Ctrl+C to get rid of that, and carry on:

    git clone git@github.com:Alifener/PhotoBoxJS.git
    cd PhotoBoxJS
    npm install
    
To run the tests:  

    node_modules/.bin/cucumber-js 
