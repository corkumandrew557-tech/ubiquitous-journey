import type { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Hydrogen App with Vercel Analytics' },
    { name: 'description', content: 'Welcome to Hydrogen with Vercel Web Analytics!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8', padding: '2rem' }}>
      <h1>Welcome to Hydrogen with Vercel Analytics</h1>
      <p>
        This project is set up with Vercel Web Analytics to track visitors and page views.
      </p>
      <ul>
        <li>
          <strong>Framework:</strong> Hydrogen (Shopify's React-based framework built on Remix)
        </li>
        <li>
          <strong>Analytics:</strong> Vercel Web Analytics (@vercel/analytics)
        </li>
        <li>
          <strong>Route Support:</strong> Enabled automatically through Remix integration
        </li>
      </ul>
      <h2>Next Steps</h2>
      <ol>
        <li>Deploy your app to Vercel using <code>vercel deploy</code></li>
        <li>Enable Web Analytics in your Vercel dashboard</li>
        <li>View your analytics data in the Analytics tab</li>
      </ol>
    </div>
  );
}
