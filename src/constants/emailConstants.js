const { APPLOGO  } = require("../../config/environment");

const subject_Account_Registration = "Stacker Account Registration";
const heading_Account_Registration = "Account Registration";
const Subject_Content_Access = "Stacker Content Access";
const heading_Content_Access = "Content Access";
const Subject_PIN_Code_Changed = "Stacker PIN Code Changed";
const heading_PIN_Code_Changed = "PIN Code Changed";
const Subject_Montly_transaction="Stacker Montly transaction";
const heading_Montly_transaction="Montly transaction";
const content_PIN_Code_Changed = ` <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Your Stacker PIN Code has been changed.</p>
                       <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">In case you did not change your PIN Code, please contact <a href=${APPLOGO.stackerUrl}dashboard style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}</a> </p>
                     <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Thank you for using Stacker!
                     </p>`;
const Subject_Account_Locked = "Stacker Account Locked ";
const heading_Account_Locked = "Account Locked";
const Content_Account_Locked = `<p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Your Stacker Account has been locked due to too many invalid PIN Code attempts.</p>
                    <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">
                        Please contact our customer service on <a href="mailto:${APPLOGO.stackerUrl}"style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}</a> to unlock your account  again.
                        You can see your list of transactions on
                        
                    </p>
                    <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">We're sorry for any inconvenience this might have caused.
                    </p>`;

const Subject_Reset_PIN_Code = "Stacker Reset PIN Code";
const heading_Reset_PIN_Code = "Reset PIN Code";
const Subject_Payment_CardRegistration="Stacker Payment CardRegistration";
const heading_Payment_CardRegistration = "Payment CardRegistration";

module.exports = {
    //New user registration
    subject_Account_Registration,
    heading_Account_Registration,

    accountRegistration: (freetoken) => {
        const accReg = ` <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Thank you for signing up for Stacker - a micro payment service that makes it possible to easily buy, access and revisit content from different online media sites.</p>
                       <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">We appreciate your interest in Stacker very much and as a gratitude, have added ${freetoken} tokens to your account for you to spend free of charge.</p>
                    <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">You will be able to see your consumption on 
                        <a href=${APPLOGO.stackerUrl}dashboard style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}dashboard</a> at all times. From here, you can also find the content you have previously purchased.
                     </p>
                     <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Once the complementary tokens are well spend, you will be asked to enter a payment card to continue purchasing, access to content.</p>
                    <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">You can read terms and conditions at 
                        <a href=${APPLOGO.stackerUrl}terms style="text-decoration:none; color: #333333;" target="_Blank">
                        ${APPLOGO.stackerUrl}terms </a>  and the privacy notice at 
                        <a href=${APPLOGO.stackerUrl}privacy style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}privacy</a>
                     </p>
                     <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">If you have any questions, please contact our customer service on <a href="mailto:stacker@nets.eu" style="text-decoration:none; color: #333333;" target="_Blank">stacker@nets.eu</a>
                     </p>
                     <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Welcome, we hope you will enjoy Stacker!
                     </p>`
        return accReg
    },

    //Purchased article
    Subject_Content_Access,
    heading_Content_Access,
    content_Content_Access: (aticleName) => {
        const contentAccess = ` <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">Thank you for purchasing: "${aticleName}" </p>
                       <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">You will be able to find the content, you have purchased here: <a href=${APPLOGO.stackerUrl}dashboard style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}dashboard</a> </p>
                     <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">If you have any questions, please contact our customer service on <a href="mailto:stacker@nets.eu" style="text-decoration:none; color: #333333;" target="_Blank">stacker@nets.eu</a>
                     </p>`
        return contentAccess
    },

    // PIN Code Changed
    Subject_PIN_Code_Changed,
    heading_PIN_Code_Changed,
    content_PIN_Code_Changed,


    //Montly transaction
    Subject_Montly_transaction,
    heading_Montly_transaction,

    content_Montly_transaction: (amount) => {
        const monthlyTx = `<p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">We are sending you an e-mail to remind you about your recent payment on Stacker for September 2018. Today we have made a billing of ${amount} DKK on your registered payment card. </p>
                    <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">You can see your list of transactions on
                        <a href=${APPLOGO.stackerUrl} style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}</a> where you can also access the content that you have bought and have access to.
                    </p>
                    <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">If you have any questions, you can contact our customer service on support@stacker.cloud
                    </p>`
        return monthlyTx
    },

    //Account Locked 
    Subject_Account_Locked,
    heading_Account_Locked,
    Content_Account_Locked,

    //Reset PIN Code 

    Subject_Reset_PIN_Code,
    heading_Reset_PIN_Code,
    content_Reset_PIN_Code: (pincode) => {
        const resetPinCode = `<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">You have requested to reset your Stacker PIN Code.</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

Please enter the following Security Code in your Stacker Dashboard:</p>

<h3 style=" opacity: 0.8;

color: #333333;

font-size: 25px;

font-weight: 500;

line-height: 22px;

padding-top: 10px;

text-align:center;">${pincode}</h3>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

Afterward you will be prompted to enter a 4-digit PIN Code and repeat the PIN code.</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

In case you did not request a reset of your PIN Code, please contact <a href="stacker@nets.eu" style="text-decoration:none; color: #333333;" target="_Blank">stacker@nets.eu</a>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

If you have any questions, please contact our customer service on <a href="stacker@nets.eu" style="text-decoration:none; color: #333333;" target="_Blank">stacker@nets.eu</a>

</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">Thank you for using Stacker!

</p>`;
        return resetPinCode;
    },

//Postpaid user registration
Subject_Payment_CardRegistration,
heading_Payment_CardRegistration,
content_Payment_CardRegistration: (date) => {
    const contentPaymentCardRegistration = `<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">You have registered a payment card with <a href="https://stacker.nets.eupayment" style="text-decoration:none; color: #333333;" target="_Blank">https://stacker.nets.eupayment</a> at ${date}. 
This payment card will be used for your future payments of content purchased at the Stacker service.</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

You approve each purchase using your PIN Code. A charge on your payment card will not be made every time you purchase access to specific content. 
The payment card charge will be made on a monthly basis. If you reach an agreed maximum consumption before
the month has ended,the outstanding amount will be reserved on your payment card and charged at the end of the month together with additional purchases.

</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">You will be able to see your consumptionon <a href=${APPLOGO.stackerUrl}dashboard style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}dashboard</a> at all times. From here,
you can also find the content, you have previously have purchased access to. 
Please note that the text on your bank statement will be “betalttil Stacker” (paid to Stacker), but it will not specify the payee’s name.

</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

Once a transfer of your purchases has been initiated, you cannot revoke or cancel the transaction. 
You should be aware that there may be situations where you do not have a right of cancellation. 
This will depend on your agreement with the merchant you are doing business with.

</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

You can read terms and conditions at <a href=${APPLOGO.stackerUrl}terms style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}terms</a> and the privacy notice at <a href=${APPLOGO.stackerUrl}privacy"
style="text-decoration:none; color: #333333;" target="_Blank">${APPLOGO.stackerUrl}privacy</a>

</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

If you have any questions, please contact our customer service on <a href="stacker@nets.eu" style="text-decoration:none; color: #333333;" target="_Blank">stacker@nets.eu</a>

</p>

<p style=" opacity: 0.8;

color: #333333;

font-size: 16px;

font-weight: 300;

line-height: 22px;

padding-top: 10px;">

Thank you for using Stacker!

</p>`
return contentPaymentCardRegistration;
}

};

