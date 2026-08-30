// ─── Central Translation Store ───────────────────────────────────────────────
// All user-facing strings for EN and DE, organised by page / section.
// Import the relevant slice in each component.

export type Lang = 'EN' | 'DE';

// ── Navigation ────────────────────────────────────────────────────────────────
export const navT = {
  product:   { EN: 'Product',              DE: 'Produkt' },
  solutions: { EN: 'Solutions',            DE: 'Lösungen' },
  approach:  { EN: 'Approach',             DE: 'Ansatz' },
  about:     { EN: 'About',               DE: 'Über uns' },
  contact:   { EN: 'Contact',             DE: 'Kontakt' },
  cta:       { EN: 'Discuss a Pilot',     DE: 'Pilotprojekt besprechen' },
};

// ── Footer ────────────────────────────────────────────────────────────────────
export const footerT = {
  about:       { EN: 'About',              DE: 'Über uns' },
  product:     { EN: 'Product',            DE: 'Produkt' },
  solution:    { EN: 'Solution',           DE: 'Lösung' },
  approach:    { EN: 'Approach',           DE: 'Ansatz' },
  contact:     { EN: 'Contact',            DE: 'Kontakt' },
  imprint:     { EN: 'Imprint',            DE: 'Impressum' },
  privacy:     { EN: 'Privacy Policy',     DE: 'Datenschutz' },
  tagline:     { EN: 'Founder-led startup initiative based in Germany', DE: 'Gründergeführtes Startup-Unternehmen aus Deutschland' },
};

// ── Hero Section ──────────────────────────────────────────────────────────────
export const heroT = {
  headline:    { EN: 'Offline AR Guidance for Industrial Maintenance', DE: 'Offline-AR-Führung für die industrielle Wartung' },
  body:        { EN: 'Offline augmented reality platform for industrial servicing and training. Reduce downtime, accelerate knowledge transfer, and eliminate errors in complex maintenance operations.', DE: 'Offline-Augmented-Reality-Plattform für industrielle Wartung und Schulung. Reduzieren Sie Ausfallzeiten, beschleunigen Sie den Wissenstransfer und eliminieren Sie Fehler in komplexen Wartungsabläufen.' },
  ctaPrimary:  { EN: 'Discuss a Pilot',   DE: 'Pilotprojekt besprechen' },
  ctaSecondary:{ EN: 'Product Overview',  DE: 'Produktübersicht' },
};

// ── Problem Section ───────────────────────────────────────────────────────────
export const problemT = {
  heading:     { EN: 'The Industrial Challenge',  DE: 'Die industrielle Herausforderung' },
  subtitle:    { EN: 'Manufacturing faces mounting pressure from complexity, workforce gaps, and rising operational costs', DE: 'Die Fertigung steht unter zunehmendem Druck durch Komplexität, Qualifikationslücken und steigende Betriebskosten' },
  cards: {
    EN: [
      { title: 'Downtime Costs',     description: 'Every hour of unplanned downtime costs manufacturers thousands in lost productivity and revenue.' },
      { title: 'Skill Shortage',     description: 'Experienced technicians are retiring faster than new talent can be trained and deployed.' },
      { title: 'Complex Machines',   description: 'Modern industrial equipment requires specialized knowledge and precise maintenance procedures.' },
      { title: 'Paper-Based Manuals',description: 'Traditional documentation is difficult to navigate during critical maintenance operations.' },
    ],
    DE: [
      { title: 'Ausfallkosten',      description: 'Jede Stunde ungeplanter Stillstand kostet Hersteller Tausende an entgangener Produktivität und Umsatz.' },
      { title: 'Fachkräftemangel',   description: 'Erfahrene Techniker gehen schneller in Rente, als neue Talente ausgebildet und eingesetzt werden können.' },
      { title: 'Komplexe Maschinen', description: 'Moderne Industrieanlagen erfordern spezialisiertes Wissen und präzise Wartungsverfahren.' },
      { title: 'Papierdokumentation',description: 'Herkömmliche Dokumentationen sind schwer zu navigieren während kritischer Wartungsarbeiten.' },
    ],
  },
};

// ── Solution Section ──────────────────────────────────────────────────────────
export const solutionSectionT = {
  heading:    { EN: 'Enterprise AR Platform',  DE: 'Enterprise-AR-Plattform' },
  body:       { EN: 'Norscope delivers a robust augmented reality solution designed specifically for industrial environments. Our platform works anywhere, with any machine, ensuring your team has instant access to critical maintenance information.', DE: 'Norscope bietet eine robuste Augmented-Reality-Lösung, die speziell für industrielle Umgebungen entwickelt wurde. Unsere Plattform funktioniert überall, mit jeder Maschine, und stellt sicher, dass Ihr Team sofortigen Zugang zu wichtigen Wartungsinformationen hat.' },
  statLabel:  { EN: 'System Uptime',           DE: 'Systemverfügbarkeit' },
  features: {
    EN: [
      'Fully offline AR capability - no internet required',
      'Universal machine compatibility across manufacturers',
      'Real-time IoT integration and sensor monitoring',
      'Step-by-step AR-guided maintenance procedures',
      'Automatic compliance documentation and logging',
      'Voice-activated hands-free operation',
    ],
    DE: [
      'Vollständig offline-fähige AR – keine Internetverbindung erforderlich',
      'Universelle Maschinenkompatibilität über Hersteller hinweg',
      'Echtzeit-IoT-Integration und Sensor-Monitoring',
      'Schritt-für-Schritt AR-geführte Wartungsverfahren',
      'Automatische Compliance-Dokumentation und Protokollierung',
      'Sprachgesteuerte, freihändige Bedienung',
    ],
  },
};

// ── Custom Software Section ───────────────────────────────────────────────────
export const customSoftwareT = {
  heading:  { EN: 'Custom Software for Every Customer', DE: 'Individuelle Software für jeden Kunden' },
  body:     { EN: 'We design and deploy customer-specific AR software modules tailored to each machine type, maintenance workflow, safety standard, and IT environment. Our platform adapts to your operations, not the other way around.', DE: 'Wir entwickeln und implementieren kundenspezifische AR-Softwaremodule, die auf jeden Maschinentyp, jeden Wartungsablauf, jeden Sicherheitsstandard und jede IT-Umgebung zugeschnitten sind. Unsere Plattform passt sich Ihren Abläufen an – nicht umgekehrt.' },
  caption:  { EN: 'Hardware platform combined with customer-specific software deployment', DE: 'Hardware-Plattform kombiniert mit kundenspezifischer Software-Implementierung' },
  features: {
    EN: [
      'Machine-specific maintenance workflows',
      'Offline AI models trained on customer manuals',
      'Role-based user interfaces',
      'ERP / CMMS / IoT system integration',
      'Continuous updates per customer deployment',
    ],
    DE: [
      'Maschinenspezifische Wartungsabläufe',
      'Offline-KI-Modelle, trainiert auf Kundenhandbücher',
      'Rollenbasierte Benutzeroberflächen',
      'ERP / CMMS / IoT-Systemintegration',
      'Kontinuierliche Updates je Kundeninstallation',
    ],
  },
};

