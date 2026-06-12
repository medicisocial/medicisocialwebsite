import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet our Houston marketing agency team. We are a collective of strategists and creators driving digital growth. Read our story online!',
};

export default function About() {
  return <AboutClient />;
}
