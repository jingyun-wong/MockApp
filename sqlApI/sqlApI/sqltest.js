

var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

var server = app.listen(2345, function () {
    console.log('Server is running..');
});

const config = {
    user: "SqlMainUser", // better stored in an app setting such as process.env.DB_USER
    password: '2023UBS&SMU@fyp', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'ubsmockappsql.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'ubsmockappsql', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

// tracking Metrics
app.get('/get/trackingMetrics', function (req, res) {

    var sql = require("mssql");

    // config for your database


    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from [dbo].[trackingMetrics]', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

app.post('/add/trackingMetrics', function (req, res) {

    console.log(req.body)

    var sql = require("mssql");

    var sessionId = req.body.sessionId
    var customerId = req.body.customerId
    var pageNo = req.body.pageNo
    var clicks = req.body.clicks
    var elapsedDuration = req.body.elapsedDuration
    var dbLoadTime = req.body.dbLoadTime
    var frontEndErrors = req.body.frontEndErrors
    var backEndErrors = req.body.backEndErrors
    var domainName = req.body.domainName
    var pageName = req.body.pageName
    var renderDuration = req.body.renderDuration
    var dateEntered = new Date().toISOString().split('.')[0]


    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);


        // create Request object
        var request = new sql.Request();





        // query to the database and get the records
        request.query(`INSERT INTO [dbo].[trackingMetrics]
        VALUES('${sessionId}',${customerId},${pageNo},'${pageName}','${domainName}',${clicks},${renderDuration},${elapsedDuration},${dbLoadTime},${frontEndErrors},${backEndErrors},'${dateEntered}')`, function (err, results, fields) {
            if (err) res.send(err)



            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully inserted new row of data"
            });


        });
    });
});

// get user stories
app.get('/get/userstories', function (req, res) {
    var sql = require("mssql");

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
    
        // query to the database and get the records
        request.query('select * from [dbo].[userStory]', function (err, recordset) {
            
            if (err) res.send(err)

            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully retrieved  data",
                'Data': recordset
            });
        }
    )})}
)


// get trading
app.get('/get/trading', function (req, res) {

    var sql = require("mssql");

    // config for your database



    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from [dbo].[trading]', function (err, recordset) {

            if (err) res.send(err)

            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully retrieved  data",
                'Data': recordset
            });

        });
    });
});

app.post('/add/trading', function (req, res) {

    console.log(req.body)

    var sql = require("mssql");


    var orderStatus = req.body.orderStatus
    var enteredOn = req.body.enteredOn
    var executedStocks = req.body.executedStocks
    var foreignBrokerage = req.body.foreignBrokerage
    var marketValue = req.body.marketValue
    var portfolioId = req.body.portfolioId
    var portfolioType = req.body.portfolioType
    var priceLimit = req.body.priceLimit
    var quantity = req.body.units
    var settlementCurrency = req.body.settlementCurrency
    var tradingPlace = req.body.tradingPlace
    var triggerLimit = req.body.triggerLimit
    var units = req.body.units
    var validity = req.body.validity



    // connect to your database
    sql.connect(this.config, function (err) {

        if (err) console.log(err);


        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query(`INSERT INTO [dbo].[trading]
        (orderStatus,enteredOn,executedStocks,foreignBrokerage,marketValue,portfolioId,portfolioType,
        priceLimit,quantity,settlementCurrency,tradingPlace,triggerLimit, units, validity)
        VALUES(
        '${orderStatus}',
        '${enteredOn}',
        '${executedStocks}',
        '${foreignBrokerage}',
        ${marketValue},
        ${portfolioId},
        '${portfolioType}',
        ${priceLimit},
        ${quantity},
        '${settlementCurrency}',
        '${tradingPlace}',
        ${triggerLimit}, 
        ${units}, '${validity}')`, function (err, results, fields) {
            if (err) res.send(err)


            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully inserted new row of data"
            });


        });
    });
});


app.get('/get/investmentIdeas', function (req, res) {

    var sql = require("mssql");

    // config for your database



    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from [dbo].[investmentIdeas]', function (err, recordset) {

            if (err) res.send(err)

            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully retrieved  data",
                'Data': recordset
            });

        });
    });
});

app.get('/get/investmentIdeas/:id', function (req, res) {
    const id = req.params.id;
    var sql = require("mssql");

    sql.connect(config, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query(`select * from [dbo].[investmentIdeas] where [id] = '${id}'`, function (err, recordset) {

            if (err) res.send(err)

            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully retrieved  data",
                'Data': recordset
            });

        });
    })
})

app.get('/get/tradingIdeas/all/:category', function (req, res) {
    const category = req.params.category;
    var sql = require("mssql");

    sql.connect(config, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query(`select * from [dbo].[tradingIdeas] where [category] = '${category}' and [id] is null`, function (err, recordset) {

            if (err) res.send(err)

            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully retrieved  data",
                'Data': recordset
            });

        });
    })
})

app.get('/get/tradingIdeas/main/:id', function (req, res) {
    const id = req.params.id;
    var sql = require("mssql");

    sql.connect(config, function (err) {
        if (err) console.log(err);

        var request = new sql.Request();

        request.query(`select * from [dbo].[tradingIdeas] where [id] = '${id}'`, function (err, recordset) {

            if (err) res.send(err)

            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully retrieved  data",
                'Data': recordset
            });

        });
    })
})


app.post('/add/investmentIdeas', function (req, res) {

    console.log(req.body)


    var id = req.body.id
    var category = req.body.category
    var img = req.body.img
    var post = req.body.post
    var title = req.body.title
    var details = req.body.details

    var sql = require("mssql");




    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);


        // create Request object
        var request = new sql.Request();






        // query to the database and get the records
        request.query(`INSERT INTO [dbo].[investmentIdeas]
        (id,category, img, post, title, details)
        VALUES(
        '${id}',
        '${category}',
        '${img}',
        '${post}',
        '${title}',
        '${details}'
        );`, function (err, results, fields) {
            if (err) res.send(err)


            // send records as a response
            else res.send({
                'status code': 200,
                'message': "Successfully inserted new row of data"
            });


        });
    });
});



