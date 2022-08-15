
const notificationController = require("../controllers/notification.controller");

module.exports = (app) =>{
    //Insert a new notificatnotificationService/api/v1/notificationion request
    app.post("/notificationService/api/v1/notification", notificationController.acceptNotificationRequest);
    //Getting the notification status
    app.get("/notificationService/api/v1/notification/:id", notificationController.getNotificationDetails)
}