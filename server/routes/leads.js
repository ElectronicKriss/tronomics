import express from 'express';
import { body, validationResult } from 'express-validator';
import { createLead, getLeads } from '../controllers/leadController.js';

const router = express.Router();

const validateLead = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('serviceNeeded').trim().notEmpty().withMessage('Service needed is required'),
  body('budgetRange').trim().notEmpty().withMessage('Budget range is required'),
  body('timeline').trim().notEmpty().withMessage('Timeline is required'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/', validateLead, handleValidationErrors, createLead);
router.get('/', getLeads);

export default router;
