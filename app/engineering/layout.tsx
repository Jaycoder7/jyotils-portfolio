import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering | Jyotil Agrawal',
  description: 'Software, robotics, research, and engineering work by Jyotil Agrawal.',
};

export default function EngineeringLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
