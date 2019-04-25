var nodemailer =  require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'mail.superclient.com.br',
    service: 'mail.superclient.com.br',
    port: 465,
    secure: true,
    auth:{
        user: 'lucas@superclient.com.br',
        pass: 'Ptpnb2015$!'
    }
});

console.log('Email Configurado');

var mailOptions = {
    from: 'lucas@superclient.com.br',
    to: 'lucas@superclient.com.br',
    subject: 'teste',
    text: 'very easy',
};

console.log('Destinatário configurado');

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});