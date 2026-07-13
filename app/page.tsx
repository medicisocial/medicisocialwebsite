import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Medici Social | Digital Marketing Agency in Houston',
  description: 'Digital marketing agency in Houston, TX. We turn attention into revenue with premium content and websites. Book a call today!',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <HomeClient />;
}