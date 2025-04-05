# Teamify - Virtual Office Collaboration Platform

Teamify is a modern team collaboration platform designed to enhance productivity in virtual office environments. The platform provides a suite of tools to help teams collaborate effectively regardless of their physical location.

![Teamify Screenshot](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%201-z9ALzexVQtHM9zVJaYKTcqmQPmrCcR.png)

## Features

- **Virtual Office Environment**: Dedicated workspace for remote teams
- **User Authentication**: Secure sign-up, sign-in, and authentication system
- **Company Setup**: Easy onboarding process for new companies
- **Dashboard**: Centralized overview of team activities and projects
- **Payment Integration**: Subscription management with secure payment processing
- **Responsive Design**: Fully optimized for all devices from mobile to desktop

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Custom auth context for state management
- **Routing**: Next.js App Router
- **Payment Processing**: Integrated payment form with validation

## Installation

1. Clone the repository:
```bash
git clone https://github.com/haile-pro/teamify.git
cd teamify
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains all page components and routing
- `components/`: Reusable UI components
- `context/`: React context providers for state management
- `hooks/`: Custom React hooks
- `lib/`: Utility functions and helpers
- `public/`: Static assets
- `styles/`: Global CSS styles

## Pages

- **Home**: Welcome page with sign-up option
- **Sign Up**: New user registration
- **Sign In**: Existing user authentication
- **Dashboard**: Main user interface after authentication
- **Plans**: Subscription options
- **Payment**: Secure payment processing

## Customization

You can customize the Teamify platform by:

1. Modifying the theme colors in `tailwind.config.ts`
2. Updating company information in the setup form
3. Adding additional payment options in the payment form
4. Extending the dashboard functionality

## Deployment

This project is ready to be deployed on Vercel or any other hosting platform that supports Next.js applications.

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## License

[MIT](LICENSE)

## Contact

For any questions or support, please contact [Haileab Shimels](https://github.com/haile-pro).
Based in Ethiopia. 
