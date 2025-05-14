# Remind Me Later

A RESTful API service for setting up reminders with custom messages. This application allows users to create and manage reminders with different notification types (SMS or EMAIL).

## Features

- Create reminders with custom messages
- Schedule reminders with specific date and time
- Choose notification type (SMS or EMAIL)
- View all reminders
- Input validation for dates and times
- MongoDB integration for data persistence

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (running locally or a remote connection)
- npm (Node Package Manager)
- Git

## Getting Started

### Setting up MongoDB
1. Make sure MongoDB is installed and running on your system
2. The default connection URL will be: `mongodb://localhost:27017/remind-me-later`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vikalp1O1/remind-me-later.git
cd remind-me-later
```

2. Install dependencies:
```bash
npm install
```

3. Environment Setup:
   - Copy `.env.example` to `.env` (or create a new `.env` file)
   - Add the following configuration:
```
MONGODB_URI=mongodb://localhost:27017/remind-me-later
PORT=3000
```

4. Start the server:
```bash
npm start
```

You should see:
```
Server is running on port 3000
Connected to MongoDB
```

For development with auto-reload:
```bash
npm run dev
```

## Development

### Git Setup
1. The project includes a `.gitignore` file to exclude:
   - `node_modules/`
   - Environment files (`.env`)
   - Log files
   - IDE specific files
   - System files

2. Initial Git setup:
```bash
git init
git add .
git commit -m "Initial commit"
```

3. To contribute:
   - Create a new branch for your feature
   - Make your changes
   - Submit a pull request

## API Endpoints

### Get All Reminders
- **URL**: `/api/reminders`
- **Method**: `GET`
- **Success Response**:
  - **Code**: 200
  - **Content**: Array of reminders
```json
[
  {
    "date": "2024-05-15",
    "time": "14:30",
    "message": "Example reminder",
    "notificationType": "EMAIL",
    "isProcessed": false,
    "createdAt": "2024-05-14T10:00:00.000Z",
    "updatedAt": "2024-05-14T10:00:00.000Z"
  }
]
```

### Create New Reminder
- **URL**: `/api/reminders`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Data Params**:
```json
{
  "date": "2024-05-15",
  "time": "14:30",
  "message": "Your reminder message",
  "notificationType": "EMAIL"
}
```
- **Success Response**:
  - **Code**: 201
  - **Content**: Created reminder object

## Data Validation

- Date must be in YYYY-MM-DD format
- Time must be in HH:mm format (24-hour)
- Message is required
- NotificationType must be either "SMS" or "EMAIL"

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)
- cors (for Cross-Origin Resource Sharing)

## Project Structure

```
remind-me-later/
├── src/
│   ├── models/
│   │   └── Reminder.js
│   ├── routes/
│   │   └── reminderRoutes.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Troubleshooting

1. If MongoDB connection fails:
   - Ensure MongoDB service is running
   - Verify MongoDB connection URL in `.env`
   - Check MongoDB port availability (default: 27017)

2. If server won't start:
   - Check if port 3000 is available
   - Ensure all dependencies are installed (`npm install`)
   - Verify `.env` file configuration
