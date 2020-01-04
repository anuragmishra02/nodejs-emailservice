const amqplib = require('amqplib/callback_api');

const { rabbitMQ } = require("../../config/environment");
const emailConst = require('../constants/emailConstants');
const template = require('../templates/emailTemplate');

// Create connection to AMQP server
amqplib.connect(rabbitMQ.amqp, (err, connection) => {
    if (err) {
        console.error(err.stack);
        return process.exit(1);
    }
    // Create channel
    connection.createChannel((err, channel) => {
        if (err) {
            console.error(err.stack);
            return process.exit(1);
        }

        // Ensure queue for messages
        channel.assertQueue(rabbitMQ.queue, {
            // Ensure that the queue is not deleted when server restarts
            durable: true
        }, err => {
            if (err) {
                console.error(err.stack);
                return process.exit(1);
            }

            // Only request 1 unacked message from queue
            // This value indicates how many messages we want to process in parallel
            channel.prefetch(1);

            // Set up callback to handle messages received from the queue
            channel.consume(rabbitMQ.queue, data => {
                if (data === null) {
                    return;
                }

                // Decode message contents
                let message = JSON.parse(data.content.toString());
                console.log(message);

                // Send the message using the previously set up Nodemailer transport
                const resetTemplate = template.emailTemplate(emailConst.heading_Account_Registration, emailConst.accountRegistration(message.freeTokens), message.name);
                try {
                    email.sendEmail(message.emailId, emailConst.subject_Account_Registration, resetTemplate);
                    console.log('Delivered message %s');
                    //remove message item from the queue
                    channel.ack(data);
                } catch (error) {
                    console.log(error);
                    // put the failed message item back to queue
                    return channel.nack(data);
                }
            });
        });
    });
});

