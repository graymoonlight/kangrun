import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, company, project, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: 'Новое сообщение с сайта',
        text: `
            Имя: ${name}
            Компания: ${company}
            Проект: ${project}
            Почтовый ящик: ${email}
            Сообщение: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Сообщение отправлено!' }), { status: 200 });
    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
        return new Response(JSON.stringify({ message: 'Ошибка отправки сообщения.' }), { status: 500 });
    }
}