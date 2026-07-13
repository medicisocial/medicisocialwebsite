import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact our top-rated Houston marketing agency. Let us help you scale your brand with social, content, and web design. Send an inquiry!',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return <ContactClient />;
}
