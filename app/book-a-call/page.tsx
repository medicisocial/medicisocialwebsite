import type { Metadata } from 'next';
import BookACallClient from './BookACallClient';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Schedule a consultation with our Houston agency. Let\'s spend 15 minutes discussing your social media and SEO goals. Book your call now!',
};

export default function BookACall() {
  return <BookACallClient />;
}
