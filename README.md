# DHI Platform

## Overview
DHI Platform is an interactive web application built with React, designed to provide a user-friendly interface for various audio and video processing tasks. It offers a grid of clickable topics, each representing a different functionality related to media processing.

## Features
- Interactive topic grid
- Video upload functionality
- Audio extraction
- Audio splitting
- Speech recognition
- Text translation
- Text-to-speech conversion
- Audio reconstruction
- Final video output
- And more...

## Prerequisites
- Node.js (v16.14.0 or later)
- npm (v8.3.1 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/dhi-platform.git
   cd dhi-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add any necessary environment variables.

## Running the Application

To start the development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Building for Production

To create a production build:

```
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

```
dhi_platform/
├── public/
│   ├── index.html
│   └── images/
│       └── (icon images)
├── src/
│   ├── components/
│   │   ├── TopicGrid.js
│   │   └── TopicCard.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Contributing

We welcome contributions to the DHI Platform!
