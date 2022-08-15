//Logic to schedule the sending the email

const cron = require("node-cron");
const Notification = require("../models/notification.model");
const constants = require("../utils/constants");
const emailTransporter = require("../notifiers/emailService");

cron.schedule("*/30 * * * * *", async ()=>{

    //Logic to read from the DB and send email
    

    //Fetch all the notification requests which are in UN_SENT status
    const notification = await Notification.find({status : constants.notificationStatus.unSent});

    
    //Send the email notification corresponding to each of those requests
    if(notification){
        console.log("Number of un-sent request are : ", notification.length);

        //Send email for each notification request
        notification.forEach( n => {
            const mailObject = {
                to : n.recepientEmail,
                subject : n.subject,
                text : n.content  
            }
            console.log("Sending email for ", mailObject);
            emailTransporter.sendMail(mailObject,async (err,info)=>{
                if(err){
                    console.log("Error while sending email ", err.message)
                }else{
                    console.log("Successfully sent the email", info);

                    //Now update the status of notification
                    n.status = constants.notificationStatus.sent

                    await n.save();
                }

            })
        })
    }
});    