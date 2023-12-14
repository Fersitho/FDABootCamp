const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ivancodespace@gmail.com",
    pass: "leaz kksn lbfn qlpl",
  },
});

const sendEmail = async (dataEmail) => {
  try {
    const mailOptions = {
      from: "picoletoe@gmail.com",
      to: dataEmail.to,
      subject: dataEmail.subject,
      html: dataEmail.html,
    };
    await transporter.sendMail(mailOptions);
    console.log("Se ha enviado correctamente");
  } catch (error) {
    console.log("No se ha enviado el correo", error);
  }
};

module.exports = { sendEmail };



// Cread un usuario y que llegue un email a ese usuario indicando que se ha registrado y dandole las gracias en el cuerpo del mensaje;