# CyberAudit - AI Security Scanner SaaS

A modern, full-featured SaaS application for AI-powered security scanning with NIST CSF compliance scoring and automated vulnerability detection.

## Features

- **AI-Powered Vulnerability Detection**: Advanced machine learning models for zero-day and known vulnerability detection
- **NIST CSF Compliance Scoring**: Automated compliance assessment across the five NIST framework functions
- **Risk Prioritization**: Intelligent severity scoring and remediation recommendations
- **Continuous Monitoring**: Real-time security posture tracking with instant alerts
- **Compliance Reports**: Generate SOC2, ISO 27001, and HIPAA compliance reports
- **User Authentication**: Secure Firebase-based authentication
- **Responsive Design**: Mobile-first UI with dark mode support
- **Interactive Dashboards**: Real-time security metrics with charts and visualizations

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Backend/Auth**: Firebase 10
- **Charts**: Recharts 2
- **Icons**: FontAwesome 6

## Project Structure

```
src/
├── components/          # React components
│   ├── LandingPage.tsx
│   ├── PricingPage.tsx
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   ├── Dashboard.tsx
│   ├── Billing.tsx
│   └── Navigation.tsx
├── contexts/           # React contexts
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── types/             # TypeScript type definitions
│   └── index.ts
├── firebase.ts        # Firebase configuration
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Firebase project with authentication enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cyberaudit/webapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Firebase credentials in `.env.local`:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=cyberaudit-saas.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cyberaudit-saas
VITE_FIREBASE_STORAGE_BUCKET=cyberaudit-saas.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Pages & Features

### Landing Page
- Hero section highlighting AI security scanning
- Feature showcase (Vulnerability Detection, NIST Compliance, Risk Scoring, Continuous Monitoring)
- How-it-works section with 4-step process
- Compliance frameworks showcase
- Call-to-action sections

### Pricing Page
- Three-tier pricing model (Free, Pro, Enterprise)
- Detailed feature comparison table
- FAQ section
- Flexible payment options

### Authentication
- **Sign In**: Email/password authentication with demo account option
- **Sign Up**: User registration with email verification

### Dashboard
- Security score visualization (0-100 donut chart)
- Vulnerability counts by severity (Critical/High/Medium/Low)
- NIST CSF radar chart showing scores for all 5 functions
- Recent scans table with findings and status
- Quick scan button with loading state
- Usage statistics and plan information

### Billing
- Current plan display with renewal information
- Scan usage tracking with progress bar
- Payment method management
- Billing history with invoice download
- Account information and settings

## Color Scheme

Primary: Red (#dc2626) to Orange (#f59e0b) gradient
- Used for: Primary buttons, links, key metrics
- Dark mode adjustments for better contrast

Severity Colors:
- Critical: Red (#dc2626)
- High: Orange (#f59e0b)
- Medium: Yellow (#f97316)
- Low: Cyan (#06b6d4)

## Authentication

The app uses Firebase Authentication with:
- Email/password authentication
- Session persistence
- Protected routes for authenticated users
- Demo account support for testing

## Theming

- **Light Mode**: Clean white background with gray accents
- **Dark Mode**: Dark gray background with adjusted colors for readability
- **System**: Automatic detection based on OS preferences
- **Persistent**: Theme preference saved to localStorage

## Type Safety

Full TypeScript support with custom type definitions:
- User interface for authentication
- PricingTier for pricing pages
- DashboardStats for metrics
- Vulnerability and Scan types
- NIST function definitions

## Performance

- Code splitting with Vite
- Optimized bundle with Terser
- Image optimization
- CSS minification with Tailwind
- Responsive lazy loading

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure TypeScript passes: `npm run lint`
4. Submit a pull request

## License

MIT License - see LICENSE file for details
