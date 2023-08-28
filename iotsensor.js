const express = require('express');
const app = express();
//var fs = require('fs')
const Sensor = require('./Model/sensor');
const mongoose = require('mongoose')
//const url ="mongodb+srv://kaviuln1335:kaviuln@cluster0.hcagxgu.mongodb.net/?retryWrites=true&w=majority"
const url ="mongodb://localhost:27017/sensor_data"


setInterval(sensortest, 10000);

function sensortest(){

    //MongoDB Connection

    try{
        mongoose.connect(url, {useUnifiedTopology: true},
            () => console.log("Mongoose connected"),
            );
        } catch (e) {
            console.log("Mongoose not connected!");
        }
        const db1 = mongoose.connection
        
        db1.on('error', (err) => {
            console.log(err)
        })
        
        db1.once('open', () => {
            console.log("Database Connection Established!")
        })



    //Sensor Data

    //const iotData = fs.readFileSync("E:/Deakin Uni/S779/Trimester 2 (2023)/SIT729/Task 4/sensorData_4.4HD.txt").toString('utf-8')
    //console.log(iotData);

    const sensordata = {
        id: 0,
        name: "temperaturesensor",
        address: "221 Burwood Hwy, Burwood VIC 3125",
        time: Date.now(),
        temperature: 20
        //sensorData: iotData
        }
    
        // const low = 10;
        // const high = 40;
        // reading = Math.floor(Math.random() * (high - low) + low);
        // sensordata.temperature = reading;
    
    const jsonString = JSON.stringify(sensordata);
    console.log(jsonString);
    
    const newSensor = new Sensor({
        id: sensordata.id,
        name: sensordata.name,
        address: sensordata.address,
        time: sensordata.time,
        temperature: sensordata.temperature
        //sensorData: sensordata.sensorData
        });

        newSensor.save().then(doc => {
            // for (i=0; i<=10; i++)
            // {
            // time = sensordata.time;
            // endtime = Date.now();
            // elapsed = ((endtime-time)/1000);
            // console.log(doc);
            // console.log("Start-time: ", time);
            // console.log("Time elapsed: ", elapsed, "sec");
            // }

            //time = sensordata.time;
            //endtime = Date.now();
            //elapsed = ((endtime-time)/1000);
            console.log(doc);
            time = sensordata.time;
           // console.log("Start-time: ", time);
           // console.log("Time elapsed: ", elapsed, "sec");

        //    Sensor.findOneAndUpdate({
        //     name: "temperaturesensor",
        
        // }, {
        //     $push : {
        //         time: sensordata.time,
        //         sensorData: sensordata.sensorData
        //     }
        // })

     


       
            
    

        }).then(() => {
        //mongoose.connection.close();
        console.log("MongoDB still open");
        });

}

