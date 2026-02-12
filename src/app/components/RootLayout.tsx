import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Analytics } from './Analytics';

export function RootLayout() {
  return (
    <>
      <Analytics />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}