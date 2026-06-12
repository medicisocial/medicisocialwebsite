import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Medici Social. Learn how we handle and protect B2B business contact information and tracking cookies.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
