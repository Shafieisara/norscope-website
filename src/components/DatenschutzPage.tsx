import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { type Lang } from '../i18n/translations';

interface DatenschutzPageProps {
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
  back:   { EN: 'Back to Homepage',   DE: 'Zurück zur Startseite' },
  title:  { EN: 'Privacy Policy',     DE: 'Datenschutzerklärung' },

  s1Title:   { EN: '1. Privacy at a Glance',   DE: '1. Datenschutz auf einen Blick' },
  s1h1:      { EN: 'General Information',       DE: 'Allgemeine Hinweise' },
  s1h1Text:  {
    EN: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data that can be used to personally identify you. For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.',
    DE: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
  },
  s1h2:      { EN: 'Data Collection on This Website',  DE: 'Datenerfassung auf dieser Website' },
  s1q1:      { EN: 'Who is responsible for data collection on this website?', DE: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?' },
  s1q1Text:  {
    EN: 'Data processing on this website is carried out by the website operator. Their contact details can be found in the section "Notice to the Responsible Party" in this privacy policy.',
    DE: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.',
  },
  s1q2:      { EN: 'How do we collect your data?', DE: 'Wie erfassen wir Ihre Daten?' },
  s1q2Text:  {
    EN: 'Your data is collected on the one hand by you providing it to us. This can be, for example, data that you enter into a contact form. Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. internet browser, operating system or time of page view). This data is collected automatically as soon as you enter this website.',
    DE: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
  },
  s1q3:      { EN: 'What do we use your data for?',  DE: 'Wofür nutzen wir Ihre Daten?' },
  s1q3Text:  {
    EN: 'Part of the data is collected to ensure error-free provision of the website. Other data can be used to analyse your user behaviour. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders or other order requests.',
    DE: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.',
  },
  s1q4:      { EN: 'What rights do you have regarding your data?', DE: 'Welche Rechte haben Sie bezüglich Ihrer Daten?' },
  s1q4Text:  {
    EN: 'You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.',
    DE: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
  },

  s2Title:   { EN: '2. Hosting',  DE: '2. Hosting' },
  s2Text:    { EN: 'We host the contents of our website with the following provider:', DE: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:' },
  s2h1:      { EN: 'External Hosting', DE: 'Externes Hosting' },
  s2h1Text1: {
    EN: 'This website is hosted externally. The personal data collected on this website is stored on the host\'s servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.',
    DE: 'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
  },
  s2h1Text2: {
    EN: 'External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR).',
    DE: 'Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).',
  },
  s2h1Text3: {
    EN: 'Our host will only process your data to the extent necessary to fulfil its service obligations and follow our instructions regarding this data.',
    DE: 'Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.',
  },
  s2provider:{ EN: 'We use the following host:', DE: 'Wir setzen folgenden Hoster ein:' },

  s3Title:   { EN: '3. General Information and Mandatory Disclosures', DE: '3. Allgemeine Hinweise und Pflichtinformationen' },
  s3h1:      { EN: 'Data Protection',  DE: 'Datenschutz' },
  s3h1Text1: {
    EN: 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.',
    DE: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
  },
  s3h1Text2: {
    EN: 'When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.',
    DE: 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
  },
  s3h1Text3: {
    EN: 'Please note that data transmission over the internet (e.g. when communicating by email) can have security gaps. Complete protection of data from access by third parties is not possible.',
    DE: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
  },

  s3h2:      { EN: 'Notice to the Responsible Party', DE: 'Hinweis zur verantwortlichen Stelle' },
  s3h2Text:  { EN: 'The responsible party for data processing on this website is:', DE: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:' },
  s3h2Resp:  { EN: 'Responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses etc.).', DE: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.' },

  s3h3:      { EN: 'Storage Duration', DE: 'Speicherdauer' },
  s3h3Text:  {
    EN: 'Unless a more specific storage period has been stated within this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a legitimate request for deletion or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.',
    DE: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
  },

  s3h4:      { EN: 'General Information on the Legal Basis for Data Processing on this Website', DE: 'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website' },
  s3h4Text:  {
    EN: 'If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR if special categories of data are processed pursuant to Art. 9 para. 1 GDPR. In the case of explicit consent to the transfer of personal data to third countries, data processing is also based on Art. 49 para. 1 lit. a GDPR.',
    DE: 'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.',
  },

  s3h5:      { EN: 'Recipients of Personal Data', DE: 'Empfänger von personenbezogenen Daten' },
  s3h5Text:  {
    EN: 'In the course of our business activities, we work with various external parties. In some cases, it is necessary to transfer personal data to these external parties. We only pass on personal data to external parties if this is required within the scope of contract fulfilment, if we are legally obligated to do so, if we have a legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR in the transfer, or if another legal basis permits the transfer of data.',
    DE: 'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind, wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt.',
  },

  s3h6:      { EN: 'Revocation of Your Consent to Data Processing', DE: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung' },
  s3h6Text:  {
    EN: 'Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The lawfulness of the data processing carried out until the revocation remains unaffected by the revocation.',
    DE: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
  },

  s3h7:      { EN: 'Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)', DE: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)' },
  s3h7box1:  {
    EN: 'IF DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME ON GROUNDS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS.',
    DE: 'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING.',
  },
  s3h7box2:  {
    EN: 'IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS ASSOCIATED WITH SUCH DIRECT MARKETING.',
    DE: 'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.',
  },

  s3h8:      { EN: 'Right to Lodge a Complaint with the Supervisory Authority', DE: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde' },
  s3h8Text:  {
    EN: 'In the event of breaches of GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work or place of the alleged infringement. The right to lodge a complaint exists without prejudice to any other administrative or judicial remedy.',
    DE: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
  },
  s3h8Authority: { EN: 'State Commissioner for Data Protection of Lower Saxony', DE: 'Die Landesbeauftragte für den Datenschutz Niedersachsen' },

  s3h9:      { EN: 'Right to Data Portability', DE: 'Recht auf Datenübertragbarkeit' },
  s3h9Text:  {
    EN: 'You have the right to have data which we process automatically on the basis of your consent or in fulfilment of a contract handed over to you or to a third party in a common, machine-readable format.',
    DE: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.',
  },

  s3h10:     { EN: 'Access, Rectification and Deletion', DE: 'Auskunft, Berichtigung und Löschung' },
  s3h10Text: {
    EN: 'Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients and the purpose of data processing and, if applicable, a right to correction or deletion of this data.',
    DE: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.',
  },

  s3h11:     { EN: 'Right to Restriction of Processing', DE: 'Recht auf Einschränkung der Verarbeitung' },
  s3h11Text: {
    EN: 'You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:',
    DE: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
  },
  s3h11Items: {
    EN: [
      'If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the review, you have the right to request the restriction of the processing of your personal data.',
      'If the processing of your personal data happened/is happening unlawfully, you can request the restriction of data processing instead of deletion.',
      'If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request restriction of the processing of your personal data instead of deletion.',
      'If you have filed an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.',
    ],
    DE: [
      'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
      'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
    ],
  },
  s3h11Footer: {
    EN: 'If you have restricted the processing of your personal data, this data – apart from being stored – may only be processed with your consent or for the assertion, exercise or defence of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a member state.',
    DE: 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
  },

  s3h12:     { EN: 'SSL/TLS Encryption', DE: 'SSL- bzw. TLS-Verschlüsselung' },
  s3h12Text: {
    EN: 'This site uses SSL or TLS encryption for security reasons and for the protection of the transmission of confidential content, such as orders or enquiries that you send to us as the site operator. You can recognise an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.',
    DE: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
  },

  s4Title:   { EN: '4. Data Collection on This Website',  DE: '4. Datenerfassung auf dieser Website' },
  s4h1:      { EN: 'Enquiry by Email, Telephone or Fax',  DE: 'Anfrage per E-Mail, Telefon oder Telefax' },
  s4h1Text1: {
    EN: 'If you contact us by email, telephone or fax, your enquiry including all resulting personal data (name, enquiry) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.',
    DE: 'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
  },
  s4h1Text2: {
    EN: 'The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your enquiry is related to the fulfilment of a contract or is necessary to carry out pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective handling of the enquiries addressed to us (Art. 6 para. 1 lit. f GDPR).',
    DE: 'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).',
  },
  s4h1Text3: {
    EN: 'The data sent to us via contact requests will remain with us until you request us to delete it, revoke your consent to storage or the purpose for which the data was stored no longer applies. Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.',
    DE: 'Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
  },

  source:    { EN: 'Source:', DE: 'Quelle:' },
  date:      { EN: 'As of: February 2026', DE: 'Stand: Februar 2026' },
};

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
                currentPage="datenschutz"
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

                        {/* Section 1 */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">{t.s1Title[lang]}</h2>
                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s1h1[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s1h1Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s1h2[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-2"><strong>{t.s1q1[lang]}</strong></p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s1q1Text[lang]}</p>

                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-2"><strong>{t.s1q2[lang]}</strong></p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s1q2Text[lang]}</p>

                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-2"><strong>{t.s1q3[lang]}</strong></p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s1q3Text[lang]}</p>

                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-2"><strong>{t.s1q4[lang]}</strong></p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s1q4Text[lang]}</p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">{t.s2Title[lang]}</h2>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s2Text[lang]}</p>
                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s2h1[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s2h1Text1[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s2h1Text2[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s2h1Text3[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">
                                <strong>{t.s2provider[lang]}</strong> Vercel
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">{t.s3Title[lang]}</h2>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h1[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s3h1Text1[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s3h1Text2[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h1Text3[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h2[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s3h2Text[lang]}</p>
                            <div className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed space-y-1 mb-4">
                                <p>Sara Shafiei Sarvestani, Siddhant Rebello</p>
                                <p>Rollplatz 23</p>
                                <p>38678 Clausthal-Zellerfeld</p>
                                <p className="mt-3">Telefon: +49 1525 2993422</p>
                                <p>E-Mail: sara.shafiei.sarvestani@tu-clausthal.de</p>
                                <p>E-Mail: siddhant.jude.rebello@tu-clausthal.de</p>
                            </div>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h2Resp[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h3[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h3Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h4[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h4Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h5[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h5Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h6[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h6Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h7[lang]}</h3>
                            <div className="bg-[var(--light-gray)] p-6 rounded-lg mb-4">
                                <p className="text-[14px] md:text-[15px] text-[var(--text-main)] leading-relaxed uppercase font-semibold">{t.s3h7box1[lang]}</p>
                                <p className="text-[14px] md:text-[15px] text-[var(--text-main)] leading-relaxed uppercase font-semibold mt-4">{t.s3h7box2[lang]}</p>
                            </div>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h8[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s3h8Text[lang]}</p>
                            <div className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed space-y-1">
                                <p><strong>{t.s3h8Authority[lang]}</strong></p>
                                <p>Barbara Thiel</p>
                                <p>Prinzenstraße 5</p>
                                <p>30159 Hannover</p>
                                <p>Telefon: 0511 120-4500</p>
                                <p>E-Mail: poststelle@lfd.niedersachsen.de</p>
                            </div>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h9[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h9Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h10[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h10Text[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h11[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s3h11Text[lang]}</p>
                            <ul className="list-disc pl-6 text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed space-y-2 mb-4">
                                {t.s3h11Items[lang].map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h11Footer[lang]}</p>

                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s3h12[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s3h12Text[lang]}</p>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-10">
                            <h2 className="h2-section mb-4">{t.s4Title[lang]}</h2>
                            <h3 className="text-[18px] md:text-[20px] mb-2 mt-6" style={{ fontWeight: 600, color: 'var(--dark-text)' }}>{t.s4h1[lang]}</h3>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s4h1Text1[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed mb-4">{t.s4h1Text2[lang]}</p>
                            <p className="text-[15px] md:text-[17px] text-[var(--text-main)] leading-relaxed">{t.s4h1Text3[lang]}</p>
                        </div>

                        {/* Source */}
                        <div className="text-[13px] text-[var(--text-muted)] pt-6 border-t border-[var(--border-light)]">
                            <p>{t.source[lang]} <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-[var(--industrial-blue)] hover:underline">https://www.e-recht24.de</a></p>
                            <p className="mt-2">{t.date[lang]}</p>
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
