const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.APP_PASS
    }
});

const sendEmailController = async (req, res) => {
    try {
        const { name, email, message, subject } = req.body;
        // validation
        if (!name || !email || !message || !subject) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all field',
            })
        }

        const info = await transporter.sendMail({
            from: {
                name: name,
                address: process.env.USER_GMAIL
            }, // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: message, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);

        return res.status(200).send({
            success: true,
            message: 'Email Send Successfully',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Send Email API Error',
            error
        })
    }
}

module.exports = { sendEmailController }