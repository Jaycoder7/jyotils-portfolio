import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography | Jyotil Agrawal',
  description: 'A visual archive of photographs by Jyotil Agrawal.',
};

export default function PhotographyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
