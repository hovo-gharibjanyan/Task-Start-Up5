const { MongoClient } = require('mongodb');
let dbConnection
module.exports = { 
    connectToDb: (cb) => { 
        MongoClient.connect('mongodb://127.0.0.1:27017/University')
            .then ((client) => { 
                dbConnection = client.db()
                return cb()
            })
            .catch ((error) => { 
                console.log(error);
                return cb(error)
            })
    },
    getDb: () => dbConnection
}