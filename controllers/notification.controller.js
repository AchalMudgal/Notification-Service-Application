const Notification = require("../models/notification.model");



//Controller to create the notification

exports.acceptNotificationRequest = async (req,res) => {
    try{ 
        //Create notification object to be inserted based on the req body
        const notificationObj = {
            subject : req.body.subject,
            recepientEmail : req.body.recepientEmail,
            content : req.body.content,
            requestor : req.body.requestor,
            status : req.body.status
        }


        //Save the notification request
        const notification = await Notification.create(notificationObj);

        //Send tracking id back to the caller
        //_id of the created notification object can be used
        res.status(201).send({
            message : "Request accepted",
            trackingId : notification._id
        })
    }catch(err){
        console.log("Error while storing the notification request", err.message);
        res.status(500).send({
            message : "INTERNAL sever error"
        })
    }
};


//Controller to fetch the notification details based on notification id

exports.getNotificationDetails = async (req,res) => {
 try{
    const trackingId = req.params.id;

    const notification = await Notification.findOne({_id : trackingId});

    res.status(200).send(notification);
}catch(err){
    console.log("Error while retriveing the notification", err.message);
    res.status(500).send({
        message : "Internal server error"
    });
}
};

