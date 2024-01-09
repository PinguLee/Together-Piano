import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import SidebarComponent from '@/app/components/Sidebar/SidebarComponent';

export const metadata: Metadata = {
  title: 'Together Piano',
  description: 'Together Piano',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex'>
          <SidebarComponent />
          {children}
        </div>
      </body>
    </html>
  );
}