// ── How It Works Section ──────────────────────────────────────────────────────
export const howItWorksT = {
  heading:  { EN: 'How It Works',                                     DE: 'So funktioniert es' },
  subtitle: { EN: 'Four simple steps to transform your maintenance operations', DE: 'Vier einfache Schritte, um Ihre Wartungsabläufe zu transformieren' },
  steps: {
    EN: [
      { title: 'Wear Device',           description: 'Put on Norscope AR glasses for hands-free operation' },
      { title: 'Scan Machine',          description: 'System identifies equipment and loads procedures' },
      { title: 'Follow AR Instructions',description: 'Visual guidance overlays show exact steps in real-time' },
      { title: 'Log Maintenance',       description: 'Automatically document work and update records' },
    ],
    DE: [
      { title: 'Gerät anlegen',          description: 'Norscope-AR-Brille für freihändigen Betrieb aufsetzen' },
      { title: 'Maschine scannen',       description: 'System erkennt die Anlage und lädt die Verfahren' },
      { title: 'AR-Anweisungen folgen',  description: 'Visuelle Einblendungen zeigen die genauen Schritte in Echtzeit' },
      { title: 'Wartung dokumentieren',  description: 'Arbeit automatisch protokollieren und Datensätze aktualisieren' },
    ],
  },
};

// ── Benefits / Impact Section ─────────────────────────────────────────────────
export const benefitsT = {
  heading:       { EN: 'Measurable Impact',                DE: 'Messbarer Nutzen' },
  subtitle:      { EN: 'Published examples from industrial AR task-support studies', DE: 'Veröffentlichte Beispiele aus Industriestudien zur AR-Aufgabenunterstützung' },
  taskComplete:  { EN: 'Task Complete',                    DE: 'Aufgabe abgeschlossen' },
  metricCards: {
    EN: [
      { label: 'Faster task completion',   detail: 'Peer-reviewed industrial repair-task study' },
      { label: 'Lower perceived workload', detail: 'Peer-reviewed industrial repair-task study' },
      { label: 'Less maintenance time',    detail: 'Industrial maintenance AR case study' },
      { label: 'Fewer errors',             detail: 'Industrial maintenance AR case study' },
    ],
    DE: [
      { label: 'Schnellere Aufgabenerfüllung',   detail: 'Peer-Review-Studie zu industriellen Reparaturaufgaben' },
      { label: 'Geringere wahrgenommene Arbeitsbelastung', detail: 'Peer-Review-Studie zu industriellen Reparaturaufgaben' },
      { label: 'Weniger Wartungszeit',           detail: 'Industrielle Wartungs-AR-Fallstudie' },
      { label: 'Weniger Fehler',                 detail: 'Industrielle Wartungs-AR-Fallstudie' },
    ],
  },
  sourcesTitle:  { EN: 'Sources',  DE: 'Quellen' },
  source1: {
    EN: 'Eversberg, L. et al. (2023), Evaluating digital work instructions with augmented reality versus paper-based documents for manual object-specific repair tasks in a case study with experienced workers. The International Journal of Advanced Manufacturing Technology. Reported 21% faster task completion and 26% lower perceived workload.',
    DE: 'Eversberg, L. et al. (2023), Evaluierung digitaler Arbeitsanweisungen mit Augmented Reality im Vergleich zu papierbasierten Dokumenten für manuelle objektspezifische Reparaturaufgaben in einer Fallstudie mit erfahrenen Arbeitern. The International Journal of Advanced Manufacturing Technology. Berichtet 21 % schnellere Aufgabenerfüllung und 26 % geringere wahrgenommene Arbeitsbelastung.',
  },
  source2: {
    EN: 'Augmented Industrial Maintenance (AIM): A Case Study for Evaluating and Comparing with Paper and Video Media Supports. Reported 13% less maintenance time using AR glasses and 25% fewer errors than paper-based maintenance in the cited case-study summary.',
    DE: 'Augmented Industrial Maintenance (AIM): Eine Fallstudie zur Evaluierung und zum Vergleich mit Papier- und Videomedienunterstützung. Berichtet 13 % weniger Wartungszeit mit AR-Brillen und 25 % weniger Fehler als bei papierbasierter Wartung in der zitierten Fallstudienübersicht.',
  },
  disclaimer: {
    EN: 'These figures are published reference examples from industrial AR studies and do not represent validated Norscope pilot results. Outcomes depend on workflow design, equipment, operator experience, and deployment conditions.',
    DE: 'Diese Zahlen sind veröffentlichte Referenzbeispiele aus industriellen AR-Studien und stellen keine validierten Norscope-Pilotergebnisse dar. Die Ergebnisse hängen von der Workflow-Gestaltung, der Ausrüstung, der Erfahrung der Bediener und den Einsatzbedingungen ab.',
  },
  viewApproach: { EN: 'View full approach methodology', DE: 'Vollständige Methodik anzeigen' },
};

// ── Industries Section ────────────────────────────────────────────────────────
export const industriesT = {
  heading:  { EN: 'Trusted Across Industries',  DE: 'Branchenübergreifend vertraut' },
  subtitle: { EN: 'Designed for sectors where maintenance guidance must work reliably, including in low-connectivity and remote operating conditions.', DE: 'Entwickelt für Branchen, in denen Wartungsführung zuverlässig funktionieren muss – auch bei schlechter Netzverbindung und in abgelegenen Betriebsumgebungen.' },
  industries: {
    EN: [
      { name: 'Manufacturing',      description: 'Assembly, servicing, and technician guidance' },
      { name: 'Industrial Machinery',description: 'Step-by-step support for machine maintenance' },
      { name: 'Process Industries', description: 'Guided workflows for complex plant equipment' },
      { name: 'Mining',             description: 'Offline support in remote operating environments' },
      { name: 'Maritime',           description: 'Maintenance guidance for onboard technical systems' },
    ],
    DE: [
      { name: 'Fertigung',           description: 'Montage, Wartung und Technikerführung' },
      { name: 'Industriemaschinen',  description: 'Schrittweise Unterstützung bei der Maschinenwartung' },
      { name: 'Prozessindustrien',   description: 'Geführte Workflows für komplexe Anlagen' },
      { name: 'Bergbau',             description: 'Offline-Unterstützung in abgelegenen Betriebsumgebungen' },
      { name: 'Maritime Industrie',  description: 'Wartungsführung für technische Systeme an Bord' },
    ],
  },
};

// ── CTA Section ───────────────────────────────────────────────────────────────
export const ctaT = {
  heading:  { EN: 'Ready to modernize machine maintenance?',  DE: 'Bereit, die Maschinenwartung zu modernisieren?' },
  subtitle: { EN: 'Built for the next generation of industrial maintenance', DE: 'Gebaut für die nächste Generation der industriellen Wartung' },
  button:   { EN: 'Discuss a Pilot',  DE: 'Pilotprojekt besprechen' },
};

