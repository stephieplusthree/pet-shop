module.exports = {
    env: 'development',

    database: {
        username: 'postgres',
        dialect: 'postgres',
        password: 'mBHk5t8pyNwFCokw',
        database: 'development',
        migrationHost: '34.69.192.59',
        host: '/cloudsql/'pet-hotel-prod-e409f:us-central1:pet-hotel-prod-e409f,
        logging: console.log,
        operatorsAliases: false,
    },

    // database: {
    //   username: 'root',
    //   dialect: 'mysql',
    //   password: '',
    //   database: 'development',
    //   host:
    //     '/cloudsql/<project id>:us-central1:<database id>',
    //   migrationHost: '<insert public ip here>',
    //   logging: console.log,
    //   operatorsAliases: false,
    // },

    email: {
        comment: 'See https://nodemailer.com',
        from: '<insert your email here>',
        host: null,
        auth: {
          user: null,
          pass: null,
        },
    },
    
    graphiql: 'true',
    
    clientUrl:
        'https://<insert project id here>.firebaseapp.com',
    
    defaultUser: '<insert your email here>',
};
