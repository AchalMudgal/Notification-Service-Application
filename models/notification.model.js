//Define the schems for the notification model

const constants = require("../utils/constants");
const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({

    subject : {
        type : String,
        required : true
    },
    recepientEmail : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    requester : {
        type : String
    },
    status : {
        type : String,
        default : constants.notificationStatus.unSent,
        enum : [constants.notificationStatus.sent, constants.notificationStatus.unSent]
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : () => {
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    }
});

module.exports = mongoose.model("notifications", notificationSchema);