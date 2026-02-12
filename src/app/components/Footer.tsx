import { Mail, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white mb-4">Obchodní údaje</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-semibold mb-1">Ing. Dominik Žlebek, LL.M.</p>
                <p>Stehelčeves, Hlavní 62</p>
                <p>273 42 Stehelčeves</p>
                <p className="mt-1">
                  <span className="text-white">IČO:</span> 14244896
                </p>
              </div>
              
              <div className="pt-2 border-t border-slate-700">
                <p className="text-white font-semibold mb-1">JUDr. Jan Musil, LL.M.</p>
                <p>Jugoslávská 620/29</p>
                <p>120 00 Praha 2</p>
                <p className="mt-1">
                  <span className="text-white">IČO:</span> 21970394
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Navigace</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#home"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Domů
                </a>
              </li>
              <li>
                <a
                  href="/#o-projektu"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  O projektu
                </a>
              </li>
              <li>
                <a
                  href="/#videa"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Videa
                </a>
              </li>
              <li>
                <Link
                  to="/aktuality"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Aktuality
                </Link>
              </li>
              <li>
                <a
                  href="/#o-nas"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  O nás
                </a>
              </li>
              <li>
                <a
                  href="/#kontakt"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Kontakt a sociální sítě</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:verejnezakazky24@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCn54sqzIKHjMQS5X64ahgrA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/verejnezakazky/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://open.spotify.com/show/2fJdrFYNZz4k4lpq2VUYtw?si=81a7111e044a462e&nd=1&dlsi=8c89f449c08e4c50"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Spotify"
              >
                <Music size={20} />
              </a>
            </div>
            <p className="text-sm">
              <a
                href="mailto:verejnezakazky24@gmail.com"
                className="hover:text-white transition-colors"
              >
                verejnezakazky24@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm">
          <div className="text-left">
            <p>
              © 2023 - 2026, Veřejné zakázky 24. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}