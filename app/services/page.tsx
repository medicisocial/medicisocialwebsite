import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Social media management and SEO services in Houston. We build custom websites, create video content, and integrate AI. View our services!',
};

export default function Services() {
  return <ServicesClient />;
}
