
import * as nodemailer from 'nodemailer';


export const sendEmaillink = async (email: string, linkk: string) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'apikey', // generated ethereal user
      pass: process.env.SENDGRID_API_KEY, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Brain Consulting 👻" <brainconsulting21@gmail.com>', // sender address
    to: email, // list of receivers
    subject: 'Bienvenue sur Brain Consulting  ✔', // Subject line
    text: 'Nous sommes très heureux de vous avoir parmi nous', // plain text body
    html: `<b>
    Félicitations pour votre nouveau compte.
    <br>
   <h1> Nous sommes très heureux de vous avoir parmi nous ! </h1>
  
  <h2> Bienvenue chez Brain Consulting en tant que membre professionnel,
  <br>
    Activez votre compte maintenant 

    <br> et profitez de nos nombreux services en cliquant sur le lien ci-dessous.</h2>
      
     </b> <a href="${linkk}"><h3>Cliquez !<h3></a>
     <br><h3>Des questions?

    <br> Visitez notre centre d'assistance

     <br>Email: Brainconsulting21@gmail.com

     <br>Adresse : Rue Lac Leman 1053 Berges du lac

     <br>Telephone: (+216)52884352 (+33)0699942007 </h3>` // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};



