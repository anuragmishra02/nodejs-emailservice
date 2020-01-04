const RabbitMQ = require("../utils/RabbitMQ");
const { rabbitMQ } = require("../../config/environment");
const emailConst = require('../constants/emailConstants');
const template = require('../templates/emailTemplate');
const email = require('../services/emailServices');


class AMQPEmailServices extends RabbitMQ {

    //Calling FBGraph microservices to validate user     
    consumeAndProduceEmailQueue() {
        let resetTemplate = null;
        let emailSubject = null;
        this.consumer.assertQueue(rabbitMQ.queue, { durable: true });
        this.consumer.consume(rabbitMQ.queue, (message) => {
            console.log("consumeAndProduceEmailQueue");
            console.log(message.content.toString());
            const reqData = JSON.parse(message.content);
            console.log(reqData.name);
            console.log(reqData.email);
            console.log(reqData.userRegistration);
            console.log(reqData.freeTokens);
            if (reqData.userRegistration) {
                resetTemplate = template.emailTemplate(emailConst.heading_Account_Registration, emailConst.accountRegistration(reqData.freeTokens), reqData.name);
                emailSubject = emailConst.subject_Account_Registration;
            }
            try {               
                email.sendEmail("abm.anurag@gmail.com", emailSubject, resetTemplate);
                console.log('Delivered message %s');
                //remove message item from the queue
                this.consumer.ack(message);
            } catch (error) {
                console.log(error);
                // put the failed message item back to queue
                this.consumer.ack(message);
            }
        });

    }

}

module.exports = new AMQPEmailServices("amqp://localhost");