const amqp = require("./src/services/messageQueueServices");

amqp.config()
    .then(() => {
        console.log("Email Services started");
        try {
        amqp.consumeAndProduceEmailQueue();
        } catch (err) {
            console.log(err);
        }
    });