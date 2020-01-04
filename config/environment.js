require("dotenv").config();

const {
    PORT,
    AMQP,
    QUEUE,
    RESQUEUE
} = process.env;

const {
    STACKEREMAILUSER, PASSWORD, HOST, SSL, SMTPPORT, EMAILSERVER
} = process.env

const {
    LOGO,
    FOOTER_LOGO,
    EMAIL_STACKER_URL
} = process.env


const SERVER = {
    port: PORT
};

const rabbitMQ = {
    amqp: AMQP,
    queue: QUEUE,
    resQueue:RESQUEUE
};

const EMAIL_SETTINGS = {
    stackerEmailUser: STACKEREMAILUSER,
    password: PASSWORD,
    host: HOST,
    ssl: SSL,
    smtpport: SMTPPORT,
    emailServer:EMAILSERVER
};

const APPLOGO = {
    logo: LOGO,
    footerLogo: FOOTER_LOGO,
    stackerUrl:EMAIL_STACKER_URL
};



module.exports = {
    SERVER,
    rabbitMQ,
    EMAIL_SETTINGS,
    APPLOGO
}