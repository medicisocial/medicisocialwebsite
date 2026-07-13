import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Case studies of our Houston marketing campaigns. See how we drive traffic, revenue, and followers for local brands. View our portfolio!',
  alternates: {
    canonical: '/work',
  },
};

export default function Work() {
  return <WorkClient />;
}
