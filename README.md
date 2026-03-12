# Hydrogen App with Vercel Web Analytics

This is a Hydrogen (Shopify's React-based framework) application with Vercel Web Analytics integrated.

## Features

- ✅ Vercel Web Analytics integration
- ✅ Built on Remix and Hydrogen
- ✅ TypeScript support
- ✅ Automatic route tracking
- ✅ Production-ready setup

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- A Vercel account ([sign up for free](https://vercel.com/signup))
- The Vercel CLI (install with `npm i -g vercel`)

### Installation

Install dependencies using your preferred package manager:

```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install

# Using bun
bun install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your app.

## Vercel Web Analytics Setup

This project comes with Vercel Web Analytics pre-configured. To start tracking:

### 1. Enable Web Analytics in Vercel

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** in the dialog

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

### 2. Deploy to Vercel

Deploy your app using the Vercel CLI:

```bash
vercel deploy
```

Or connect your Git repository in the Vercel dashboard for automatic deployments.

### 3. Verify Analytics is Working

Once deployed, visit your site and check:
- Open your browser's Network tab
- Look for a Fetch/XHR request to `/_vercel/insights/view`
- If you see this request, analytics is working correctly!

### 4. View Your Data

After deployment and some visitors:
1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Explore your visitor data and page views

## Implementation Details

### Analytics Integration

The `@vercel/analytics` package is integrated in `app/root.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <html lang="en">
      <body>
        <Outlet />
        <Analytics />
      </body>
    </html>
  );
}
```

### Features Included

- **Route Support**: Automatically tracks page views and route changes
- **Performance Optimized**: Minimal impact on page load times
- **Privacy Compliant**: Follows GDPR and other privacy regulations
- **Custom Events**: Ready for custom event tracking (Pro/Enterprise plans)

## Project Structure

```
.
├── app/
│   ├── routes/
│   │   └── _index.tsx      # Home page
│   └── root.tsx             # Root component with Analytics
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Learn More

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Hydrogen Documentation](https://shopify.dev/docs/custom-storefronts/hydrogen)
- [Remix Documentation](https://remix.run/docs)

## Next Steps

- [Add custom events](https://vercel.com/docs/analytics/custom-events) to track user interactions
- [Learn about filtering data](https://vercel.com/docs/analytics/filtering)
- [Explore privacy and compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Check pricing and limits](https://vercel.com/docs/analytics/limits-and-pricing)

## License

See [LICENSE](LICENSE) file for details.
