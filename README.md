1- Generate the application and download the code

2 -Configure Firebase

    2.1 - Create a Firebase project at the Firebase Console.

    2.2 - Enable Storage
        . Go to Storage
        . Click at 'Enable'

    2.3 - Enable EmalPassword sign-in:
        . At the Firebase console, open the Auth section.
        . On the Sign in method tab, enable the Email/password sign-in method and click Save.
    
    2.4 - Add the Firebase project id to the '<project-folder>/.firebaserc'.

    2.5 - Configure the client side account's credentials:
    . Go to the Firebase Project.
    . Open 'Project settings
    . At Your apps', click at the web icon.
    . Copy only the content of the var 'config
    . Paste the content at the variable firebaseConfig' of the files:
"<project-folder>/frontend/src/config/localhost.js'
"<project-folder>/frontend/src/config/development.js'
"<project-folder>/frontend/src/config/production.js'

    2.6 - Configure the server side account credentials:
    . Go to the Firebase Project.
    . Click at the configuration icon, placed near 'Overview' at the left corner.
    . Click at 'Project settings'.
    . Open the tab 'Service accounts'.
    . Open Firebase Admin SDK'.
    . Click at "GENERATE NEW PRIVATE KEY".
    . Save and replicate the file as:
        o <project-folder>/backend/localhost.json
        o <project-folder>/backend/test.json
        o <project-folder>/backend/production.json

    2.7-Upgrade the Firebase project to the Blaze (Pay as you go) plan

3 - Create and configure a PostgreSQL or MySQL connection

    3.1 - Go to the Google Cloud Console related to the Firebase Project that you created.

    The database instance doesn't need to be at the Google Cloud, but I recommend it because of the low latency.

    3.2 - Go to SQL instances.

    3.3 - Create a new instance.

    3.4 - Go to 'Connections'.
    . Mark Public IP
    . Add '0.0.0.0/0 or your IP address to the new Authorized networks.

    3.5 -Go to 'Overview'.

    . Open '<project-folder/backend/config/<developmentlproduction>json'.
    . Inform the database password at the database.password variable.
    . Copy the Public IP address to the database.migrationHost variable.
    . Copy the Instance connection name to the database.host as '/cloudsql/kinstance connection name>".
    . Ps.: If you experience problems connecting to the database, try using the Public IP address at the database.host.

    3.5-Go to Databases
        . Create a new database and name it 'development.

4 - Configure email sender (Optional):
In order to be able to send user invitation emails you need the SMTP credentials configured. It's optional, if you don't have it configured the app just won't send
those emails.
    . Open '<project-folder>/backend/config/cenvironment>.json
    . Locate the 'email section.
    . Configure the SMTP credentials. See https://nodemailer.com for config options.

5 - Configure Internationalization (118n)
You must setup the labels for the entities, fields and roles.

    5.1 - For each locale at 'frontend/src/18n/<locale>.js':
    . Go to the 'entities' section.
    . Add the labels for the entity and it's fields.
    . Go to the 'roles' section.
    . Replace the object name for the label.

6 - Setup project dependencies

    6.1 - Download and install NodeJS
    Go to https://nodejs.org/en/blog/release/v8.11.4L, download and install 8.11.4v of NodeJS.

    6.2 - Open the console at the project folder.

    6.3 - Update NPM:
    npm install -g npm

    6.4 - Install firebase-tools globally:
    npm install -g firebase-tools

    6.5 - Login at firebase-cli and add the project:
    firebase login

    6.6 - Open the frontend' tolder and run:
    npm install