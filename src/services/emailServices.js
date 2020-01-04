const nodemailer = require('nodemailer');
const { EMAIL_SETTINGS } = require("../../config/environment");


console.log(typeof EMAIL_SETTINGS.ssl, EMAIL_SETTINGS);
let transporter = null;
// create reusable transporter object using the default SMTP transport
if (EMAIL_SETTINGS.emailServer === 'gmail') {
    transporter = nodemailer.createTransport({
        host: EMAIL_SETTINGS.host,
        port: parseInt(EMAIL_SETTINGS.smtpport),
        secure: EMAIL_SETTINGS.ssl === "true" ? true : false, // true for 465, false for other ports
        auth: {
            user: EMAIL_SETTINGS.stackerEmailUser, // generated ethereal user
            pass: EMAIL_SETTINGS.password // generated ethereal password
        }
    });
}
if (EMAIL_SETTINGS.emailServer === 'openshift') {
    transporter = nodemailer.createTransport({
        host: EMAIL_SETTINGS.host,
        port: parseInt(EMAIL_SETTINGS.smtpport),
        secure: EMAIL_SETTINGS.ssl === "true" ? true : false, // true for 465, false for other ports
        // tls: {
        //     // do not fail on invalid certs
        //     rejectUnauthorized: false
        // }
        tls: { ciphers: "SSLv3" }
    });
}
module.exports = {
    sendEmail: async (toUser, subjectUser, contentUser) => {

        console.log(`Send email to ${toUser}`);

        let options = {
            from: EMAIL_SETTINGS.stackerEmailUser, // sender address
            to: toUser, // list of receivers
            subject: subjectUser, // Subject line        
            html: contentUser // html body
        };

        // send mail with defined transport object
        transporter.sendMail(options, (error, info) => {
            if (error) {
                console.log(error);
                throw error;
            }
        });
    },

    // sending mail from helpdesk

    sendEmailTostacker: async (toUser, contentHelpdesk) => {
        console.log("sendemail trigger");
        let options = {
            from: toUser, // sender address
            to: EMAIL_SETTINGS.stackerEmailUser, // list of receivers
            subject: "Question from " + toUser, // Subject line        
            html: contentHelpdesk // html body
        };
        // send mail with defined transport object
        transporter.sendMail(options, (error, info) => {
            if (error) {
                console.log(error);
            }
        });
    }

};
