/* global process */

import { app } from '@azure/functions';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.http('contact', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            // Parse the request body
            const body = await request.json();
            const { name, email, message } = body;

            // Basic validation
            if (!name || !email || !message) {
                return {
                    status: 400,
                    body: JSON.stringify({ 
                        success: false, 
                        error: 'Name, email, and message are required' 
                    })
                };
            }

            // Email content
            const msg = {
                to: process.env.TO_EMAIL, // Your email address
                from: process.env.FROM_EMAIL, // Verified sender in SendGrid
                subject: `New Contact Form Submission from ${name}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Message: ${message}
                `,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `
            };

            // Send email
            await sgMail.send(msg);

            return {
                status: 200,
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Message sent successfully' 
                })
            };
        } catch (error) {
            context.log('Error:', error);
            return {
                status: 500,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Failed to send message',
                    details: error.message 
                })
            };
        }
    }
});
