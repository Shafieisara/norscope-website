import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface DatenschutzPageProps {
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

export function DatenschutzPage({
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
}: DatenschutzPageProps) {
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
                        <h1
                            className="text-[36px] md:text-[52px] tracking-tight mb-8 md:mb-12"
                            style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                        >
                            Datenschutzerklärung
                        </h1>

                        {/* Einleitung */}
                        <div className="mb-10">
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten (im Folgenden auch nur als "Daten" bezeichnet) aufklären. Personenbezogene Daten sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z. B. Name, Adresse, E-Mail-Adresse oder Ihr Nutzerverhalten.
                            </p>
                        </div>

                        {/* Verantwortlicher */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                1. Verantwortlicher
                            </h2>
                            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-1">
                                <p>Norscope (Projektinitiative)</p>
                                <p>Sara Shafiei Sarvestani, Siddhant Rebello</p>
                                <p>Rollplatz 23</p>
                                <p>38678 Clausthal-Zellerfeld</p>
                                <p className="mt-3">E-Mail: sara.shafiei.sarvestani@tu-clausthal.de</p>
                            </div>
                        </div>

                        {/* Grundsätze der Datenverarbeitung */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                2. Grundsätze der Datenverarbeitung
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Wir verarbeiten personenbezogene Daten nur nach ausdrücklicher Einwilligung der betroffenen Nutzer und unter Einhaltung der geltenden Datenschutzbestimmungen (DSGVO, BDSG). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) oder lit. f DSGVO (berechtigtes Interesse).
                            </p>
                        </div>

                        {/* Art und Umfang der Datenverarbeitung */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                3. Art und Umfang der Datenverarbeitung
                            </h2>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                3.1 Zugriffsdaten und Server-Logfiles
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet Service Providers und Ähnliches. Diese Daten können keiner bestimmten Person zugeordnet werden und dienen ausschließlich statistischen Auswertungen und der Verbesserung der Website.
                            </p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                3.2 Kontaktformular
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
                            </p>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                <strong>Erfasste Daten:</strong> Name, E-Mail-Adresse, Unternehmen, Rolle, Nachrichtentext
                            </p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>
                                3.3 Cookies
                            </h3>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Diese Website verwendet derzeit keine Tracking-Cookies. Sollte sich dies in Zukunft ändern, werden Sie entsprechend informiert und um Ihre Einwilligung gebeten.
                            </p>
                        </div>

                        {/* Weitergabe von Daten */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                4. Weitergabe von Daten
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Eine Weitergabe Ihrer Daten an Dritte erfolgt grundsätzlich nicht, außer wenn wir gesetzlich dazu verpflichtet sind oder Sie uns Ihre ausdrückliche Einwilligung erteilt haben.
                            </p>
                        </div>

                        {/* Speicherdauer */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                5. Speicherdauer
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Nach Wegfall des Zwecks oder Ablauf der Fristen werden die Daten routinemäßig gelöscht.
                            </p>
                        </div>

                        {/* Ihre Rechte */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                6. Ihre Rechte
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Sie haben jederzeit das Recht:
                            </p>
                            <ul className="list-disc pl-6 text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-2">
                                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                                <li>Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                                <li>Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                                <li>Die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
                                <li>Der Datenverarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                                <li>Auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                                <li>Eine erteilte Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
                            </ul>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mt-4">
                                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: sara.shafiei.sarvestani@tu-clausthal.de
                            </p>
                        </div>

                        {/* Beschwerderecht */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                7. Beschwerderecht bei der Aufsichtsbehörde
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed mb-4">
                                Sie haben das Recht, sich bei Datenschutzverstößen bei der zuständigen Aufsichtsbehörde zu beschweren:
                            </p>
                            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-1">
                                <p><strong>Die Landesbeauftragte für den Datenschutz Niedersachsen</strong></p>
                                <p>Barbara Thiel</p>
                                <p>Prinzenstraße 5</p>
                                <p>30159 Hannover</p>
                                <p>Telefon: 0511 120-4500</p>
                                <p>E-Mail: poststelle@lfd.niedersachsen.de</p>
                            </div>
                        </div>

                        {/* SSL/TLS-Verschlüsselung */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                8. SSL/TLS-Verschlüsselung
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.
                            </p>
                        </div>

                        {/* Änderungen */}
                        <div className="mb-10">
                            <h2
                                className="text-[24px] md:text-[28px] tracking-tight mb-4"
                                style={{ fontWeight: 600, color: 'var(--dark-text)' }}
                            >
                                9. Änderungen dieser Datenschutzerklärung
                            </h2>
                            <p className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed">
                                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie stets den aktuellen rechtlichen Anforderungen anzupassen oder um Änderungen unserer Leistungen umzusetzen. Die jeweils aktuelle Version gilt für Ihren nächsten Besuch.
                            </p>
                            <p className="text-[15px] md:text-[17px] text-[#6B6B6B] mt-4">
                                Stand: Februar 2026
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer
                onImpressumClick={onImpressumClick}
                onDatenschutzClick={onDatenschutzClick}
            />
        </div>
    );
}
