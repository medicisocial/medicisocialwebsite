import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Medici Social | Social Media & Web Design Agency in Fulshear',
  description: 'Social media and web design agency in Fulshear, TX. We turn attention into revenue with premium content and websites. Book a call today!',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}