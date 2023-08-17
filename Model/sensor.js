const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dataSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    time: {
        type: Date
    },
    temperature: {
        type: Number

    }

    // sensorData: {
    //     type: String

    // },

}, {timestamps: true})



const Sensor = mongoose.model('Sensor_Data_5.3D_vm_3', dataSchema)
module.exports = Sensor

