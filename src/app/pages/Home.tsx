import { SEO } from '../components/SEO';
import { StructuredData, createOrganizationSchema, createBreadcrumbSchema } from '../components/StructuredData';
import { VideoCard } from '../components/VideoCard';
import { videos } from '../data/videos';
import { ArrowRight, Scale, Users, BookOpen, TrendingUp, CheckCircle2, Mail } from 'lucide-react';

export function Home() {
  return (
    <>
      <SEO
        title="Veřejné zakázky 24 - Průvodce veřejnými zakázkami"
        description="Vzdělávací platforma pro nováčky i odborníky. Praktické výklady zákona č. 134/2016 Sb., videopřednášky, judikatura ÚOHS a aktuální novinky z veřejného zadávání."
        keywords="veřejné zakázky, ZZVZ, zákon 134/2016, ÚOHS, zadávací řízení, legislativa, judikatura, metodika, vzdělávání, zadavatelé, dodavatelé, videopřednášky, rozhodovací praxe"
        canonical="https://www.zakazkovy-pruvodce.cz"
        ogType="website"
      />
      <StructuredData type="organization" data={createOrganizationSchema()} />
      <StructuredData
        type="breadcrumb"
        data={createBreadcrumbSchema([
          { name: 'Domů', url: 'https://www.zakazkovy-pruvodce.cz' },
        ])}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="mb-6 leading-tight"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  }}
                >
                  On-line průvodce veřejnými zakázkami
                </h1>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Moderní průvodce českým právem veřejných zakázek. Praktické
                  výklady, rozhodovací praxe a aktuální novinky pro zadavatele,
                  právníky i dodavatele.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#videa"
                    className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    Sledovat videa
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="https://herohero.co/verejnezakazky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    Vstoupit do placené sekce
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hero.png"
                    alt="Veřejné zakázky 24"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Scale size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-slate-900">Video lekce</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O projektu */}
        <section id="o-projektu" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="mb-6 text-3xl md:text-4xl">
                O projektu Veřejné zakázky 24
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Moderní vzdělávací platforma určená zejména nováčkům v oblasti 
                veřejných zakázek. Prostřednictvím praktických výkladů, videopřednášek 
                a odborných článků předáváme znalosti zákona č. 134/2016 Sb., o zadávání 
                veřejných zakázek, ve znění pozdějších předpisů přehlednou 
                a srozumitelnou formou. Naším cílem je usnadnit zadavatelům, dodavatelům 
                i jejich juniorním zaměstnancům orientaci v této komplexní problematice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-slate-700" />
                </div>
                <h3 className="mb-2">Pro zadavatele</h3>
                <p className="text-sm text-slate-600">
                  Obce, kraje, státní organizace a veřejné instituce
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale size={28} className="text-slate-700" />
                </div>
                <h3 className="mb-2">Pro právníky</h3>
                <p className="text-sm text-slate-600">
                  Advokáti specializujíc se na veřejné zakázky
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={28} className="text-slate-700" />
                </div>
                <h3 className="mb-2">Pro dodavatele</h3>
                <p className="text-sm text-slate-600">
                  Firmy úastnící se veřejných zakzek
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={28} className="text-slate-700" />
                </div>
                <h3 className="mb-2">Pro studenty</h3>
                <p className="text-sm text-slate-600">
                  Právnické fakulty a odborné školy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video obsah */}
        <section id="videa" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl md:text-4xl">
                Video obsah
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Praktické výklady, rozhodovací praxe ÚOHS a detailní rozbory
                konkrétních případů
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://herohero.co/verejnezakazky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Zobrazit všechna videa na Herohero
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Proč sledovat VZ24 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6 text-3xl md:text-4xl">
                  Proč sledovat VZ24?
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <CheckCircle2
                      size={24}
                      className="text-emerald-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="mb-1">Praktické výklady</h3>
                      <p className="text-slate-600">
                        Nejsou to jen paragrafy - vysvětlujeme, jak zákon
                        funguje v reálných situacích
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2
                      size={24}
                      className="text-emerald-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="mb-1">Rozhodovací praxe</h3>
                      <p className="text-slate-600">
                        Analýzy rozhodnutí ÚOHS a soudů s praktickými dopady
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2
                      size={24}
                      className="text-emerald-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="mb-1">Aktuální novinky</h3>
                      <p className="text-slate-600">
                        Sledujeme změny legislativy a novou judikaturu
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2
                      size={24}
                      className="text-emerald-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="mb-1">Srozumitelné vysvětlení</h3>
                      <p className="text-slate-600">
                        Složité právní konstrukce překládáme do jasného jazyka
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/why-follow.png"
                    alt="Profesionální prostředí"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O nás sekce */}
        <section id="o-nas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-3xl md:text-4xl">
                O nás
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <a
                  href="https://www.linkedin.com/in/jan-musil-226284134/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="mb-6 inline-block">
                    <img
                      src="/images/jan-musil.jpg"
                      alt="JUDr. Jan Musil, LL.M."
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300 ring-4 ring-slate-100 group-hover:ring-orange-200"
                    />
                  </div>
                </a>
                <h3 className="text-xl sm:text-2xl mb-2">JUDr. Jan Musil, LL.M.</h3>
                <p className="text-orange-600 mb-4 text-sm sm:text-base">Zakladatel a lektor</p>
                <p className="text-slate-600 leading-relaxed px-2 sm:px-4 text-sm sm:text-base">
                  Absolvent Právnické fakulty Univerzity Karlovy. Oblasti veřejných 
                  zakázek se věnuje od působení v Technologické agentuře ČR. V současnosti 
                  působí jako advokát specializovaný na veřejné zakázky v advokátní 
                  kancel��ři Solkind s.r.o. v Praze.
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://www.linkedin.com/in/dominikzlebek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="mb-6 inline-block">
                    <img
                      src="/images/dominik-zlebek.jpg"
                      alt="Ing. Dominik Žlebek, LL.M."
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300 ring-4 ring-slate-100 group-hover:ring-orange-200"
                    />
                  </div>
                </a>
                <h3 className="text-xl sm:text-2xl mb-2">Ing. Dominik Žlebek, LL.M.</h3>
                <p className="text-orange-600 mb-4 text-sm sm:text-base">Zakladatel a lektor</p>
                <p className="text-slate-600 leading-relaxed px-2 sm:px-4 text-sm sm:text-base">
                  Absolvent Provozně ekonomické fakulty ČZU v Praze. Profesní zkušenosti 
                  v oblasti veřejných zakázek získal v Technologické agentuře ČR a ve 
                  společnosti Technologie hlavního města Prahy. V současnosti působí 
                  jako konzultant veřejných zakázek v Tender systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl md:text-4xl">
              Získejte přístup k plným videím a detailním rozborům
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Prémiový obsah na platformě Herohero zahrnuje kompletní video
              lekce, analýzy rozhodnutí a přístup spoustu novinek z oblasti veřejných zakázek.
            </p>
            <a
              href="https://herohero.co/verejnezakazky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-lg"
            >
              Přejít na Herohero
              <ArrowRight size={24} />
            </a>
            <p className="mt-6 text-sm text-slate-400">
              Kdykoliv zrušitelné
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl md:text-4xl">
              Máte dotaz nebo zájem o spolupráci?
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Jsme tu pro vás. Napište nám na e-mail a my se vám ozveme co nejdříve.
            </p>
            
            <div className="flex justify-center mb-4">
              <a 
                href="mailto:verejnezakazky24@gmail.com"
                className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors text-lg font-medium"
              >
                <Mail size={24} />
                verejnezakazky24@gmail.com
              </a>
            </div>

            <p className="mt-8 text-slate-600">
              Odpovídáme obvykle do 24 hodin
            </p>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl md:text-4xl">
                Náš partner
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="p-8 md:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl mb-2 text-slate-900">TENDERIX</h3>
                      <p className="text-lg text-orange-600 font-semibold">
                        První umělá inteligence ve veřejných zakázkách v Česku
                      </p>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      TENDERIX je průkopnická AI platforma, která revolucionalizuje způsob práce 
                      s veřejnými zakázkami. Díky pokročilým algoritmům a strojovému učení 
                      automatizuje analýzu dokumentů a právní rešerši.
                    </p>
                    <a
                      href="https://www.tenderix.cz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Navštívit TENDERIX
                      <ArrowRight size={20} />
                    </a>
                  </div>

                  <div className="h-full min-h-[300px] md:min-h-[400px]">
                    <img
                      src="/images/tenderix.png"
                      alt="TENDERIX - AI platforma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}