// ── About Page ────────────────────────────────────────────────────────────────
export const aboutT = {
  hero: {
    heading: { EN: 'About Norscope', DE: 'Über Norscope' },
    body:    { EN: 'Practical augmented reality software for industrial machine maintenance and servicing.', DE: 'Praxisorientierte Augmented-Reality-Software für die industrielle Maschinenwartung und -instandhaltung.' },
  },
  problem: {
    heading: { EN: 'The Problem', DE: 'Das Problem' },
    body:    { EN: 'Industrial maintenance still relies heavily on paper documentation, individual experience, and the physical presence of experts. This leads to long downtimes, inconsistent repair quality, and significant training overhead.', DE: 'Die industrielle Wartung stützt sich noch stark auf Papierdokumentation, individuelle Erfahrung und die physische Anwesenheit von Experten. Dies führt zu langen Ausfallzeiten, inkonsistenter Reparaturqualität und erheblichem Schulungsaufwand.' },
  },
  solution: {
    heading: { EN: 'Our Solution', DE: 'Unsere Lösung' },
    body:    { EN: 'Norscope develops offline-capable augmented reality software that guides technicians step by step during real maintenance tasks. Instead of generic AR content, the software is configured individually for each customer\'s machines, processes, and safety requirements.', DE: 'Norscope entwickelt offline-fähige Augmented-Reality-Software, die Techniker Schritt für Schritt während echter Wartungsaufgaben führt. Anstelle von generischen AR-Inhalten wird die Software individuell für die Maschinen, Prozesse und Sicherheitsanforderungen jedes Kunden konfiguriert.' },
    items: {
      EN: ['Customer-specific AR workflows', 'Offline-first operation', 'Structured task guidance and validation'],
      DE: ['Kundenspezifische AR-Workflows', 'Offline-First-Betrieb', 'Strukturierte Aufgabenführung und Validierung'],
    },
  },
  mission: {
    heading: { EN: 'Our Mission', DE: 'Unsere Mission' },
    body:    { EN: 'To reduce industrial downtime and knowledge loss by providing technicians with clear, structured, and context-aware guidance directly at the machine.', DE: 'Industrielle Ausfallzeiten und Wissensverluste zu reduzieren, indem wir Technikern klare, strukturierte und kontextbewusste Führung direkt an der Maschine bieten.' },
  },
  team: {
    heading: { EN: 'Founding Team', DE: 'Gründungsteam' },
    siddhant: {
      role:  { EN: 'Co-Founder | Technology & Product', DE: 'Mitgründer | Technik & Produkt' },
      bio:   { EN: 'Mechanical engineering background with hands-on experience in industrial machines and intelligent manufacturing systems. Focused on building practical AR solutions grounded in real maintenance workflows.', DE: 'Maschinenbauingenieur mit praktischer Erfahrung in Industriemaschinen und intelligenten Fertigungssystemen. Fokussiert auf praxisorientierte AR-Lösungen, die auf realen Wartungsabläufen basieren.' },
    },
    sara: {
      role:  { EN: 'Co-Founder | Business & Operations', DE: 'Mitgründerin | Geschäftsentwicklung & Vertrieb' },
      bio:   { EN: 'Background in business strategy and operations with experience in startup execution and stakeholder coordination. Focused on translating industrial needs into scalable product and organizational structures.', DE: 'Hintergrund in Unternehmensstrategie und -betrieb mit Erfahrung in der Startup-Umsetzung und Stakeholder-Koordination. Fokussiert auf die Übersetzung industrieller Anforderungen in skalierbare Produkt- und Organisationsstrukturen.' },
    },
    wahib: {
      role:  { EN: 'Co-Founder | AI & System Architecture', DE: 'Mitgründer | KI und Systemarchitektur' },
      bio:   { EN: 'Wahib is a data scientist and systems architect with a passion for building scalable and efficient AI-driven solutions. With a strong background in software engineering and data analysis, he brings a unique blend of technical expertise and problem-solving skills to the team. Wahib\'s commitment to innovation and excellence makes him a valuable asset in our journey to create cutting-edge technology.', DE: 'Wahib ist Data Scientist und Systemarchitekt mit einer Leidenschaft für skalierbare und effiziente KI-Lösungen. Mit einem starken Hintergrund in Softwareentwicklung und Datenanalyse bringt er technische Expertise und Problemlösungskompetenz ins Team. Sein Anspruch an Innovation und Qualität unterstützt uns dabei, zukunftsweisende Technologie zu entwickeln.' },
    },
  },
  closing: {
    body:   { EN: 'Norscope is built with a focus on real industrial constraints, realistic deployment conditions, and measurable operational impact.', DE: 'Norscope wird mit Fokus auf reale industrielle Einschränkungen, realistische Einsatzbedingungen und messbaren operativen Nutzen entwickelt.' },
    button: { EN: 'Discuss a Pilot', DE: 'Pilotprojekt besprechen' },
  },
};

