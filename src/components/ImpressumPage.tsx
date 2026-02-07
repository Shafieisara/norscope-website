import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface ImpressumPageProps {
    onNavigateHome: () => void;
    currentLanguage: 'EN' | 'DE';
    onLanguageChange: (lang: 'EN' | 'DE') => void;
    onAboutClick?: () => void;
    onProductClick?: () => void;
    onSolutionClick?: () => void;
    onImpactClick?: () => void;
    onContactClick?: () => void;
    onImpressumClick?: () => void;
    onDatenschutzClick?: () => void;
}

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
    return (
        <div className="min-h-screen bg-white">
            <Navigation
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                onLogoClick={onNavigateHome}
                onAboutClick={onAboutClick}
                onProductClick={onProductClick}
                onSolutionClick={onSolutionClick}
                onImpactClick={onImpactClick}
                onContactClick={onContactClick}
            />

            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <button
                            onClick={onNavigateHome}
                            className="flex items-center gap-2 text-[14px] md:text-[15px] mb-6 text-[#6B6B6B] hover:text-[var(--industrial-blue)] transition-colors"
                        >
                            <span>←</span>
                            <span>Zurück zur Startseite</span>
                        </button>

                        <h1
                            className="text-[36px] md:text-[52px] tracking-tight mb-8 md:mb-12"
                            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                        >
                            Impressum
                        </h1>

                        {/* Angaben gemäß § 5 TMG */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                Angaben gemäß § 5 TMG
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-1">
                                <p><strong>Norscope</strong></p>
                                <p>Projektinitiative (in Gründung)</p>
                                <p>Rollplatz 23</p>
                                <p>38678 Clausthal-Zellerfeld</p>
                            </div>
                        </div>

                        {/* Vertreten durch */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                Vertreten durch
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-1">
                                <p>Sara Shafiei Sarvestani</p>
                                <p>Siddhant Rebello</p>
                            </div>
                        </div>

                        {/* Kontakt */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                Kontakt
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-1">
                                <p><strong>E-Mail:</strong></p>
                                <p>Sara Shafiei Sarvestani: sara.shafiei.sarvestani@tu-clausthal.de</p>
                                <p>Siddhant Rebello: siddhant.jude.rebello@tu-clausthal.de</p>
                                <p className="mt-3"><strong>Telefon:</strong></p>
                                <p>Sara Shafiei Sarvestani: +49 1525 2993422</p>
                                <p>Siddhant Rebello: +49 1551 0350105</p>
                            </div>
                        </div>

                        {/* Hinweis */}
                        <div className="mb-10 p-6 bg-[var(--light-gray)] rounded-lg">
                            <p className="text-[14px] md:text-[15px] text-[#4A4A4A] leading-relaxed">
                                <strong>Hinweis:</strong> Diese Website dient der Präsentation einer Geschäftsidee im Rahmen einer geplanten Gründungsförderung (EXIST-Stipendium). Es handelt sich um ein nicht-kommerzielles Informationsangebot. Eine formelle Unternehmensregistrierung liegt zum jetzigen Zeitpunkt noch nicht vor.
                            </p>
                        </div>

                        {/* Haftungsausschluss */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                Haftungsausschluss
                            </h2>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                Haftung für Inhalte
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                Haftung für Links
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                Urheberrecht
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer
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
