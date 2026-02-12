import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Klik na logo: vždycky přejde na homepage a posune nahoru (bez 404 a bez potřeby reloadu)
  const goHome = () => {
    // přepni na root hash route
    window.location.hash = '#/';

    // scroll nahoru
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    // Jsme na homepage (v hash routeru je to pořád pathname "/")
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // fallback (kdyby element ještě nebyl v DOMu)
        window.location.hash = `#/?section=${encodeURIComponent(sectionId)}`;
      }
      setIsMobileMenuOpen(false);
      return;
    }

    // Nejsme na homepage (např. /aktuality) -> přejdi na root hash route + předdej sekci parametrem
    window.location.href = `${import.meta.env.BASE_URL}#/?section=${encodeURIComponent(sectionId)}`;
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ místo Linku používáme button -> když jsi už doma, Link nic neudělá; button vždy provede "goHome" */}
          <button
            type="button"
            onClick={goHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Veřejné zakázky 24"
              className="h-12 sm:h-14 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl tracking-tight leading-tight">
                Veřejné zakázky 24
              </span>
              <span className="text-xs sm:text-sm text-slate-600 leading-tight">
                Průvodce veřejnými zakázkami
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Domů
            </button>

            <Link to="/aktuality" className="text-slate-700 hover:text-slate-900 transition-colors">
              Aktuality
            </Link>

            <button
              onClick={() => scrollToSection('videa')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Videa
            </button>

            <button
              onClick={() => scrollToSection('o-projektu')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              O projektu
            </button>

            <button
              onClick={() => scrollToSection('o-nas')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              O nás
            </button>

            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Domů
              </button>

              <Link
                to="/aktuality"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Aktuality
              </Link>

              <button
                onClick={() => scrollToSection('videa')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Videa
              </button>

              <button
                onClick={() => scrollToSection('o-projektu')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                O projektu
              </button>

              <button
                onClick={() => scrollToSection('o-nas')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                O nás
              </button>

              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-left px-4 py-2 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}