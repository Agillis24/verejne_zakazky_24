import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <div className="text-center">
        <h1
          className="mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            color: '#94a3b8',
          }}
        >
          404
        </h1>
        <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Stránka nenalezena
        </h2>
        <p className="text-slate-600 mb-8">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Home size={20} />
          Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  );
}
