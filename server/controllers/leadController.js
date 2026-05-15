// In-memory storage for demo
import { sendEmail, sendLeadNotification } from '../config/mailService.js';

let leads = [];
let leadIdCounter = 1;

export const createLead = async (req, res) => {
  try {
    const { name, email, company, serviceNeeded, budgetRange, timeline } = req.body;

    const newLead = {
      id: leadIdCounter++,
      name,
      email,
      company,
      serviceNeeded,
      budgetRange,
      timeline,
      status: 'new',
      score: calculateLeadScore(budgetRange, serviceNeeded),
      createdAt: new Date().toISOString(),
      convertedAt: null
    };

    leads.push(newLead);

    Promise.allSettled([
      sendLeadNotification(newLead),
      sendEmail({
        to: email,
        subject: 'Thanks for your interest in Tronomics',
        text: `Hi ${name},\n\nThank you for submitting your interest to Tronomics. Our team will review your request and reach out shortly.\n\nDetails:\n- Company: ${company || 'N/A'}\n- Service needed: ${serviceNeeded || 'N/A'}\n- Budget range: ${budgetRange || 'N/A'}\n- Timeline: ${timeline || 'N/A'}\n\nBest regards,\nTronomics Team`,
        html: `<p>Hi ${name},</p><p>Thank you for submitting your interest to Tronomics. Our team will review your request and reach out shortly.</p><p><strong>Details:</strong><br/>Company: ${company || 'N/A'}<br/>Service needed: ${serviceNeeded || 'N/A'}<br/>Budget range: ${budgetRange || 'N/A'}<br/>Timeline: ${timeline || 'N/A'}</p><p>Best regards,<br/>Tronomics Team</p>`
      })
    ]).catch(error => console.error('Notification error:', error));

    res.status(201).json({
      success: true,
      message: 'Lead captured successfully',
      lead: newLead
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating lead',
      error: error.message
    });
  }
};

export const getLeads = async (req, res) => {
  try {
    const sorted = leads.sort((a, b) => b.score - a.score);
    res.json({
      success: true,
      leads: sorted,
      total: leads.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving leads',
      error: error.message
    });
  }
};

// Helper function to score leads
const calculateLeadScore = (budget, service) => {
  let score = 0;

  // Budget scoring
  if (budget === 'above-500k') score += 100;
  else if (budget === '200k-500k') score += 80;
  else if (budget === '50k-200k') score += 60;
  else if (budget === '10k-50k') score += 40;
  else score += 20;

  // Service scoring
  if (service === 'all-services') score += 50;
  else if (service === 'multiple') score += 35;
  else score += 20;

  return score;
};
