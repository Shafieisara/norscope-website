import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { type Lang } from '../i18n/translations';

interface ImpressumPageProps {
    onNavigateHome: () => void;
    currentLanguage: Lang;
    onLanguageChange: (lang: Lang) => void;
    onAboutClick?: () => void;
    onProductClick?: () => void;
    onSolutionClick?: () => void;
    onImpactClick?: () => void;
    onContactClick?: () => void;
    onImpressumClick?: () => void;
    onDatenschutzClick?: () => void;
}

const t = {
  back:       { EN: 'Back to Homepage',              DE: 'Zurück zur Startseite' },
  title:      { EN: 'Legal Notice',                  DE: 'Impressum' },
  note:       { EN: 'Note',                           DE: 'Hinweis' },
  noteText: {
    EN: 'This website presents a business idea as part of a planned startup funding (EXIST scholarship). It is a non-commercial information offering. A formal company registration has not yet taken place.',
    DE: 'Diese Website dient der Präsentation einer Geschäftsidee im Rahmen einer geplanten Gründungsförderung (EXIST-Stipendium). Es handelt sich um ein nicht-kommerzielles Informationsangebot. Eine formelle Unternehmensregistrierung liegt zum jetzigen Zeitpunkt noch nicht vor.',
  },

  // Section: legal info
  legalInfo:  { EN: 'Information according to § 5 TMG', DE: 'Angaben gemäß § 5 TMG' },
  initiative: { EN: 'Project Initiative',              DE: 'Projektinitiative' },

  // Section: represented by
  repBy:      { EN: 'Represented by',                 DE: 'Vertreten durch' },

  // Section: contact
  contactTitle: { EN: 'Contact',                      DE: 'Kontakt' },
  email:        { EN: 'Email:',                       DE: 'E-Mail:' },
  phone:        { EN: 'Phone:',                       DE: 'Telefon:' },

  // Section: disclaimer
  disclaimer:   { EN: 'Disclaimer',                   DE: 'Haftungsausschluss' },
  liabilityContent: { EN: 'Liability for Content',   DE: 'Haftung für Inhalte' },
  liabilityContentText: {
    EN: 'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
    DE: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
  },
  liabilityLinks: { EN: 'Liability for Links',        DE: 'Haftung für Links' },
  liabilityLinksText: {
    EN: 'Our website contains links to external third-party websites over whose content we have no control. Therefore we cannot accept any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their content.',
    DE: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
  },
  copyright:    { EN: 'Copyright',                    DE: 'Urheberrecht' },
  copyrightText: {
    EN: 'The content and works on these pages created by the site operators are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.',
    DE: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
  },
};

export function ImpressumPage({
    onNavigateHome,
    currentLanguage,
    onLanguageChange,
    onAboutClick,
    onProductClick,
    onSolutionClick,
    onImpactClick,
    onContactClick,
    onImpressumClick,
    onDatenschutzClick
}: ImpressumPageProps) {
    const lang = currentLanguage;
    return (
        <div className="min-h-screen bg-white">
            <Navigation
                currentLanguage={lang}
                onLanguageChange={onLanguageChange}
                onLogoClick={onNavigateHome}
                onAboutClick={onAboutClick}
                onProductClick={onProductClick}
                onSolutionClick={onSolutionClick}
                onImpactClick={onImpactClick}
                onContactClick={onContactClick}
                currentPage="impressum"
            />

            <section className="pt-32 pb-16 md:pt-40 md:pb-[var(--section-py-lg)]">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <button
                            onClick={onNavigateHome}
                            className="flex items-center gap-2 text-[15px] mb-6 text-[var(--text-muted)] hover:text-[var(--industrial-blue)] transition-colors"
                        >
                            <span>←</span>
                            <span>{t.back[lang]}</span>
                        </button>

                        <h1 className="h1-page mb-8 md:mb-12">
                            {t.title[lang]}
                        </h1>

                        {/* Legal Info */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">
                                {t.legalInfo[lang]}
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed space-y-1">
                                <p><strong>Norscope</strong></p>
                                <p>{t.initiative[lang]}</p>
                                <p>Rollplatz 23</p>
                                <p>38678 Clausthal-Zellerfeld</p>
                            </div>
                        </div>

                        {/* Represented by */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">
                                {t.repBy[lang]}
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed space-y-1">
                                <p>Sara Sarvestani</p>
                                <p>Siddhant Rebello</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">
                                {t.contactTitle[lang]}
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed space-y-1">
                                <p><strong>{t.email[lang]}</strong></p>
                                <p>Sara Sarvestani: sara.shafiei.sarvestani@tu-clausthal.de</p>
                                <p>Siddhant Rebello: siddhant.jude.rebello@tu-clausthal.de</p>
                                <p className="mt-3"><strong>{t.phone[lang]}</strong></p>
                                <p>Sara Sarvestani: +49 1525 2993422</p>
                                <p>Siddhant Rebello: +49 1551 0350105</p>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="mb-10 p-6 bg-[var(--light-gray)] rounded-lg">
                            <p className="text-[14px] md:text-[15px] text-[var(--text-main)] leading-relaxed">
                                <strong>{t.note[lang]}:</strong> {t.noteText[lang]}
                            </p>
                        </div>

                        {/* Disclaimer */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">
                                {t.disclaimer[lang]}
                            </h2>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                {t.liabilityContent[lang]}
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">
                                {t.liabilityContentText[lang]}
                            </p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                {t.liabilityLinks[lang]}
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">
                                {t.liabilityLinksText[lang]}
                            </p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                {t.copyright[lang]}
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                                {t.copyrightText[lang]}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer
                lang={lang}
                onAboutClick={onAboutClick}
                onProductClick={onProductClick}
                onSolutionClick={onSolutionClick}
                onImpactClick={onImpactClick}
                onContactClick={onContactClick}
                onImpressumClick={onImpressumClick}
                onDatenschutzClick={onDatenschutzClick}
            />
        </div>
    );
}
