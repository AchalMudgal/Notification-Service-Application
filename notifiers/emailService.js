//This file will contain the sample code for sending the email notification
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port : 465,               //True for 465, Flase for other ports
    host : "smtp.gmail.com",  //At the place of "host" also "service" can be used => service : "gmail"
    auth : {
        user: 'achal408mg@gmail.com',
        pass : '***********'
    },
    secure : true
});

