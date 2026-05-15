// In-memory storage for demo (replace with database in production)
import { sendEmail, sendNotificationToAdmin } from '../config/mailService.js';

let bookings = [];
let bookingIdCounter = 1;

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      assessmentType,
      date,
      time,
      timezone,
      message
    } = req.body;

    const newBooking = {
      id: bookingIdCounter++,
      name,
      email,
      phone,
      company,
      serviceType,
      assessmentType,
      date,
      time,
      timezone,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
      confirmedAt: null
    };

    bookings.push(newBooking);

    Promise.allSettled([
      sendEmail({
        to: email,
        subject: 'Booking request received',
        text: `Hi ${name},\n\nThank you for requesting a booking with Tronomics. We have received your details and will follow up shortly.\n\nBooking summary:\n- Service: ${serviceType || 'N/A'}\n- Assessment: ${assessmentType || 'N/A'}\n- Date: ${date || 'N/A'}\n- Time: ${time || 'N/A'}\n\nBest regards,\nTronomics Team`,
        html: `<p>Hi ${name},</p><p>Thank you for requesting a booking with Tronomics. We have received your details and will follow up shortly.</p><p><strong>Booking summary:</strong><br/>Service: ${serviceType || 'N/A'}<br/>Assessment: ${assessmentType || 'N/A'}<br/>Date: ${date || 'N/A'}<br/>Time: ${time || 'N/A'}</p><p>Best regards,<br/>Tronomics Team</p>`
      }),
      sendNotificationToAdmin(
        'New booking request received',
        `A new booking has been created.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${company || 'N/A'}\nService: ${serviceType || 'N/A'}\nAssessment: ${assessmentType || 'N/A'}\nDate: ${date || 'N/A'}\nTime: ${time || 'N/A'}\nTimezone: ${timezone || 'N/A'}\nMessage: ${message || 'N/A'}`
      )
    ]).catch(error => console.error('Notification error:', error));

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: newBooking
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    // Optional: Add authentication to restrict access
    res.json({
      success: true,
      bookings: bookings,
      total: bookings.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving bookings',
      error: error.message
    });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, confirmedAt } = req.body;

    const booking = bookings.find(b => b.id === parseInt(id));

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    if (status) booking.status = status;
    if (confirmedAt) booking.confirmedAt = confirmedAt;
    booking.updatedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'Booking updated successfully',
      booking: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating booking',
      error: error.message
    });
  }
};
