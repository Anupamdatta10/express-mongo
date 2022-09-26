const express = require('express')
const app=express();
const cors = require('cors');
const mainRouts=require('./src/routs/mainRouts');
const mongoose = require('mongoose');
const ev=require('./config/env.json')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended:false}));
app.options('*', cors());
app.use('/api/v1',mainRouts.publicRouter)
const PORT=5001
let db;
main = async () => {

    try {

       db = await mongoose.connect(`${ev.DB_HOST}/${ev.DB_NAME}`)
            .then(() => {
               
                console.log('Connection has been established successfully');

                //if (EV.NODE_ENV === 'development') {

                    app.listen(PORT, () => {

                        //logger.info("Server up and running on port: %d", PORT);

                        console.log("Server up and running on port: %d", PORT)

                    });

                //}

            })

            .catch(err => {

                console.log("Unable to connect to the database: %s", err.message || JSON.stringify(err));

            })

    } catch (err) {

        //logger.error("Error to start the server: %s", err.message || JSON.stringify(err));
        console.log("Error to start the server: %s", err.message || JSON.stringify(err))
        process.exit(1);

    }

};
var cron = require('node-cron');


cron.schedule('*/3 * * * * *', () => {
    console.log('running a task every minute');
});

main();
//app.listen(5001,()=>{console.log("app running in port 5001")})
