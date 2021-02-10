const MongoClient = require('mongodb').MongoClient;
async function connect(mongoURL, dbname) {
    // create client
    let client = await MongoClient.connect(mongoURL, {
        useUnifiedTopology: true
    })
    // use a database
    let db = client.db(dbname);
    console.log("Database connected");
    return db;
}

// we are exporting the connect function
module.exports={
    connect
}