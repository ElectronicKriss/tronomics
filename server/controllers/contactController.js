// In-memory storage for demo
import { sendEmail, sendNotificationToAdmin } from '../config/mailService.js';

let contacts = [];
let contactIdCounter = 1;

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const newContact = {
      id: contactIdCounter++,
      name,
      email,
      phone,
      subject,
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
      respondedAt: null
    };

    contacts.push(newContact);

    Promise.allSettled([
      sendEmail({
        to: email,
        subject: 'Contact message received',
        text: `Hi ${name},\n\nThanks for reaching out to Tronomics. We have received your message and will respond as soon as possible.\n\nSubject: ${subject || 'N/A'}\nMessage: ${message || 'N/A'}\n\nBest regards,\nTronomics Team`,
        html: `<p>Hi ${name},</p><p>Thanks for reaching out to Tronomics. We have received your message and will respond as soon as possible.</p><p><strong>Subject:</strong> ${subject || 'N/A'}<br/><strong>Message:</strong> ${message || 'N/A'}</p><p>Best regards,<br/>Tronomics Team</p>`
      }),
      sendNotificationToAdmin(
        'New contact message received',
        `A new contact message has been submitted.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\nMessage: ${message || 'N/A'}`
      )
    ]).catch(error => console.error('Notification error:', error));

    res.status(201).json({
      success: true,
      message: 'Contact message received successfully',
      contact: newContact
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating contact message',
      error: error.message
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    res.json({
      success: true,
      contacts: contacts,
      total: contacts.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving contacts',
      error: error.message
    });
  }
};
