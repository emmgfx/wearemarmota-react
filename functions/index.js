const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const rp = require('request-promise');
const validator = require('validator');
const cors = require('cors')({origin: true});
const Recaptcha = require('recaptcha-verify');

exports.contactForm = functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
        
        checkReCAPTCHA(request.body).then(() => {

            sendEmail(request.body).then(() => { 
                response.status(200).send({success: true});
            }).catch((reject) => {
                response.status(500).send({success: false, error: reject.message});
            });

        }).catch((reject) => {
            
            response.status(500).send({success: false, error: reject.message});
            
        });

    });
});

function checkReCAPTCHA(body){
    return new Promise((success, reject) => {

        let recaptcha = new Recaptcha({
            secret: functions.config().recaptcha.secret_key,
            verbose: true
        });

        if(!body.recaptcha_response){ reject(new Error("No recaptcha_response")); }

        recaptcha.checkResponse(body.recaptcha_response, (error, response) => {
            if(error){
                reject(new Error(error.message));
            }
            if(response.success){
                success();
            }else{
                reject(new Error("Invalid reCAPTCHA"));
            }
        });

    });
}

function sendEmail(body) {
    
    return new Promise((success, reject) => {
        
        if(!body.name){ reject(new Error("No name")); }
        if(!body.email){ reject(new Error("No email")); }
        if(!body.message){ reject(new Error("No message")); }
        
        if(body.name.length < 2 || body.name.length > 20){
            reject(new Error("Invalid name"));
        }
        
        if(!validator.isEmail(body.email)){
            reject(new Error("Invalid email"));
        }
        
        if(body.name.message < 2 || body.name.message > 2000){
            reject(new Error("Invalid message"));
        }

        body.name = validator.escape(body.name);
        body.message = validator.escape(body.message);

        let transporter = nodemailer.createTransport({
            host: functions.config().nodemailer.host,
            port: functions.config().nodemailer.port,
            secure: false,
            auth: {
                user: functions.config().nodemailer.from,
                pass: functions.config().nodemailer.password
            },
            tls: {
                // https://github.com/nodemailer/nodemailer/issues/342
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: functions.config().nodemailer.from,
            to: functions.config().nodemailer.to,
            replyTo: body.email,
            subject: 'Mensaje de ' + body.name + ' desde la web',
            text: body.message
        };
        
        return transporter.sendMail(mailOptions)
            .then(() => success())
            .catch((error) => reject(error));
    });
}
