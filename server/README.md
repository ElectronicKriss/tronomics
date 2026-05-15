# Tronomics Backend Server

A Node.js/Express backend API for the Tronomics website, handling bookings, contacts, and lead management.

## Features

- ✅ Booking management system
- ✅ Contact form handling
- ✅ Lead capture and scoring
- ✅ Input validation
- ✅ CORS support
- ✅ Error handling

## Setup

### Prerequisites
- Node.js 16+
- npm

### Installation

```bash
cd server
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and update with your configuration:

```bash
cp .env.example .env
```

### Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get all bookings
- `PATCH /api/bookings/:id` - Update booking status

### Contacts
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contact submissions

### Leads
- `POST /api/leads` - Capture lead
- `GET /api/leads` - Get all leads (sorted by score)

### Health Check
- `GET /api/health` - Check server status

## Request Examples

### Create Booking
```bash
curl -X POST http://localhost:3001/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+234800000000",
    "company": "Tech Corp",
    "serviceType": "risk-assessment",
    "assessmentType": "Enterprise Risk",
    "date": "2026-05-15",
    "time": "10:00",
    "timezone": "Africa/Lagos",
    "message": "Need urgent assessment"
  }'
```

### Create Contact
```bash
curl -X POST http://localhost:3001/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+234800000001",
    "subject": "Website Inquiry",
    "message": "I would like more information about your services"
  }'
```

### Create Lead
```bash
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@company.com",
    "company": "Big Corp",
    "serviceNeeded": "all-services",
    "budgetRange": "above-500k",
    "timeline": "immediate"
  }'
```

## Database Migration (Future)

Currently uses in-memory storage. To migrate to a database:

1. Install database driver (PostgreSQL recommended):
   ```bash
   npm install pg sequelize
   ```

2. Update models in `models/` directory

3. Update controllers to use database queries

## Email Integration (Future)

To enable email notifications:

1. Configure SMTP in `.env`
2. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
3. Create email service in `services/` directory

## Calendar Integration (Future)

Supported integrations:
- Google Calendar
- Calendly
- Zoom

Configuration in `.env` for each service.

## Project Structure

```
server/
├── server.js           # Express app setup
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── config/             # Configuration files
├── routes/             # API route handlers
├── controllers/        # Business logic
├── models/             # Database models (future)
├── middleware/         # Custom middleware
└── services/           # External service integrations (future)
```

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## CORS Configuration

CORS is enabled for the frontend URL specified in `.env`:

```
FRONTEND_URL=http://localhost:5174
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test with curl or Postman
4. Submit a pull request

## License

ISC
