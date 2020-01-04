const { APPLOGO  } = require("../../config/environment");

console.log(APPLOGO);

//constants for email template contents
module.exports = {
      emailTemplate(emailheading, emailContent, username)  {
            console.log(emailheading);
            console.log(APPLOGO.logo);
            console.log(APPLOGO.footerLogo);
            const template = `
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Email template</title>
   </head>
   <body style="margin: 0 auto; padding:40px 0; width: 100%; background-color: #EDEDED;">
      <table width="600px" align="center" style="margin: 0 auto;" cellpadding="0" cellspacing="0">
         <tbody>
            <tr class="">
               <td>
                  <div style="padding-bottom:22px;">                 
                     <p>
                        <img style="height: 50px;
                        padding-bottom: 10px;
                           width: 139.83px;
                           float: right;" src="${APPLOGO.logo}" alt="stacker Logo" />
                     </p>
                  </div>
               </td>
            </tr>
            <tr style="width: 600px;
               background-color: #FFFFFF;">
               <td>
                  <div style="padding:24px;">
                     <h3 style="color: #000000;
                        font-size: 32px;
                        font-weight: 300;
                        line-height: 41px;
                        margin-bottom: 0;">${emailheading}</h3>
                     <hr style="width:60px; float:left; background-color:#FF1E5E; border:transparent; height:5px;" />
                     <br/>
                     <p style="opacity: 0.8;
                        color: #333333;
                        font-size: 18px;
                        font-weight: 300;
                        line-height: 19px;
                        padding-top: 12px;">Hello ${username},</p>
                    ${emailContent}
                     <p style=" opacity: 0.8;
                        color: #333333;
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 22px;
                        padding-top: 10px;">
                        Best regards,
                        <br/> The Stacker team
                     </p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
      <table width="600px" align="center" style="margin: 0 auto; margin-top:10px; background-color: #FFFFFF;" cellpadding="0" cellspacing="0">
         <tbody>
            <tr>
               <td>
                  <div style=" width: 314px;
                     margin: 0 auto; padding:24px;">
                     <p style="text-align:center">
                        <img style=" height: 37px;
                           width: 103px;
                           margin: 0 auto;" src="${APPLOGO.footerLogo}" alt="stacker Logo" />
                     </p>
                     <p style=" width: 314px;
                        color: #666666;
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 19px;
                        text-align: center;">
                        <a href=${APPLOGO.stackerUrl}terms style="text-decoration:none; color: #333333;" target="_Blank">
                        Terms & conditions</a> | 
                        <a href="${APPLOGO.stackerUrl}privacy" style="text-decoration:none; color: #333333;" target="_Blank">
                        Private policy
                        </a></p>
                     <p style=" width: 314px;
                        color: #666666;
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 19px;
                        text-align: center;">NETS A/S, Lautrupbjerg 10, DK-2750 Ballerup</p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </body>
</html>
</body>
</html>`;
            return template;
      }
};