// ── Contact Page ──────────────────────────────────────────────────────────────
export const contactT = {
  hero: {
    heading:  { EN: 'Contact & Discuss a Pilot',  DE: 'Kontakt & Pilotprojekt besprechen' },
    body:     { EN: 'Get in touch to discuss your maintenance workflows or request a product demonstration.', DE: 'Nehmen Sie Kontakt auf, um Ihre Wartungsabläufe zu besprechen oder eine Produktdemonstration anzufordern.' },
  },
  form: {
    heading:        { EN: 'Request a Demo',            DE: 'Demo anfragen' },
    fullName:       { EN: 'Full Name',                 DE: 'Vollständiger Name' },
    company:        { EN: 'Company / Organization',    DE: 'Unternehmen / Organisation' },
    email:          { EN: 'Email Address',             DE: 'E-Mail-Adresse' },
    role:           { EN: 'Role / Position',           DE: 'Rolle / Position' },
    message:        { EN: 'Message',                   DE: 'Nachricht' },
    submit:         { EN: 'Submit Request',            DE: 'Anfrage senden' },
    sending:        { EN: 'Sending...',                DE: 'Wird gesendet...' },
    responseTime:   { EN: 'We will respond within a reasonable timeframe.', DE: 'Wir werden uns innerhalb einer angemessenen Frist bei Ihnen melden.' },
    successHeading: { EN: 'Message Sent Successfully!',DE: 'Nachricht erfolgreich gesendet!' },
    successBody:    { EN: 'Thank you for reaching out. We have received your request and will respond shortly.', DE: 'Vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.' },
    sendAnother:    { EN: 'Send Another Message',      DE: 'Weitere Nachricht senden' },
    errorFallback:  { EN: 'Something went wrong. Please try again.', DE: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.' },
    netError:       { EN: 'Network error. Please check your connection and try again.', DE: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.' },
  },
  directContact: {
    heading:  { EN: 'Direct Contact',  DE: 'Direktkontakt' },
    email:    { EN: 'Email',           DE: 'E-Mail' },
    location: { EN: 'Location',        DE: 'Standort' },
    country:  { EN: 'Germany',         DE: 'Deutschland' },
    note:     { EN: 'Currently operating from Germany', DE: 'Derzeit tätig aus Deutschland' },
  },
  whoFor: {
    heading: { EN: 'Who This Is For',    DE: 'Für wen ist das gedacht' },
    intro:   { EN: 'Typical inquiries include:', DE: 'Typische Anfragen umfassen:' },
    items: {
      EN: ['Requesting a product demo', 'Discussing pilot deployments', 'Academic or research collaboration', 'General questions about the platform'],
      DE: ['Produktdemo anfragen', 'Piloteinsätze besprechen', 'Akademische oder Forschungskooperation', 'Allgemeine Fragen zur Plattform'],
    },
  },
  closing: {
    body: { EN: 'Norscope focuses on practical industrial deployments and meaningful collaboration. Please provide relevant context so we can respond efficiently.', DE: 'Norscope konzentriert sich auf praktische industrielle Einsätze und sinnvolle Zusammenarbeit. Bitte geben Sie relevante Informationen an, damit wir effizient antworten können.' },
  },
};

// ── Product Page ──────────────────────────────────────────────────────────────
export const productT = {
  hero: {
    heading:  { EN: 'AR Software for Industrial Machine Maintenance', DE: 'AR-Software für die industrielle Maschinenwartung' },
    subHeading:{ EN: 'Offline-capable guidance for real maintenance and servicing tasks.', DE: 'Offline-fähige Führung für reale Wartungs- und Instandhaltungsaufgaben.' },
    body:     { EN: 'Configured for each customer\'s machines, workflows, and environment.', DE: 'Konfiguriert für die Maschinen, Workflows und Umgebungen jedes Kunden.' },
    button:   { EN: 'Discuss a Pilot', DE: 'Pilotprojekt besprechen' },
  },
  reality: {
    heading:  { EN: 'The Reality of Industrial Maintenance', DE: 'Die Realität der industriellen Wartung' },
    body:     { EN: 'Industrial maintenance still depends heavily on manuals, memory, and individual experience. This leads to slow execution, inconsistent quality, and difficult knowledge transfer.', DE: 'Die industrielle Wartung hängt noch stark von Handbüchern, Gedächtnis und individueller Erfahrung ab. Dies führt zu langsamer Ausführung, inkonsistenter Qualität und schwierigem Wissenstransfer.' },
    items: {
      EN: ['Manual document lookup during tasks', 'Knowledge stored in people, not systems', 'Limited standardization across sites'],
      DE: ['Manuelle Dokumentensuche während der Aufgaben', 'Wissen ist in Personen gespeichert, nicht in Systemen', 'Begrenzte Standardisierung über Standorte hinweg'],
    },
  },
  whatDoes: {
    heading:  { EN: 'What Norscope Does', DE: 'Was Norscope tut' },
    body:     { EN: 'Norscope guides technicians step by step at the machine with contextual instructions, visual references, and validation steps.', DE: 'Norscope führt Techniker Schritt für Schritt an der Maschine mit kontextuellen Anweisungen, visuellen Referenzen und Validierungsschritten.' },
    items: {
      EN: ['Visual task guidance instead of manual lookup', 'Structured workflows instead of ad-hoc decisions', 'Validation steps to reduce human error'],
      DE: ['Visuelle Aufgabenführung statt manueller Suche', 'Strukturierte Workflows statt Ad-hoc-Entscheidungen', 'Validierungsschritte zur Reduzierung menschlicher Fehler'],
    },
  },
  howWorks: {
    heading: { EN: 'How It Works', DE: 'So funktioniert es' },
    steps: {
      EN: [
        { title: 'Select Task',              desc: 'Choose machine and workflow.' },
        { title: 'Guided Execution',         desc: 'Follow contextual AR instructions.' },
        { title: 'Validation & Documentation', desc: 'Confirm steps and record execution.' },
        { title: 'Completion',               desc: 'Store results and sync when needed.' },
      ],
      DE: [
        { title: 'Aufgabe auswählen',           desc: 'Maschine und Workflow wählen.' },
        { title: 'Geführte Ausführung',          desc: 'Kontextuellen AR-Anweisungen folgen.' },
        { title: 'Validierung & Dokumentation',  desc: 'Schritte bestätigen und Ausführung aufzeichnen.' },
        { title: 'Abschluss',                    desc: 'Ergebnisse speichern und bei Bedarf synchronisieren.' },
      ],
    },
  },
  builtFor: {
    heading: { EN: 'Built for Industrial Environments', DE: 'Für industrielle Umgebungen entwickelt' },
    cards: {
      EN: [
        { title: 'Machine-Specific',    desc: 'Workflows configured for each customer\'s machines' },
        { title: 'Custom Procedures',   desc: 'Support for customer-specific maintenance protocols' },
        { title: 'Offline Operation',   desc: 'Fully functional without network connectivity' },
        { title: 'Smart Sync',          desc: 'Automatic synchronization when connectivity returns' },
      ],
      DE: [
        { title: 'Maschinenspezifisch', desc: 'Workflows konfiguriert für die Maschinen jedes Kunden' },
        { title: 'Individuelle Verfahren', desc: 'Unterstützung für kundenspezifische Wartungsprotokolle' },
        { title: 'Offline-Betrieb',     desc: 'Voll funktionsfähig ohne Netzwerkverbindung' },
        { title: 'Smart-Sync',          desc: 'Automatische Synchronisation sobald Konnektivität zurückkehrt' },
      ],
    },
  },
  designedFor: {
    heading:    { EN: 'What Norscope Is Designed For', DE: 'Wofür Norscope entwickelt wurde' },
    forTitle:   { EN: 'Designed for',     DE: 'Geeignet für' },
    notForTitle:{ EN: 'Not designed for', DE: 'Nicht geeignet für' },
    forItems: {
      EN: ['Industrial maintenance workflows', 'Technician guidance at the machine', 'Offline-capable operation', 'Customer-specific procedure support'],
      DE: ['Industrielle Wartungsabläufe', 'Technikerführung an der Maschine', 'Offline-fähiger Betrieb', 'Kundenspezifische Verfahrensunterstützung'],
    },
    notForItems: {
      EN: ['Generic AR content viewing', 'Consumer AR applications', 'Replacing engineering judgment', 'Cloud-dependent operation'],
      DE: ['Generisches AR-Content-Viewing', 'Consumer-AR-Anwendungen', 'Ersatz für ingenieurwissenschaftliches Urteilsvermögen', 'Cloud-abhängiger Betrieb'],
    },
  },
  impact: {
    heading:    { EN: 'Measurable Impact',  DE: 'Messbarer Nutzen' },
    body:       { EN: 'Norscope focuses on measurable operational improvements such as reduced downtime, faster onboarding, and fewer procedural errors. These metrics are derived using structured modeling and conservative assumptions.', DE: 'Norscope konzentriert sich auf messbare betriebliche Verbesserungen wie reduzierte Ausfallzeiten, schnelleres Onboarding und weniger Verfahrensfehler. Diese Kennzahlen werden mithilfe strukturierter Modellierung und konservativer Annahmen ermittelt.' },
    link:       { EN: 'See how we calculate impact', DE: 'Wie wir den Nutzen berechnen' },
  },
  closing: {
    body:    { EN: 'Interested in seeing how Norscope works in your environment?', DE: 'Möchten Sie sehen, wie Norscope in Ihrer Umgebung funktioniert?' },
    primary: { EN: 'Discuss a Pilot', DE: 'Pilotprojekt besprechen' },
    secondary:{ EN: 'Get in Touch',   DE: 'Kontakt aufnehmen' },
  },
};

// ── Solution Page ─────────────────────────────────────────────────────────────
export const solutionPageT = {
  hero: {
    heading: { EN: 'A Practical AR Platform for Industrial Maintenance', DE: 'Eine praxisorientierte AR-Plattform für die industrielle Wartung' },
    body:    { EN: 'Structured, offline-capable AR software for real maintenance tasks', DE: 'Strukturierte, offline-fähige AR-Software für reale Wartungsaufgaben' },
  },
  coreProblem: {
    heading: { EN: 'The Core Problem', DE: 'Das Kernproblem' },
    body:    { EN: 'Industrial maintenance operations face persistent challenges that impact efficiency, quality, and knowledge retention. Documentation is often inaccessible during work, expertise is concentrated in individuals rather than systems, and procedures vary inconsistently across locations.', DE: 'Industrielle Wartungsabläufe stehen vor dauerhaften Herausforderungen, die Effizienz, Qualität und Wissenserhalt beeinträchtigen. Dokumentationen sind während der Arbeit oft nicht zugänglich, Fachwissen ist in Personen statt in Systemen konzentriert, und Verfahren variieren inkonsistent zwischen Standorten.' },
    items: {
      EN: ['Critical information not available at point of work', 'High dependency on senior technicians', 'Inconsistent execution across teams and sites', 'Limited visibility into procedural adherence'],
      DE: ['Kritische Informationen am Arbeitsort nicht verfügbar', 'Hohe Abhängigkeit von erfahrenen Technikern', 'Inkonsistente Ausführung über Teams und Standorte', 'Begrenzte Transparenz bei der Einhaltung von Verfahren'],
    },
  },
  norsopesSolution: {
    heading: { EN: 'The Norscope Solution', DE: 'Die Norscope-Lösung' },
    body1:   { EN: 'Norscope is an augmented reality software platform designed specifically for industrial maintenance workflows. It provides technicians with structured, step-by-step guidance directly in their field of view while they work on machines.', DE: 'Norscope ist eine Augmented-Reality-Softwareplattform, die speziell für industrielle Wartungsabläufe entwickelt wurde. Sie bietet Technikern strukturierte, schrittweise Führung direkt in ihrem Sichtfeld während sie an Maschinen arbeiten.' },
    body2:   { EN: 'Rather than offering a generic AR viewer, Norscope is configured individually for each customer\'s specific machines, procedures, and operational requirements. The system is designed to function reliably offline, addressing the connectivity constraints common in industrial environments.', DE: 'Anstatt einen generischen AR-Viewer anzubieten, wird Norscope individuell für die spezifischen Maschinen, Verfahren und betrieblichen Anforderungen jedes Kunden konfiguriert. Das System ist für den zuverlässigen Offline-Betrieb ausgelegt und adressiert die Konnektivitätsbeschränkungen, die in industriellen Umgebungen üblich sind.' },
  },
  howSolutionWorks: {
    heading: { EN: 'How the Solution Works', DE: 'Wie die Lösung funktioniert' },
    cards: {
      EN: [
        { title: 'Task-Specific Guidance',  desc: 'Technicians receive step-by-step instructions tailored to the specific machine and maintenance task being performed.' },
        { title: 'Context Awareness',       desc: 'Visual references and contextual information are displayed at the appropriate point in the workflow, reducing manual document lookup.' },
        { title: 'Validation & Traceability',desc: 'Procedural steps are confirmed as completed, providing documentation of work performed and supporting quality assurance.' },
        { title: 'Offline Operation',       desc: 'The system operates without requiring continuous network connectivity, ensuring reliability on the shop floor.' },
      ],
      DE: [
        { title: 'Aufgabenspezifische Führung',  desc: 'Techniker erhalten Schritt-für-Schritt-Anweisungen, die auf die spezifische Maschine und die durchzuführende Wartungsaufgabe zugeschnitten sind.' },
        { title: 'Kontextbewusstsein',           desc: 'Visuelle Referenzen und Kontextinformationen werden am geeigneten Punkt im Workflow angezeigt, was die manuelle Dokumentensuche reduziert.' },
        { title: 'Validierung & Rückverfolgbarkeit', desc: 'Verfahrensschritte werden als abgeschlossen bestätigt, was die Dokumentation der durchgeführten Arbeit liefert und die Qualitätssicherung unterstützt.' },
        { title: 'Offline-Betrieb',              desc: 'Das System funktioniert ohne kontinuierliche Netzwerkkonnektivität und gewährleistet so Zuverlässigkeit in der Produktion.' },
      ],
    },
  },
  customSoftware: {
    heading: { EN: 'Custom Software per Customer', DE: 'Individuelle Software pro Kunde' },
    body1:   { EN: 'Industrial environments vary significantly in their equipment, procedures, safety requirements, and organizational structures. Norscope is therefore configured specifically for each customer rather than deployed as a generic solution.', DE: 'Industrieumgebungen unterscheiden sich erheblich in ihrer Ausrüstung, ihren Verfahren, Sicherheitsanforderungen und Organisationsstrukturen. Daher wird Norscope speziell für jeden Kunden konfiguriert und nicht als generische Lösung eingesetzt.' },
    body2:   { EN: 'This approach ensures that workflows align with existing maintenance procedures, terminology matches organizational standards, and validation steps reflect actual quality requirements.', DE: 'Dieser Ansatz stellt sicher, dass Workflows mit bestehenden Wartungsverfahren übereinstimmen, die Terminologie den Organisationsstandards entspricht und Validierungsschritte die tatsächlichen Qualitätsanforderungen widerspiegeln.' },
    items: {
      EN: ['Workflows based on customer-specific maintenance procedures', 'Integration with existing technical documentation and assets', 'Validation steps aligned with organizational quality standards'],
      DE: ['Workflows basierend auf kundenspezifischen Wartungsverfahren', 'Integration mit bestehender technischer Dokumentation und Assets', 'Validierungsschritte abgestimmt auf organisatorische Qualitätsstandards'],
    },
  },
  industrialReality: {
    heading: { EN: 'Designed for Industrial Reality', DE: 'Für die industrielle Realität entwickelt' },
    body:    { EN: 'Norscope is built to function in real industrial environments, accounting for the practical constraints and operational requirements of shop floor work.', DE: 'Norscope ist für den Einsatz in realen industriellen Umgebungen entwickelt und berücksichtigt die praktischen Einschränkungen und betrieblichen Anforderungen der Werksarbeit.' },
    sections: {
      EN: [
        { title: 'Offline-First Architecture',  desc: 'Many industrial facilities have limited or unreliable network connectivity in production areas. Norscope operates without requiring constant cloud connectivity, with synchronization occurring when network access is available.' },
        { title: 'Headset-Agnostic Platform',   desc: 'The platform supports multiple industrial AR headset models, allowing customers to select hardware that meets their specific operational, safety, and ergonomic requirements.' },
        { title: 'Robust and Usable',           desc: 'The interface is designed for use during physical maintenance work, with clear visual hierarchy, appropriate text sizing, and interaction patterns suited to industrial headset usage.' },
      ],
      DE: [
        { title: 'Offline-First-Architektur',   desc: 'Viele Industrieanlagen haben begrenzte oder unzuverlässige Netzwerkverbindungen in Produktionsbereichen. Norscope ist ohne kontinuierliche Cloud-Konnektivität betreibbar und synchronisiert, wenn Netzwerkzugang verfügbar ist.' },
        { title: 'Headset-agnostische Plattform', desc: 'Die Plattform unterstützt mehrere industrielle AR-Headset-Modelle und ermöglicht Kunden die Auswahl von Hardware, die ihren spezifischen betrieblichen, sicherheitstechnischen und ergonomischen Anforderungen entspricht.' },
        { title: 'Robust und benutzerfreundlich', desc: 'Die Benutzeroberfläche ist für den Einsatz bei körperlicher Wartungsarbeit ausgelegt, mit klarer visueller Hierarchie, geeigneten Textgrößen und Interaktionsmustern für industrielle Headset-Nutzung.' },
      ],
    },
  },
  resultingBenefits: {
    heading: { EN: 'Resulting Benefits', DE: 'Erzielte Vorteile' },
    intro:   { EN: 'Organizations implementing Norscope typically observe improvements in several operational areas:', DE: 'Organisationen, die Norscope implementieren, beobachten typischerweise Verbesserungen in mehreren Betriebsbereichen:' },
    items: {
      EN: [
        'More consistent execution of maintenance procedures across technicians',
        'Reduced time required to onboard new maintenance personnel',
        'Better documentation of work performed and steps completed',
        'Decreased dependency on specific individuals for critical procedures',
        'Improved visibility into procedural adherence and completion',
      ],
      DE: [
        'Konsistentere Ausführung von Wartungsverfahren durch Techniker',
        'Reduzierte Zeit für das Onboarding neuer Wartungsmitarbeiter',
        'Bessere Dokumentation der durchgeführten Arbeit und abgeschlossenen Schritte',
        'Geringere Abhängigkeit von bestimmten Personen für kritische Verfahren',
        'Verbesserte Transparenz bei der Einhaltung und Durchführung von Verfahren',
      ],
    },
  },
  closing: {
    body:    { EN: 'Learn more about how Norscope is implemented in industrial environments.', DE: 'Erfahren Sie mehr darüber, wie Norscope in industriellen Umgebungen implementiert wird.' },
    primary: { EN: 'View Product',      DE: 'Produkt ansehen' },
    secondary:{ EN: 'Discuss a Pilot', DE: 'Pilotprojekt besprechen' },
  },
};

// ── Impact & Methodology Page ──────────────────────────────────────────────────
export const impactT = {
  back:       { EN: 'Back',     DE: 'Zurück' },
  pageTitle:  { EN: 'Approach', DE: 'Ansatz' },
  pageSubtitle: { EN: 'A structured framework for evaluating operational improvement in industrial maintenance', DE: 'Ein strukturierter Rahmen zur Bewertung betrieblicher Verbesserungen in der industriellen Wartung' },
  disclaimer: { EN: 'All values shown are modeled estimates based on standard industrial maintenance processes and published benchmark ranges. Actual results depend on machine complexity, operator skill level, and workflow standardization.', DE: 'Alle gezeigten Werte sind modellierte Schätzungen basierend auf standardmäßigen industriellen Wartungsprozessen und veröffentlichten Benchmark-Bereichen. Tatsächliche Ergebnisse hängen von der Maschinenkomplexität, dem Qualifikationsniveau der Bediener und der Workflow-Standardisierung ab.' },

  section1: {
    label:    { EN: 'SECTION 1', DE: 'ABSCHNITT 1' },
    heading:  { EN: 'Baseline: Traditional Maintenance Workflow', DE: 'Ausgangslage: Traditioneller Wartungsworkflow' },
    subtitle: { EN: 'Current state of industrial maintenance operations before AR implementation', DE: 'Aktueller Stand industrieller Wartungsabläufe vor der AR-Implementierung' },
    overlayMTTR:    { EN: 'High MTTR',         DE: 'Hohe MTTR' },
    overlayErrors:  { EN: 'Manual Errors',     DE: 'Manuelle Fehler' },
    overlayExperts: { EN: 'Expert Dependency', DE: 'Expertenabhängigkeit' },
    challenges: { EN: 'Operational Challenges', DE: 'Betriebliche Herausforderungen' },
    cards: {
      EN: [
        { label: 'Extended repair times',  detail: 'Manual lookup, interpretation, and troubleshooting slow task completion.' },
        { label: 'Higher error risk',      detail: 'Critical steps may be skipped, repeated, or performed inconsistently.' },
        { label: 'Long onboarding cycles', detail: 'New technicians require more time to reach independent execution.' },
        { label: 'Inconsistent execution', detail: 'Procedures vary across operators, teams, and shifts.' },
      ],
      DE: [
        { label: 'Verlängerte Reparaturzeiten', detail: 'Manuelle Suche, Interpretation und Fehlerbehebung verlangsamen die Aufgabenerfüllung.' },
        { label: 'Höheres Fehlerrisiko',        detail: 'Kritische Schritte können übersprungen, wiederholt oder inkonsistent durchgeführt werden.' },
        { label: 'Lange Onboarding-Zyklen',     detail: 'Neue Techniker benötigen mehr Zeit zur unabhängigen Ausführung.' },
        { label: 'Inkonsistente Ausführung',    detail: 'Verfahren variieren zwischen Bedienern, Teams und Schichten.' },
      ],
    },
  },

  arIntervention: { EN: 'AR INTERVENTION', DE: 'AR-INTERVENTION' },

  section2: {
    label:    { EN: 'SECTION 2', DE: 'ABSCHNITT 2' },
    heading:  { EN: 'AR-Assisted Maintenance Workflow', DE: 'AR-unterstützter Wartungsworkflow' },
    subtitle: { EN: 'Norscope platform provides contextual, step-by-step guidance through optical AR smart glasses', DE: 'Die Norscope-Plattform bietet kontextuelle Schritt-für-Schritt-Führung über optische AR-Smartglasses' },
    capabilities: { EN: 'Core AR Capabilities', DE: 'Kern-AR-Fähigkeiten' },
    caps: {
      EN: [
        { label: 'Step-by-step visual guidance',  detail: 'Contextual instructions anchored to machine components' },
        { label: 'Component identification',       detail: 'Visual overlays highlight relevant parts and tools' },
        { label: 'Validation checkpoints',         detail: 'Mandatory confirmation gates at critical steps' },
        { label: 'Hands-free operation',           detail: 'Voice commands and gesture control' },
      ],
      DE: [
        { label: 'Schritt-für-Schritt-Sichtführung', detail: 'Kontextuelle Anweisungen verankert an Maschinenkomponenten' },
        { label: 'Komponentenidentifikation',          detail: 'Visuelle Einblendungen heben relevante Teile und Werkzeuge hervor' },
        { label: 'Validierungsprüfpunkte',             detail: 'Verbindliche Bestätigungstore an kritischen Schritten' },
        { label: 'Freihändiger Betrieb',               detail: 'Sprachbefehle und Gestensteuerung' },
      ],
    },
    voiceControl: { EN: 'Voice Control', DE: 'Sprachsteuerung' },
    handsFree:    { EN: 'Hands-Free',   DE: 'Freihändig' },
  },

  measuredImpact: { EN: 'MEASURED IMPACT', DE: 'GEMESSENE WIRKUNG' },

  section3: {
    label:    { EN: 'SECTION 3', DE: 'ABSCHNITT 3' },
    heading:  { EN: 'Illustrative Impact Benchmarks', DE: 'Illustrative Wirkungsbenchmarks' },
    subtitle: { EN: 'Published examples from industrial AR task-support studies', DE: 'Veröffentlichte Beispiele aus Industriestudien zur AR-Aufgabenunterstützung' },
    taskComplete: { EN: 'Task Complete', DE: 'Aufgabe abgeschlossen' },
    metricCards: {
      EN: [
        { label: 'Faster task completion',   detail: 'Peer-reviewed industrial repair-task study' },
        { label: 'Lower perceived workload', detail: 'Peer-reviewed industrial repair-task study' },
        { label: 'Less maintenance time',    detail: 'Industrial maintenance AR case study' },
        { label: 'Fewer errors',             detail: 'Industrial maintenance AR case study' },
      ],
      DE: [
        { label: 'Schnellere Aufgabenerfüllung',          detail: 'Peer-Review-Studie zu industriellen Reparaturaufgaben' },
        { label: 'Geringere wahrgen. Arbeitsbelastung',   detail: 'Peer-Review-Studie zu industriellen Reparaturaufgaben' },
        { label: 'Weniger Wartungszeit',                  detail: 'Industrielle Wartungs-AR-Fallstudie' },
        { label: 'Weniger Fehler',                        detail: 'Industrielle Wartungs-AR-Fallstudie' },
      ],
    },
    sourcesTitle: { EN: 'Sources', DE: 'Quellen' },
    source1:      { EN: 'Eversberg, L. et al. (2023), Evaluating digital work instructions with augmented reality versus paper-based documents for manual object-specific repair tasks in a case study with experienced workers. The International Journal of Advanced Manufacturing Technology. Reported 21% faster task completion and 26% lower perceived workload.', DE: 'Eversberg, L. et al. (2023), Evaluierung digitaler Arbeitsanweisungen mit Augmented Reality im Vergleich zu papierbasierten Dokumenten für manuelle objektspezifische Reparaturaufgaben in einer Fallstudie mit erfahrenen Arbeitern. The International Journal of Advanced Manufacturing Technology. Berichtet 21 % schnellere Aufgabenerfüllung und 26 % geringere wahrgenommene Arbeitsbelastung.' },
    source2:      { EN: 'Augmented Industrial Maintenance (AIM): A Case Study for Evaluating and Comparing with Paper and Video Media Supports. Reported 13% less maintenance time using AR glasses and 25% fewer errors than paper-based maintenance in the cited case-study summary.', DE: 'Augmented Industrial Maintenance (AIM): Eine Fallstudie zur Bewertung und zum Vergleich mit Papier- und Videomedienunterstützung. Berichtet 13 % weniger Wartungszeit mit AR-Brillen und 25 % weniger Fehler im Vergleich zur papierbasierten Wartung.' },
    disclaimer:   { EN: 'These figures are published reference examples from industrial AR studies and do not represent validated Norscope pilot results. Outcomes depend on workflow design, equipment, operator experience, and deployment conditions.', DE: 'Diese Zahlen sind veröffentlichte Referenzbeispiele aus industriellen AR-Studien und stellen keine validierten Norscope-Pilotergebnisse dar. Die Ergebnisse hängen von der Workflow-Gestaltung, der Ausrüstung, der Benutzererfahrung und den Einsatzbedingungen ab.' },
  },

  deploymentFactors: {
    heading:  { EN: 'What Shapes Deployment Impact', DE: 'Was den Einsatzerfolg beeinflusst' },
    subtitle: { EN: 'Operational outcomes depend on workflow structure, task complexity, operator experience, and deployment conditions.', DE: 'Betriebliche Ergebnisse hängen von der Workflow-Struktur, der Aufgabenkomplexität, der Benutzererfahrung und den Einsatzbedingungen ab.' },
    cards: {
      EN: [
        { title: 'Task Complexity',             desc: 'Complex, multi-step procedures create more room for guided support and error reduction.' },
        { title: 'Workflow Standardization',    desc: 'Repeatable and well-defined processes are easier to digitize and scale across teams.' },
        { title: 'Operator Experience',         desc: 'Structured guidance is especially valuable where onboarding time or skill variation is high.' },
        { title: 'Information Accessibility',   desc: 'The more a task depends on manuals, memory, or external lookup, the more contextual AR support can help.' },
        { title: 'Deployment Environment',      desc: 'Connectivity, noise, safety constraints, and physical access influence system design and usability.' },
        { title: 'Equipment Consistency',       desc: 'Standardized equipment and repeatable layouts are easier to support than highly variable machine setups.' },
      ],
      DE: [
        { title: 'Aufgabenkomplexität',         desc: 'Komplexe, mehrstufige Verfahren bieten mehr Raum für geführte Unterstützung und Fehlerreduktion.' },
        { title: 'Workflow-Standardisierung',   desc: 'Wiederholbare und klar definierte Prozesse lassen sich einfacher digitalisieren und auf Teams skalieren.' },
        { title: 'Bedienererfahrung',           desc: 'Strukturierte Führung ist besonders wertvoll, wenn die Einarbeitungszeit oder Qualifikationsvarianz hoch ist.' },
        { title: 'Informationszugänglichkeit',  desc: 'Je mehr eine Aufgabe von Handbüchern, Gedächtnis oder externer Suche abhängt, desto hilfreicher ist kontextueller AR-Support.' },
        { title: 'Einsatzumgebung',             desc: 'Konnektivität, Lärm, Sicherheitsbeschränkungen und physischer Zugang beeinflussen Systemdesign und Benutzerfreundlichkeit.' },
        { title: 'Gerätekonsistenz',            desc: 'Standardisierte Geräte und wiederkehrende Layouts lassen sich einfacher unterstützen als stark variierende Maschinenaufbauten.' },
      ],
    },
  },

  impactCards: {
    heading: { EN: '', DE: '' }, // Section has no text heading
    cards: {
      EN: [
        { title: 'Faster Repair Workflows',           desc: 'Reduced document lookup and more guided execution',       modal: 'repairs' },
        { title: 'Accelerated Technician Training',   desc: 'Structured guidance for faster task learning',            modal: 'training' },
        { title: 'Lower Execution Error Risk',        desc: 'Step-based workflows reduce procedural ambiguity',        modal: 'errors' },
        { title: 'System-Enforced Compliance',        desc: 'Traceable workflow steps and digital confirmations',      modal: 'compliance' },
      ],
      DE: [
        { title: 'Schnellere Reparaturworkflows',        desc: 'Weniger Dokumentensuche und geführtere Ausführung',    modal: 'repairs' },
        { title: 'Beschleunigte Technikerschulung',      desc: 'Strukturierte Führung für schnelleres Aufgabenlernen',  modal: 'training' },
        { title: 'Geringeres Ausführungsfehlerrisiko',   desc: 'Schrittbasierte Workflows reduzieren Verfahrensmehrdeutigkeit', modal: 'errors' },
        { title: 'Systemerzwungene Compliance',          desc: 'Nachvollziehbare Workflow-Schritte und digitale Bestätigungen', modal: 'compliance' },
      ],
    },
    viewModel: { EN: 'View model', DE: 'Modell anzeigen' },
  },

  pilotPlan: {
    heading: { EN: 'Pilot Validation Plan', DE: 'Pilot-Validierungsplan' },
    items: {
      EN: [
        'Measure baseline task duration per machine type',
        'Measure AR-assisted task duration',
        'Track training time to independent operation',
        'Record error frequency per job',
        'Track compliance step completion rate',
        'Compare deltas after 4, 8, and 12 weeks',
      ],
      DE: [
        'Basisaufgabendauer je Maschinentyp messen',
        'AR-unterstützte Aufgabendauer messen',
        'Schulungszeit bis zur eigenständigen Ausführung verfolgen',
        'Fehlerhäufigkeit je Auftrag erfassen',
        'Abschlussrate der Compliance-Schritte verfolgen',
        'Deltas nach 4, 8 und 12 Wochen vergleichen',
      ],
    },
  },

  // Modal content
  modals: {
    repairs: {
      title:    { EN: 'Repair Time Reduction – Illustrative Model', DE: 'Reparaturzeitreduktion – Illustratives Modell' },
      trad:     { EN: 'Traditional workflow', DE: 'Traditioneller Workflow' },
      tradItems:{ EN: ['Fault diagnosis', 'Manual document lookup', 'Interpretation of instructions', 'Repair execution', 'Rework or repeated checks'], DE: ['Fehlerdiagnose', 'Manuelle Dokumentensuche', 'Interpretation der Anweisungen', 'Reparaturdurchführung', 'Nacharbeit oder wiederholte Kontrollen'] },
      ar:       { EN: 'AR-assisted workflow', DE: 'AR-unterstützter Workflow' },
      arItems:  { EN: ['Visual diagnostic support', 'Contextual instructions at point of use', 'Guided execution', 'Reduced need for manual lookup', 'Fewer repeated checks'], DE: ['Visuelle Diagnoseunterstützung', 'Kontextuelle Anweisungen am Einsatzort', 'Geführte Ausführung', 'Geringerer Bedarf an manueller Suche', 'Weniger Wiederholungsprüfungen'] },
      published: { EN: 'Published indication', DE: 'Veröffentlichter Hinweis' },
      pubText:   { EN: 'Peer-reviewed industrial case studies report faster task completion with AR-assisted digital work instructions.', DE: 'Peer-reviewed industrielle Fallstudien berichten von schnellerer Aufgabenerledigung mit AR-unterstützten digitalen Arbeitsanweisungen.' },
      expected:  { EN: 'Expected impact', DE: 'Erwarteter Nutzen' },
      expText:   { EN: 'Reduced task time through faster diagnosis, less document handling, and more consistent execution.', DE: 'Reduzierte Aufgabenzeit durch schnellere Diagnose, weniger Dokumentenhandling und konsistentere Ausführung.' },
      conditions:{ EN: 'Conditions', DE: 'Voraussetzungen' },
      condItems: { EN: ['Procedures are digitized', 'Workflow steps are repeatable', 'Instructions are clear and machine-specific', 'Operators follow the guided process'], DE: ['Verfahren sind digitalisiert', 'Workflow-Schritte sind wiederholbar', 'Anweisungen sind klar und maschinenspezifisch', 'Bediener folgen dem geführten Prozess'] },
      footer:    { EN: 'This model illustrates directional operational impact based on workflow design logic and published industrial AR findings. Actual results depend on equipment type, workflow quality, operator experience, and deployment conditions.', DE: 'Dieses Modell veranschaulicht den richtungsweisenden betrieblichen Nutzen basierend auf Workflow-Designlogik und veröffentlichten industriellen AR-Erkenntnissen. Tatsächliche Ergebnisse hängen von Gerätetyp, Workflow-Qualität, Bedienererfahrung und Einsatzbedingungen ab.' },
    },
    training: {
      title:    { EN: 'Technician Training Acceleration – Capability Logic', DE: 'Beschleunigung der Technikerschulung – Fähigkeitslogik' },
      trad:     { EN: 'Traditional training', DE: 'Traditionelle Schulung' },
      tradItems:{ EN: ['Documentation study', 'Shadowing experienced staff', 'Supervised execution', 'Gradual independence'], DE: ['Dokumentationsstudium', 'Begleitung erfahrener Mitarbeiter', 'Beaufsichtigte Ausführung', 'Schrittweise Unabhängigkeit'] },
      ar:       { EN: 'AR-supported training', DE: 'AR-unterstützte Schulung' },
      arItems:  { EN: ['Guided walkthroughs', 'Contextual visual instructions', 'Step confirmation during execution', 'Reduced need for manual lookup', 'Reduced dependency on constant supervision'], DE: ['Geführte Walkthroughs', 'Kontextuelle visuelle Anweisungen', 'Schrittbestätigung während der Ausführung', 'Geringerer Bedarf an manueller Suche', 'Geringere Abhängigkeit von ständiger Aufsicht'] },
      published: { EN: 'Published indication', DE: 'Veröffentlichter Hinweis' },
      pubText:   { EN: 'Industrial AR training research indicates improved support for task learning and faster progression in structured workflows.', DE: 'Industrielle AR-Schulungsforschung zeigt verbesserte Unterstützung beim Aufgabenlernen und schnellere Progression in strukturierten Workflows.' },
      expected:  { EN: 'Expected impact', DE: 'Erwarteter Nutzen' },
      expText:   { EN: 'Faster progression toward independent task execution in structured maintenance environments.', DE: 'Schnelleres Erreichen eigenständiger Aufgabenausführung in strukturierten Wartungsumgebungen.' },
      conditions:{ EN: 'Conditions', DE: 'Voraussetzungen' },
      condItems: { EN: ['Procedures are standardized', 'Guidance content is well prepared', 'Repetitive task patterns exist', 'Supervisors use the system consistently'], DE: ['Verfahren sind standardisiert', 'Führungsinhalt ist gut vorbereitet', 'Repetitive Aufgabenmuster existieren', 'Vorgesetzte nutzen das System konsequent'] },
      footer:    { EN: 'This model illustrates directional operational impact based on workflow design logic and published industrial AR findings. Actual results depend on equipment type, workflow quality, operator experience, and deployment conditions.', DE: 'Dieses Modell veranschaulicht den richtungsweisenden betrieblichen Nutzen basierend auf Workflow-Designlogik und veröffentlichten industriellen AR-Erkenntnissen. Tatsächliche Ergebnisse hängen von Gerätetyp, Workflow-Qualität, Bedienererfahrung und Einsatzbedingungen ab.' },
    },
    errors: {
      title:    { EN: 'Human Error Reduction – Control Logic', DE: 'Reduzierung menschlicher Fehler – Kontrolllogik' },
      sources:  { EN: 'Common sources of error', DE: 'Häufige Fehlerquellen' },
      srcItems: { EN: ['Missed process steps', 'Incorrect part identification', 'Wrong tool or sequence selection', 'Inconsistent execution across operators'], DE: ['Übersprungene Prozessschritte', 'Falsche Teileidentifikation', 'Falsche Werkzeug- oder Sequenzauswahl', 'Inkonsistente Ausführung zwischen Bedienern'] },
      controls: { EN: 'Norscope control mechanisms', DE: 'Norscope-Kontrollmechanismen' },
      ctrlItems:{ EN: ['Step-by-step workflow guidance', 'Visual part and task confirmation', 'Mandatory step acknowledgment', 'Embedded sequence control'], DE: ['Schrittweise Workflow-Führung', 'Visuelle Teile- und Aufgabenbestätigung', 'Verpflichtende Schrittbestätigung', 'Eingebettete Sequenzkontrolle'] },
      published: { EN: 'Published indication', DE: 'Veröffentlichter Hinweis' },
      pubText:   { EN: 'Industrial AR studies report reduced execution errors in guided task environments, especially for structured and repeatable procedures.', DE: 'Industrielle AR-Studien berichten von reduzierten Ausführungsfehlern in geführten Aufgabenumgebungen, besonders bei strukturierten und wiederholbaren Verfahren.' },
      expected:  { EN: 'Expected impact', DE: 'Erwarteter Nutzen' },
      expText:   { EN: 'Lower execution error risk through guided workflows, clearer task context, and reduced procedural ambiguity.', DE: 'Geringeres Ausführungsfehlerrisiko durch geführte Workflows, klareren Aufgabenkontext und reduzierte Verfahrensmehrdeutigkeit.' },
      conditions:{ EN: 'Conditions', DE: 'Voraussetzungen' },
      condItems: { EN: ['Procedures are digitized correctly', 'Operators follow prompts', 'Hardware and recognition systems function reliably', 'Workflow design matches the real task'], DE: ['Verfahren sind korrekt digitalisiert', 'Bediener folgen den Hinweisen', 'Hardware und Erkennungssysteme funktionieren zuverlässig', 'Workflow-Design entspricht der realen Aufgabe'] },
      footer:    { EN: 'This model illustrates directional operational impact based on workflow design logic and published industrial AR findings. Actual results depend on equipment type, workflow quality, operator experience, and deployment conditions.', DE: 'Dieses Modell veranschaulicht den richtungsweisenden betrieblichen Nutzen basierend auf Workflow-Designlogik und veröffentlichten industriellen AR-Erkenntnissen. Tatsächliche Ergebnisse hängen von Gerätetyp, Workflow-Qualität, Bedienererfahrung und Einsatzbedingungen ab.' },
    },
    compliance: {
      title:    { EN: 'Compliance Enforcement – System Model', DE: 'Compliance-Durchsetzung – Systemmodell' },
      trad:     { EN: 'Traditional compliance:', DE: 'Traditionelle Compliance:' },
      tradItems:{ EN: ['Paper checklists', 'Manual signatures', 'Non-verifiable execution', 'Missing logs'], DE: ['Papierchecklisten', 'Manuelle Unterschriften', 'Nicht verifizierbare Ausführung', 'Fehlende Protokolle'] },
      system:   { EN: 'Norscope system:', DE: 'Norscope-System:' },
      sysItems: { EN: ['Mandatory workflow steps', 'Digital safety confirmations', 'Timestamped logs', 'Operator identification', 'Audit trail storage'], DE: ['Verbindliche Workflow-Schritte', 'Digitale Sicherheitsbestätigungen', 'Zeitgestempelte Protokolle', 'Bedieneridentifikation', 'Audit-Trail-Speicherung'] },
      result:   { EN: 'Result:', DE: 'Ergebnis:' },
      resultText: { EN: 'Compliance checks are enforced at every workflow step.', DE: 'Compliance-Prüfungen werden bei jedem Workflow-Schritt durchgesetzt.' },
      clarification: { EN: 'Clarification:', DE: 'Klarstellung:' },
      clarText:  { EN: 'This refers to system-enforced compliance, not human perfection.', DE: 'Dies bezieht sich auf systemerzwungene Compliance, nicht auf menschliche Perfektion.' },
    },
  },
};
