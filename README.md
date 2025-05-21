# Web Data Portfolio

A modern web portfolio with a React frontend and Node.js backend.

## Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Dikeola/web_data_portfolio.git
   cd web_data_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your configuration.

4. Set up the database:
   - Create a PostgreSQL database
   - Update the `DATABASE_URL` in your `.env` file
   - Run migrations:
     ```bash
     npm run db:push
     ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Start the backend server (in a separate terminal):
   ```bash
   npm run server:dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

1. Build the application:
   ```bash
   npm run build
   npm run server:build
   ```

2. Start the production server:
   ```bash
   npm run server:start
   ```

## Deployment to Render

1. Push your code to GitHub.
2. Sign up/Log in to [Render](https://render.com/).
3. Click "New +" and select "Blueprint".
4. Connect your GitHub repository.
5. Select the repository and click "Next".
6. Render will detect the `render.yaml` file and set up the services.
7. Add the required environment variables in the Render dashboard.
8. Click "Create Blueprint" to deploy.

## Environment Variables

See `.env.example` for all required environment variables.
