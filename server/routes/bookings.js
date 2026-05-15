import express from 'express';
import { body, validationResult } from 'express-validator';
import { createBooking, getBookings, updateBooking } from '../controllers/bookingController.js';

const router = express.Router();

// Validation middleware
const validateBooking = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('company').trim().notEmpty().withMessage('Company name is required'),
  body('serviceType').isIn(['risk-assessment', 'talent-solutions', 'it-services']).withMessage('Invalid service type'),
  body('assessmentType').trim().notEmpty().withMessage('Assessment type is required'),
  body('date').isISO8601().withMessage('Valid date is required'),
  body('time').trim().notEmpty().withMessage('Time is required'),
];

// Error handling middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Routes
router.post('/', validateBooking, handleValidationErrors, createBooking);
router.get('/', getBookings);
router.patch('/:id', updateBooking);

export default router;
