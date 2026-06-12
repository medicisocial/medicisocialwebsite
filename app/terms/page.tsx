import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using the Medici Social website and booking digital marketing strategy consultations.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
