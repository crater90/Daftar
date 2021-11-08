// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);


export default (req, res) => {
  const value = JSON.parse(req.body);
  const message = `
   Name : ${value.name}\r\n
   Email : ${value.email}\r\n
   Phone : ${value.phone}\r\n
   Location : ${value.location}\r\n
   Message : ${value.message}
  `;
  
  const data = {
    to: 'home@smartdaftar.com',
    from: 'home@smartdaftar.com',
    subject: `${value.name.toUpperCase()} sent you a message`,
    message: 'message',
    html: message.replace(/\r\n/g, '<br>')
  };
  mail.send(data);
  res.status(200).json({status : "ok"});
}
