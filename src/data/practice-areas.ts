import type { PracticeArea } from '../types';

export const practiceAreas: PracticeArea[] = [
    {
        id: 'allgemeines-zivilrecht',
        name: 'Allgemeines Zivilrecht',
        slug: 'allgemeines-zivilrecht',
        description: 'Fundierte Beratung und Durchsetzung Ihrer zivilrechtlichen Ansprüche. Wir kämpfen für Ihr Recht im Alltag.',
        intro: 'Das Zivilrecht regelt die Rechtsbeziehungen zwischen Privatpersonen und Unternehmen. Ob Kaufvertrag, Werkvertrag oder Schadensersatz – wir sorgen dafür, dass Sie zu Ihrem Recht kommen.',
        icon: 'scale',
        problemTitle: 'Recht haben und Recht bekommen',
        problemDescription: 'Viele zivilrechtliche Auseinandersetzungen lassen sich außergerichtlich lösen. Wenn nötig, setzen wir Ihre Interessen aber auch mit Nachdruck vor Gericht durch.',
        servicesTitle: 'Unsere Leistungen im Zivilrecht',
        services: [
            'Prüfung und Gestaltung von Verträgen',
            'Durchsetzung von Gewährleistungsansprüchen',
            'Rücktritt und Widerruf von Verträgen',
            'Geltendmachung von Schadensersatz',
            'Forderungseinzug und Inkasso',
            'Abwehr unberechtigter Ansprüche'
        ],
        faq: [
            {
                question: 'Wie lange kann ich Ansprüche geltend machen?',
                answer: 'Die regelmäßige Verjährungsfrist beträgt drei Jahre. Sie beginnt am Schluss des Jahres, in dem der Anspruch entstanden ist und Sie davon Kenntnis erlangt haben.'
            },
            {
                question: 'Lohnt sich ein Anwalt bei geringem Streitwert?',
                answer: 'Das kommt darauf an. Oft übernimmt die Rechtsschutzversicherung die Kosten. Wir beraten Sie ehrlich zu den Kostenrisiken.'
            }
        ]
    },
    {
        id: 'agb',
        name: 'AGB (Allgemeine Geschäftsbedingungen)',
        slug: 'agb',
        description: 'Rechtssichere AGB für Ihr Unternehmen. Vermeiden Sie Abmahnungen durch professionelle Gestaltung.',
        intro: 'Allgemeine Geschäftsbedingungen sind das Fundament vieler Geschäftsbeziehungen. Fehlerhafte Klauseln können nicht nur unwirksam sein, sondern auch kostspielige Abmahnungen nach sich ziehen.',
        icon: 'file-text',
        problemTitle: 'Keine Angst vor dem Kleingedruckten',
        problemDescription: 'Wir erstellen individuelle, auf Ihr Geschäftsmodell zugeschnittene AGB und prüfen Ihre bestehenden Texte auf Herz und Nieren.',
        servicesTitle: 'Unsere Leistungen im AGB-Recht',
        services: [
            'Erstellung von AGB für Online-Shops',
            'AGB für Dienstleister und Handwerker',
            'Prüfung bestehender AGB',
            'Anpassung an aktuelle Rechtsprechung',
            'B2B und B2C Geschäftsbedingungen',
            'Abwehr von Abmahnungen'
        ],
        faq: [
            {
                question: 'Hafte ich für kopierte AGB?',
                answer: 'Ja, das Kopieren fremder AGB ist nicht nur urheberrechtlich problematisch, sondern birgt auch das Risiko, fehlerhafte Klauseln zu übernehmen. Maßgeschneiderte AGB schützen Sie besser.'
            }
        ]
    },
    {
        id: 'arbeitsrecht',
        name: 'Arbeitsrecht',
        slug: 'arbeitsrecht',
        description: 'Kompetente Beratung für Arbeitgeber und Arbeitnehmer. Kündigung, Abfindung und Arbeitsvertrag.',
        intro: 'Das Arbeitsrecht ist ständigen Änderungen unterworfen. Wir stehen Ihnen bei Kündigungen, Abmahnungen und Vertragsgestaltungen kompetent zur Seite – egal ob Arbeitgeber oder Arbeitnehmer.',
        icon: 'briefcase',
        problemTitle: 'Konflikte am Arbeitsplatz lösen',
        problemDescription: 'Eine Kündigung oder ein Streit im Arbeitsverhältnis belastet. Wir analysieren Ihre Situation schnell und zeigen Ihnen strategische Handlungsoptionen auf.',
        servicesTitle: 'Unsere Leistungen im Arbeitsrecht',
        services: [
            'Kündigungsschutzklagen',
            'Verhandlung von Abfindungen',
            'Prüfung und Erstellung von Arbeitsverträgen',
            'Arbeitszeugnis-Check',
            'Beratung bei Aufhebungsverträgen',
            'Rechte bei Krankheit und Urlaub'
        ],
        faq: [
            {
                question: 'Habe ich Anspruch auf eine Abfindung?',
                answer: 'Einen generellen gesetzlichen Anspruch gibt es nicht. Oft lässt sich eine Abfindung jedoch im Rahmen eines Kündigungsschutzprozesses oder Aufhebungsvertrags aushandeln.'
            },
            {
                question: 'Wie schnell muss ich bei einer Kündigung reagieren?',
                answer: 'Sehr schnell! Für die Kündigungsschutzklage haben Sie nur drei Wochen Zeit nach Zugang der Kündigung. Zögern Sie nicht.'
            }
        ]
    },
    {
        id: 'architektenrecht',
        name: 'Architektenrecht',
        slug: 'architektenrecht',
        description: 'Rechtliche Begleitung für Architekten und Bauherren. Honorar, Haftung und Urheberrecht.',
        intro: 'Bauprojekte sind komplex, und ebenso ist es das Architektenrecht. Wir beraten Architekten zur Honorarsicherung und Bauherren bei Mängeln oder Planungsfehlern.',
        icon: 'compass',
        problemTitle: 'Sicher planen und bauen',
        problemDescription: 'Streitigkeiten über Honorare oder Haftungsfragen können Bauprojekte lähmen. Wir sorgen für klare Verhältnisse und setzen Ihre Ansprüche durch.',
        servicesTitle: 'Unsere Leistungen im Architektenrecht',
        services: [
            'Prüfung von Architektenverträgen',
            'Durchsetzung von Honorarforderungen (HOAI)',
            'Haftung für Planungs- und Überwachungsfehler',
            'Urheberrecht des Architekten',
            'Vorzeitige Beendigung des Architektenvertrags',
            'Beweissicherung'
        ]
    },
    {
        id: 'autorecht',
        name: 'Autorecht',
        slug: 'autorecht',
        description: 'Hilfe bei Autokauf, Leasing und Reparatur. Mängelrechte, Unfall und Führerschein.',
        intro: 'Rund ums Auto kann viel passieren: Mängel beim Gebrauchtwagenkauf, Ärger mit der Werkstatt oder Probleme beim Leasing. Wir geben Gas für Ihr Recht.',
        icon: 'car',
        problemTitle: 'Ärger mit dem Fahrzeug?',
        problemDescription: 'Ob "Montagsauto" oder Tachomanipulation – wir prüfen Ihre Rechte auf Rücktritt, Minderung oder Schadensersatz und setzen sie gegenüber Händlern und Herstellern durch.',
        servicesTitle: 'Unsere Leistungen im Autorecht',
        services: [
            'Rücktritt vom Kaufvertrag',
            'Minderung des Kaufpreises',
            'Schadensersatz bei Unfallschäden',
            'Probleme mit der KFZ-Versicherung',
            'Abwehr von Reparaturkosten',
            'Leasingrückläufer'
        ]
    },
    {
        id: 'bank-kapitalmarktrecht',
        name: 'Bank- und Kapitalmarktrecht',
        slug: 'bank-kapitalmarktrecht',
        description: 'Schutz für Anleger und Bankkunden. Falschberatung, Darlehenswiderruf und Gebühren.',
        intro: 'Bankgeschäfte sind Vertrauenssache. Doch oft werden Anleger falsch beraten oder mit unzulässigen Gebühren belastet. Wir prüfen Ihre Ansprüche gegen Banken und Sparkassen.',
        icon: 'landmark',
        problemTitle: 'Ihr Geld ist Ihr Recht',
        problemDescription: 'Ob gescheiterte Kapitalanlage oder Probleme bei der Kreditfinanzierung – wir vertreten Anleger und Darlehensnehmer konsequent gegenüber Finanzinstituten.',
        servicesTitle: 'Unsere Leistungen im Bankrecht',
        services: [
            'Schadensersatz bei Falschberatung',
            'Widerruf von Darlehensverträgen',
            'Prüfung von Vorfälligkeitsentschädigungen',
            'Rückforderung unzulässiger Bankgebühren',
            'Online-Banking Betrugsfälle',
            'Kündigung von Bausparverträgen'
        ],
        faq: [
            {
                question: 'Wann liegt eine Falschberatung vor?',
                answer: 'Wenn die Bank Sie nicht über alle Risiken und Provisionen (Kick-Backs) aufgeklärt hat oder die Anlage nicht zu Ihren Zielen passte.'
            }
        ]
    },
    {
        id: 'bau-architektenrecht',
        name: 'Bau- und Architektenrecht',
        slug: 'bau-architektenrecht',
        description: 'Baurecht für Bauherren und Unternehmer. Von der Planung bis zur Abnahme.',
        intro: 'Am Bau geht es oft hektisch zu. Rechtsstreitigkeiten um Mängel, Termine oder Zahlungen können Projekte gefährden. Wir sorgen für rechtliche Klarheit.',
        icon: 'hard-hat',
        problemTitle: 'Bauen ohne Ärger',
        problemDescription: 'Baumängel sind der häufigste Streitgrund. Wir sichern Beweise, fordern Nacherfüllung und setzen Ihre Schadensersatzansprüche durch.',
        servicesTitle: 'Unsere Leistungen im Baurecht',
        services: [
            'Bauvertragsrecht nach BGB und VOB/B',
            'Baubegleitende Rechtsberatung',
            'Durchsetzung von Mängelansprüchen',
            'Vergütungsklagen für Handwerker',
            'Selbständiges Beweisverfahren',
            'Bauprozesse'
        ]
    },
    {
        id: 'bussgeldsachen',
        name: 'Bußgeldsachen',
        slug: 'bussgeldsachen',
        description: 'Einspruch gegen Bußgeldbescheide. Fahrverbot, Punkte und Blitzer.',
        intro: 'Ein Bußgeldbescheid flattert schnell ins Haus. Doch nicht jeder Vorwurf ist berechtigt. Messfehler oder Formfehler können zur Einstellung führen.',
        icon: 'siren',
        problemTitle: 'Führerschein in Gefahr?',
        problemDescription: 'Ein Fahrverbot kann die berufliche Existenz gefährden. Wir prüfen Ihren Bußgeldbescheid auf Fehler und kämpfen für den Erhalt Ihrer Fahrerlaubnis.',
        servicesTitle: 'Hilfe bei Bußgeldern',
        services: [
            'Einspruch gegen Bußgeldbescheide',
            'Akteneinsicht bei Blitzern',
            'Vermeidung von Fahrverboten',
            'Punkte in Flensburg reduzieren',
            'Rotlicht- und Abstandsverstöße',
            'Handy am Steuer'
        ],
        faq: [
            {
                question: 'Lohnt sich ein Einspruch?',
                answer: 'Oft ja. Messgeräte können fehlerhaft sein oder Fristen wurden versäumt. Eine Prüfung der Ermittlungsakte bringt Klarheit.'
            }
        ]
    },
    {
        id: 'darlehensrecht',
        name: 'Darlehensrecht',
        slug: 'darlehensrecht',
        description: 'Rechtssicherheit bei Krediten. Zinsen, Kündigung und Sicherheiten.',
        intro: 'Kreditverträge sind oft kompliziert und unübersichtlich. Wir prüfen Ihre Verträge und helfen Ihnen, sich gegen ungerechtfertigte Forderungen zu wehren.',
        icon: 'percent',
        problemTitle: 'Faire Kreditkonditionen',
        problemDescription: 'Banken nutzen ihre Machtposition oft aus. Wir prüfen Zinsanpassungsklauseln, Bearbeitungsgebühren und Kündigungen auf ihre Rechtmäßigkeit.',
        servicesTitle: 'Unsere Leistungen im Darlehensrecht',
        services: [
            'Widerruf von Verbraucherdarlehen',
            'Rückforderung von Bearbeitungsgebühren',
            'Prüfung von Zinsanpassungen',
            'Kündigung von Darlehensverträgen',
            'Umschuldung und Ablösung',
            'Verwertung von Sicherheiten'
        ]
    },
    {
        id: 'erbrecht',
        name: 'Erbrecht',
        slug: 'erbrecht',
        description: 'Testament, Pflichtteil, Erbschaftssteuer und Nachlassplanung. Wir sichern Ihr Vermögen für die nächste Generation.',
        intro: 'Das Erbrecht ist eine komplexe Materie, bei der Fehler teuer werden können. Wir beraten Sie vorausschauend bei der Gestaltung von Testamenten und Erbverträgen und stehen Ihnen im Erbfall bei der Durchsetzung Ihrer Ansprüche kompetent zur Seite.',
        icon: 'scroll',
        problemTitle: 'Erben und Vererben ohne Streit',
        problemDescription: 'Die richtige Nachlassplanung vermeidet Streitigkeiten in der Familie und sichert Ihr Lebenswerk. Oft sind gesetzliche Regelungen nicht ausreichend oder führen zu ungewollten Ergebnissen.',
        servicesTitle: 'Unsere Leistungen im Erbrecht',
        services: [
            'Gestaltung von Testamenten und Erbverträgen',
            'Geltendmachung von Pflichtteilsansprüchen',
            'Auseinandersetzung von Erbengemeinschaften',
            'Erbschaftssteuerliche Optimierung',
            'Unternehmensnachfolge',
            'Vorsorgevollmachten und Patientenverfügungen'
        ],
        faq: [
            {
                question: 'Brauche ich zwingend ein Testament?',
                answer: 'Nicht zwingend, aber oft ratsam. Ohne Testament gilt die gesetzliche Erbfolge, die nicht immer den persönlichen Wünschen entspricht (z.B. bei unverheirateten Paaren).'
            },
            {
                question: 'Wann verjährt der Pflichtteil?',
                answer: 'Der Pflichtteilsanspruch verjährt in der Regel drei Jahre nach Ende des Jahres, in dem der Anspruchsberechtigte vom Erbfall und der beeinträchtigenden Verfügung Kenntnis erlangt hat.'
            }
        ]
    },
    {
        id: 'fahrerlaubnisrecht',
        name: 'Fahrerlaubnisrecht',
        slug: 'fahrerlaubnisrecht',
        description: 'Führerschein in Gefahr? Hilfe bei Entzug, MPU und Probezeit.',
        intro: 'Der Verlust des Führerscheins trifft viele hart. Wir helfen Ihnen, den Entzug zu vermeiden oder die Fahrerlaubnis schnellstmöglich wiederzuerlangen.',
        icon: 'credit-card', // Using credit-card as a proxy for license card, or maybe 'user-check'
        problemTitle: 'Ohne Führerschein?',
        problemDescription: 'Ob Alkohol am Steuer, zu viele Punkte oder Drogen – die Behörden greifen hart durch. Wir prüfen die Rechtmäßigkeit der Maßnahmen.',
        servicesTitle: 'Unsere Leistungen im Fahrerlaubnisrecht',
        services: [
            'Vermeidung der Entziehung der Fahrerlaubnis',
            'Beratung zur MPU (Medizinisch-Psychologische Untersuchung)',
            'Führerschein auf Probe',
            'EU-Führerschein Probleme',
            'Wiedererteilung der Fahrerlaubnis',
            'Verkürzung der Sperrfrist'
        ]
    },
    {
        id: 'familienrecht',
        name: 'Familienrecht',
        slug: 'familienrecht',
        description: 'Scheidung, Unterhalt, Sorgerecht und Vermögensauseinandersetzung. Einfühlsame Beratung in schwierigen Zeiten.',
        intro: 'Familienrechtliche Auseinandersetzungen sind oft emotional belastend. Wir bieten Ihnen nicht nur juristische Expertise, sondern auch das nötige Fingerspitzengefühl, um in dieser Situation tragfähige Lösungen zu finden.',
        icon: 'users',
        problemTitle: 'Rechtliche Klarheit für Ihre Familie',
        problemDescription: 'Ob Ehescheidung, Unterhalt oder Sorgerecht – wir vertreten Ihre Interessen konsequent und lösungsorientiert. Unser Ziel ist es, Rosenkriege zu vermeiden, aber Ihre Rechte, wenn nötig, mit Nachdruck durchzusetzen.',
        servicesTitle: 'Unsere Leistungen im Familienrecht',
        services: [
            'Ehescheidung und Folgesachen',
            'Kindes- und Ehegattenunterhalt',
            'Sorge- und Umgangsrecht',
            'Zugewinnausgleich und Vermögensauseinandersetzung',
            'Eheverträge und Trennungsvereinbarungen',
            'Adoptionsrecht'
        ],
        faq: [
            {
                question: 'Wie läuft eine Scheidung ab?',
                answer: 'Nach einem Trennungsjahr kann der Scheidungsantrag beim Familiengericht eingereicht werden. Wir begleiten Sie durch das gesamte Verfahren.'
            },
            {
                question: 'Wie wird der Unterhalt berechnet?',
                answer: 'Der Unterhalt richtet sich nach der Düsseldorfer Tabelle und den individuellen Einkommensverhältnissen. Wir führen für Sie präzise Berechnungen durch.'
            }
        ]
    },
    {
        id: 'gesellschaftsrecht',
        name: 'Gesellschaftsrecht',
        slug: 'gesellschaftsrecht',
        description: 'Recht für Unternehmen. Gründung, Geschäftsführer und Gesellschafterstreit.',
        intro: 'Von der Gründung bis zur Nachfolge: Wir begleiten Ihr Unternehmen in allen rechtlichen Lebenslagen. Strategisch und weitsichtig.',
        icon: 'briefcase',
        problemTitle: 'Das Unternehmen rechtlich absichern',
        problemDescription: 'Streit unter Gesellschaftern oder Haftungsrisiken für Geschäftsführer können existenzbedrohend sein. Wir schaffen klare vertragliche Grundlagen.',
        servicesTitle: 'Unsere Leistungen im Gesellschaftsrecht',
        services: [
            'Wahl der Rechtsform (GmbH, KG, GbR etc.)',
            'Gründung von Gesellschaften',
            'Gestaltung von Gesellschaftsverträgen',
            'Beratung und Vertretung bei Gesellschafterstreitigkeiten',
            'Geschäftsführeranstellungsverträge',
            'Unternehmensverkauf und M&A'
        ],
        faq: [
            {
                question: 'Hafte ich als Geschäftsführer persönlich?',
                answer: 'Grundsätzlich haftet die GmbH. Bei Pflichtverletzungen kann aber auch der Geschäftsführer persönlich in Regress genommen werden. Wir beraten zur Haftungsvermeidung.'
            }
        ]
    },
    {
        id: 'handelsrecht',
        name: 'Handelsrecht',
        slug: 'handelsrecht',
        description: 'Recht der Kaufleute. Vertrieb, HGB und internationale Geschäfte.',
        intro: 'Im Geschäftsverkehr gelten besondere Spielregeln. Wir unterstützen Kaufleute und Handelsvertreter bei der Gestaltung ihrer Geschäftsbeziehungen.',
        icon: 'shopping-bag',
        problemTitle: 'Sicher Handeln',
        problemDescription: 'Handelsvertreterausgleich, Wettbewerbsverbote oder Lieferverträge – wir kennen die Tücken des Handelsrechts.',
        servicesTitle: 'Unsere Leistungen im Handelsrecht',
        services: [
            'Handelsvertreterrecht',
            'Vertriebsrecht und Vertragshändler',
            'UN-Kaufrecht',
            'Handelskauf',
            'Durchsetzung von Provisionsansprüchen',
            'Wettbewerbsverbote'
        ]
    },
    {
        id: 'immobilienrecht',
        name: 'Immobilienrecht',
        slug: 'immobilienrecht',
        description: 'Kauf und Verkauf von Immobilien. Sicher ins Eigenheim oder die Kapitalanlage.',
        intro: 'Der Kauf einer Immobilie ist oft die größte Investition im Leben. Wir prüfen Kaufverträge und beraten Sie zu allen Fragen rund um Grund und Boden.',
        icon: 'home',
        problemTitle: 'Immobilien sicher kaufen',
        problemDescription: 'Versteckte Mängel oder unklare Grundbucheinträge können teuer werden. Sparen Sie nicht an der rechtlichen Prüfung.',
        servicesTitle: 'Unsere Leistungen im Immobilienrecht',
        services: [
            'Prüfung von Grundstückskaufverträgen',
            'Grundbuchrecht',
            'Nachbarrecht',
            'Dingliche Rechte (Wohnrecht, Nießbrauch)',
            'Wohnungseigentumsrecht (WEG)',
            'Zwangsversteigerung'
        ]
    },
    {
        id: 'inkasso',
        name: 'Inkasso',
        slug: 'inkasso',
        description: 'Effektives Forderungsmanagement. Wir sorgen für Liquidität.',
        intro: 'Offene Forderungen sind ärgerlich und gefährden die Liquidität. Wir übernehmen das komplette Mahnwesen für Sie – schnell, konsequent und kosteneffizient.',
        icon: 'coins',
        problemTitle: 'Kunde zahlt nicht?',
        problemDescription: 'Warten Sie nicht zu lange. Je früher Sie reagieren, desto höher die Erfolgschancen. Wir prüfen die Bonität und leiten sofort Maßnahmen ein.',
        servicesTitle: 'Unser Inkasso-Service',
        services: [
            'Außergerichtliche Mahnung',
            'Gerichtliches Mahnverfahren',
            'Zwangsvollstreckung',
            'Pfändung (Konto, Lohn etc.)',
            'Ratenzahlungsvereinbarungen',
            'Überwachung titulierter Forderungen'
        ]
    },
    {
        id: 'internetrecht',
        name: 'Internetrecht',
        slug: 'internetrecht',
        description: 'Rechtssicher im Netz. Datenschutz, E-Commerce und Medienrecht.',
        intro: 'Das Internet wandelt sich schnell – und mit ihm die Rechtslage. Wir helfen Ihnen bei Abmahnungen, Datenschutzverstößen oder Problemen im Online-Handel.',
        icon: 'globe',
        problemTitle: 'Rechtsstreit im Internet?',
        problemDescription: 'Eine negative Bewertung oder eine Abmahnung wegen "Filesharing"? Wir sorgen dafür, dass Sie sich im digitalen Raum sicher bewegen.',
        servicesTitle: 'Unsere Leistungen im Internetrecht',
        services: [
            'Abwehr von Filesharing-Abmahnungen',
            'Löschung negativer Bewertungen',
            'Datenschutzerklärungen und Impressum',
            'Urheberrecht im Internet',
            'Domainrecht',
            'Social Media Recht'
        ]
    },
    {
        id: 'kapitalanlagen',
        name: 'Kapitalanlagen',
        slug: 'kapitalanlagen',
        description: 'Schutz für geschädigte Anleger. Falschberatung und Prospekthaftung.',
        intro: 'Hohe Verluste statt sicherer Rendite? Oft wurden Risiken verschwiegen. Wir prüfen Ihre Ansprüche auf Schadensersatz gegen Berater und Banken.',
        icon: 'trending-down',
        problemTitle: 'Geldanlage fehlgeschlagen?',
        problemDescription: 'Viele Kapitalanlagen am "Grauen Kapitalmarkt" sind hochriskant. Wir helfen Ihnen, Ihr investiertes Kapital zu retten.',
        servicesTitle: 'Unsere Leistungen im Kapitalanlagerecht',
        services: [
            'Schadensersatz wegen Falschberatung',
            'Prospekthaftung',
            'Rückabwicklung von Schiffs- und Immobilienfonds',
            'Betrugsfälle (z.B. Krypto-Betrug)',
            'Vertretung in Musterverfahren (KapMuG)',
            'Insolvenzrechtliche Anfechtung'
        ]
    },
    {
        id: 'kaufrecht',
        name: 'Kaufrecht',
        slug: 'kaufrecht',
        description: 'Ihr Recht beim Kauf. Mängel, Garantie und Rücktritt.',
        intro: 'Gekauft ist gekauft? Nicht, wenn die Ware mangelhaft ist. Wir setzen Ihre Gewährleistungsrechte beim Autokauf, Möbelkauf oder Online-Shopping durch.',
        icon: 'shopping-cart',
        problemTitle: 'Mangelhafte Ware erhalten?',
        problemDescription: 'Verkäufer verweigern oft die Rücknahme oder Reparatur. Wir zeigen Ihnen, wie Sie effektiv zu Ihrem Recht kommen.',
        servicesTitle: 'Unsere Leistungen im Kaufrecht',
        services: [
            'Rücktritt vom Kaufvertrag',
            'Minderung des Kaufpreises',
            'Schadensersatz statt der Leistung',
            'Nacherfüllung (Reparatur oder Neulieferung)',
            'Verbraucherwiderrufsrecht',
            'Garantieansprüche'
        ]
    },
    {
        id: 'maklerrecht',
        name: 'Maklerrecht',
        slug: 'maklerrecht',
        description: 'Provisionsansprüche und Maklerverträge. Für Makler und Kunden.',
        intro: 'Wann ist eine Provision verdient? Und wann haftet der Makler? Wir beraten Immobilienmakler und deren Kunden bei allen Streitigkeiten.',
        icon: 'key',
        problemTitle: 'Streit um die Courtage?',
        problemDescription: 'Oft ist unklar, ob ein Maklervertrag zustande kam oder ob die Tätigkeit ursächlich war. Wir klären die Rechtslage schnell und präzise.',
        servicesTitle: 'Unsere Leistungen im Maklerrecht',
        services: [
            'Durchsetzung von Provisionsansprüchen',
            'Abwehr unberechtigter Forderungen',
            'Prüfung von Maklerverträgen',
            'Reservierungsgebühren',
            'Haftung für falsche Exposé-Angaben',
            'Wettbewerbsrecht für Makler'
        ]
    },
    {
        id: 'mietrecht',
        name: 'Mietrecht – privat und gewerblich',
        slug: 'mietrecht',
        description: 'Mietrecht für Vermieter und Mieter. Kündigung, Räumung und Mängel.',
        intro: 'Das Mietrecht birgt viel Konfliktpotenzial. Wir vertreten Eigentümer und Mieter gleichermaßen engagiert – im Wohnraum- wie im Gewerbemietrecht.',
        icon: 'home',
        problemTitle: 'Konflikt im Mietverhältnis?',
        problemDescription: 'Eine Kündigung wegen Eigenbedarf oder Streit um Schimmel in der Wohnung? Wir kennen die aktuelle Rechtsprechung und Ihre Chancen.',
        servicesTitle: 'Unsere Leistungen im Mietrecht',
        services: [
            'Kündigung und Räumungsklagen',
            'Abwehr von Kündigungen',
            'Mietminderung bei Mängeln',
            'Prüfung von Betriebskostenabrechnungen',
            'Schönheitsreparaturen und Kaution',
            'Gewerbemietverträge'
        ],
        faq: [
            {
                question: 'Wann darf der Vermieter kündigen?',
                answer: 'Nur bei berechtigtem Interesse (z.B. Eigenbedarf) oder Vertragsverletzungen (z.B. Zahlungsverzug). Eine Kündigung "einfach so" ist im Wohnraummietrecht ausgeschlossen.'
            }
        ]
    },
    {
        id: 'pflichtteilsrecht',
        name: 'Pflichtteilsrecht',
        slug: 'pflichtteilsrecht',
        description: 'Ihr Anspruch auf das Erbe. Pflichtteil berechnen und durchsetzen.',
        intro: 'Werden Ehepartner oder Kinder enterbt, steht ihnen oft ein Pflichtteil zu. Die Berechnung ist komplex, besonders bei Schenkungen zu Lebzeiten.',
        icon: 'calculator',
        problemTitle: 'Enterbt – was nun?',
        problemDescription: 'Sie wurden im Testament übergangen? Wir prüfen Ihre Pflichtteilsansprüche, verlangen Auskunft über den Nachlasswert und setzen Ihre Forderung durch.',
        servicesTitle: 'Unsere Leistungen im Pflichtteilsrecht',
        services: [
            'Berechnung von Pflichtteilsansprüchen',
            'Auskunftsklagen gegen Erben',
            'Pflichtteilsergänzungsansprüche bei Schenkungen',
            'Wertermittlung von Immobilien und Firmen',
            'Abwehr unberechtigter Pflichtteilsforderungen',
            'Pflichtteilsverzicht'
        ]
    },
    {
        id: 'reiserecht',
        name: 'Reiserecht',
        slug: 'reiserecht',
        description: 'Mängel im Urlaub? Flugverspätung, Storno und Reisepreisminderung.',
        intro: 'Der Traumurlaub wird zum Albtraum? Baustellenlärm, schmutzige Zimmer oder Flugausfälle müssen Sie nicht hinnehmen. Wir fordern Ihr Geld zurück.',
        icon: 'plane',
        problemTitle: 'Reisearger statt Erholung?',
        problemDescription: 'Veranstalter weigern sich oft, berechtigte Mängel anzuerkennen. Wir kennen die "Frankfurter Tabelle" und setzen Ihre Minderung durch.',
        servicesTitle: 'Unsere Leistungen im Reiserecht',
        services: [
            'Reisemängelanzeige und Minderung',
            'Entschädigung bei Flugverspätung und Annullierung',
            'Schadensersatz wegen vertaner Urlaubszeit',
            'Reiserücktritt und Stornokosten',
            'Probleme mit Reiserücktrittsversicherungen',
            'Insolvenz des Reiseveranstalters'
        ]
    },
    {
        id: 'schadensersatz',
        name: 'Schadensersatz',
        slug: 'schadensersatz',
        description: 'Ersatz für materielle und immaterielle Schäden. Wir holen, was Ihnen zusteht.',
        intro: 'Wer einen Schaden verursacht, muss dafür geradestehen. Ob Sachschaden, Personenschaden oder Vermögensschaden – wir beziffern Ihre Ansprüche exakt.',
        icon: 'umbrella',
        problemTitle: 'Geschädigt – wer zahlt?',
        problemDescription: 'Versicherungen versuchen oft, Zahlungen zu kürzen oder zu verweigern. Wir lassen uns nicht abwimmeln und kämpfen für Ihren vollen Schadensersatz.',
        servicesTitle: 'Unsere Leistungen im Schadensersatzrecht',
        services: [
            'Verkehrsunfallabwicklung',
            'Geltendmachung von Sachschäden',
            'Nutzungsausfall und Mietwagenkosten',
            'Verdienstausfall und Haushaltsführungsschaden',
            'Schadensersatz bei Vertragsverletzung',
            'Haftpflichtschäden'
        ]
    },
    {
        id: 'scheidungen',
        name: 'Scheidungen',
        slug: 'scheidungen',
        description: 'Einfühlsame Begleitung durch das Scheidungsverfahren. Einvernehmlich oder streitig.',
        intro: 'Eine Scheidung ist ein rechtlicher Schnitt, der gut vorbereitet sein will. Wir sorgen für ein faires Verfahren und klären alle Folgesachen.',
        icon: 'heart-crack',
        problemTitle: 'Scheidung – und jetzt?',
        problemDescription: 'Wer bekommt das Haus? Was passiert mit der Rente? Wir klären diese Fragen frühzeitig, um Rosenkriege zu vermeiden.',
        servicesTitle: 'Unsere Leistungen bei Scheidungen',
        services: [
            'Einreichung des Scheidungsantrags',
            'Durchführung einvernehmlicher Scheidungen',
            'Vertretung in streitigen Scheidungsverfahren',
            'Versorgungsausgleich (Rente)',
            'Scheidungsfolgenvereinbarungen',
            'Online-Scheidung'
        ]
    },
    {
        id: 'schmerzensgeld',
        name: 'Schmerzensgeld',
        slug: 'schmerzensgeld',
        description: 'Entschädigung für Schmerzen und Leiden. Unfall, Kunstfehler oder Angriff.',
        intro: 'Kein Geld der Welt macht Gesundheit wieder gut. Aber Schmerzensgeld sorgt für einen Ausgleich und Genugtuung bei erlittenen Verletzungen.',
        icon: 'activity',
        problemTitle: 'Schmerzen erlitten?',
        problemDescription: 'Die Höhe des Schmerzensgeldes ist oft Ermessessache. Mit unserer Erfahrung und Datenbankzugriff erzielen wir für Sie das bestmögliche Ergebnis.',
        servicesTitle: 'Unsere Leistungen beim Schmerzensgeld',
        services: [
            'Berechnung der Schmerzensgeldhöhe',
            'Verkehrsunfälle mit Personenschaden',
            'Arzthaftung und Behandlungsfehler',
            'Körperverletzung und Schockschäden',
            'Hundebisse und Tierhalterhaftung',
            'Schmerzensgeldrenten'
        ]
    },
    {
        id: 'steuerrecht',
        name: 'Steuerrecht',
        slug: 'steuerrecht',
        description: 'Rechtssicherheit im Steuer-Dschungel. Einspruch und Klage.',
        intro: 'Steuerbescheide sind oft fehlerhaft. Wir prüfen Ihre Bescheide und legen Einspruch ein – damit Sie nicht mehr zahlen als nötig.',
        icon: 'file-spreadsheet',
        problemTitle: 'Ärger mit dem Finanzamt?',
        problemDescription: 'Das Steuerrecht ist komplex und ändert sich ständig. Wir wahren Ihre Rechte gegenüber den Finanzbehörden und vor Gericht.',
        servicesTitle: 'Unsere Leistungen im Steuerrecht',
        services: [
            'Einspruch gegen Steuerbescheide',
            'Klage vor dem Finanzgericht',
            'Aussetzung der Vollziehung',
            'Haftungsbescheide für Geschäftsführer',
            'Begleitung bei Betriebsprüfungen',
            'Steuerliche Gestaltungsberatung'
        ]
    },
    {
        id: 'strafrecht',
        name: 'Strafrecht',
        slug: 'strafrecht',
        description: 'Engagierte Strafverteidigung. Schweigen ist Gold – reden Sie mit uns.',
        intro: 'Ein Strafverfahren belastet enorm. Je früher Sie uns einschalten, desto besser können wir den Verfahrensgang beeinflussen. Wir kämpfen für Ihre Unschuld oder ein mildes Urteil.',
        icon: 'gavel',
        problemTitle: 'Vorladung oder Anklage erhalten?',
        problemDescription: 'Machen Sie keine Angaben bei der Polizei ohne anwaltlichen Rat! Wir beantragen Akteneinsicht und entwickeln die passende Verteidigungsstrategie.',
        servicesTitle: 'Unsere Leistungen im Strafrecht',
        services: [
            'Allgemeine Strafverteidigung',
            'Pflichtverteidigung',
            'Jugendstrafrecht',
            'Betäubungsmittelstrafrecht',
            'Kapitalstrafrecht',
            'Revision und Berufung'
        ]
    },
    {
        id: 'steuerstrafrecht',
        name: 'Steuerstrafrecht',
        slug: 'steuerstrafrecht',
        description: 'Verteidigung bei Steuerhinterziehung. Selbstanzeige und Fahndung.',
        intro: 'Steuerhinterziehung wird hart bestraft. Wir verteidigen Sie kompetent und diskret, wenn die Steuerfahndung ermittelt.',
        icon: 'siren', // reused siren or lock
        problemTitle: 'Steuerhinterziehung vorgeworfen?',
        problemDescription: 'Eine wirksame Selbstanzeige kann Straffreiheit bringen. Dies erfordert jedoch höchste Präzision. Wir beraten Sie zu den Möglichkeiten.',
        servicesTitle: 'Unsere Leistungen im Steuerstrafrecht',
        services: [
            'Strafbefreiende Selbstanzeige',
            'Verteidigung im Steuerstrafverfahren',
            'Begleitung bei Durchsuchungen',
            'Verhandlungen mit der Bußgeld- und Strafsachenstelle',
            'Schätzung von Besteuerungsgrundlagen abwehren',
            'Vermeidung von Haftstrafen'
        ]
    },
    {
        id: 'unterhaltsrecht',
        name: 'Unterhaltsrecht',
        slug: 'unterhaltsrecht',
        description: 'Unterhalt für Kinder und Ehepartner. Berechnung und Anpassung.',
        intro: 'Beim Unterhalt geht es um die Existenzsicherung. Wir berechnen Unterhaltsansprüche präzise nach der Düsseldorfer Tabelle und der aktuellen Rechtsprechung.',
        icon: 'baby',
        problemTitle: 'Wer zahlt wie viel?',
        problemDescription: 'Oft wird über die Leistungsfähigkeit oder den Bedarf gestritten. Wir klären die Einkommensverhältnisse und sorgen für gerechte Zahlungen.',
        servicesTitle: 'Unsere Leistungen im Unterhaltsrecht',
        services: [
            'Kindesunterhalt berechnen',
            'Trennungs- und nachehelicher Unterhalt',
            'Elternunterhalt (Pflegeheimkosten)',
            'Auskunft über Einkommen und Vermögen',
            'Abänderungsklagen',
            'Pfändung wegen Unterhaltsrückständen'
        ]
    },
    {
        id: 'verkehrsrecht',
        name: 'Verkehrsrecht',
        slug: 'verkehrsrecht',
        description: 'Unfallregulierung und Verkehrsverstöße. Wir machen Sie mobil.',
        intro: 'Nach einem Unfall versuchen Versicherungen oft, die Schadenssumme zu drücken. Wir übernehmen die komplette Abwicklung für Sie – meist ohne Kostenrisiko für Sie.',
        icon: 'car-front',
        problemTitle: 'Unfall gehabt?',
        problemDescription: 'Überlassen Sie die Schadensregulierung nicht der gegnerischen Versicherung! Wir holen das Maximum für Sie heraus – inklusive Wertminderung und Nutzungsausfall.',
        servicesTitle: 'Unsere Leistungen im Verkehrsrecht',
        services: [
            'Komplette Unfallschadenregulierung',
            'Schmerzensgeld geltend machen',
            'Verkehrsstrafrecht (Unfallflucht, Nötigung)',
            'Fahrerlaubnisrecht',
            'Oldtimer-Recht',
            'Kfz-Kaufvertragsrecht'
        ]
    },
    {
        id: 'versicherungsrecht',
        name: 'Versicherungsrecht',
        slug: 'versicherungsrecht',
        description: 'Wenn die Versicherung nicht zahlt. BU, Unfall und Gebäude.',
        intro: 'Sie haben jahrelang Beiträge gezahlt, aber im Schadensfall stellt sich die Versicherung quer? Wir setzen Ihre Ansprüche aus dem Versicherungsvertrag durch.',
        icon: 'shield-alert',
        problemTitle: 'Leistungsablehnung erhalten?',
        problemDescription: 'Versicherungsbedingungen sind unverständlich und voller Ausschlussklauseln. Wir prüfen die Ablehnung und kämpfen für Ihr Geld.',
        servicesTitle: 'Unsere Leistungen im Versicherungsrecht',
        services: [
            'Berufsunfähigkeitsversicherung (BU)',
            'Unfallversicherung',
            'Private Krankenversicherung',
            'Gebäude- und Hausratversicherung',
            'Rechtsschutzversicherung (Deckungsklage)',
            'Haftpflichtversicherung'
        ]
    },
    {
        id: 'vertragsrecht',
        name: 'Vertragsrecht',
        slug: 'vertragsrecht',
        description: 'Verträge prüfen, gestalten und anfechten. Allgemeine Rechtsfragen.',
        intro: 'Pacta sunt servanda – Verträge sind einzuhalten. Aber was, wenn der Vertrag unwirksam ist oder die Gegenseite sich nicht daran hält? Wir klären das.',
        icon: 'file-signature',
        problemTitle: 'Streit um den Vertrag?',
        problemDescription: 'Wir prüfen Kleingedrucktes, erklären den Rücktritt oder fechten Verträge wegen Täuschung an. Sorgen Sie für Rechtssicherheit.',
        servicesTitle: 'Unsere Leistungen im Vertragsrecht',
        services: [
            'Vertragsprüfung und -gestaltung',
            'Rücktritt und Widerruf',
            'Anfechtung von Willenserklärungen',
            'Durchsetzung vertraglicher Ansprüche',
            'Verjährungsprüfung',
            'Gläubigerverzug'
        ]
    },
    {
        id: 'werkvertragsrecht',
        name: 'Werkvertragsrecht',
        slug: 'werkvertragsrecht',
        description: 'Recht für Handwerk und Bau. Abnahme, Mängel und Vergütung.',
        intro: 'Der Werkvertrag schuldet einen Erfolg. Wenn das Werk mangelhaft ist oder der Kunde nicht zahlt, greift das Werkvertragsrecht. Wir beraten Unternehmer und Besteller.',
        icon: 'hammer',
        problemTitle: 'Werkleistung mangelhaft?',
        problemDescription: 'Verweigern Sie die Abnahme bei wesentlichen Mängeln! Wir beraten Sie zu Gewährleistungsrechten, Nacherfüllung und Selbstvornahme.',
        servicesTitle: 'Unsere Leistungen im Werkvertragsrecht',
        services: [
            'Durchsetzung von Werklohn',
            'Mängelrechte und Schadensersatz',
            'Abnahme und Abnahmewirkungen',
            'Kündigung von Werkverträgen',
            'Sicherungsrechte für Werkunternehmer',
            'Kostenvoranschlag vs. Festpreis'
        ]
    },
    {
        id: 'wirtschaftsrecht',
        name: 'Wirtschaftsrecht',
        slug: 'wirtschaftsrecht',
        description: 'Umfassende Beratung für Unternehmen. Von A wie Arbeitsrecht bis Z wie Zoll.',
        intro: 'Erfolgreiches Wirtschaften braucht rechtliche Leitplanken. Wir verstehen uns als externe Rechtsabteilung für den Mittelstand und lösen Ihre juristischen Herausforderungen.',
        icon: 'briefcase',
        problemTitle: 'Rechtssicher unternehmen',
        problemDescription: 'Wir bündeln unsere Kompetenzen aus verschiedenen Rechtsgebieten, um Ihrem Unternehmen maßgeschneiderte Lösungen aus einer Hand zu bieten.',
        servicesTitle: 'Unsere Leistungen im Wirtschaftsrecht',
        services: [
            'Laufende rechtliche Beratung von KMU',
            'Vertragsmanagement und Compliance',
            'Wettbewerbsrecht und Marken',
            'Forderungsmanagement B2B',
            'Unternehmenskauf und Nachfolge',
            'Restrukturierung und Sanierung'
        ]
    },
];

export const experienceYears = 40;

export const practiceAreasIntro = {
    title: 'Rechtsgebiete',
    subtitle: 'Qualität durch Fokus: Wir haben uns bewusst spezialisiert, um Ihnen in den für Sie wichtigen Rechtsgebieten stets die bestmögliche Beratung zu bieten.',
    description: [
        'Oftmals greifen mehrere Rechtsgebiete ineinander. Unsere Spezialisten arbeiten deshalb in Teams zusammen. So gewährleisten wir Ihnen optimale Beratungsergebnisse.',
        'Für die von uns nicht betreuten Rechtsgebiete empfehlen wir Ihnen stets einen zuverlässigen Spezialisten. Vertrauen Sie uns.',
        'Bei Prozessen an weit entfernten Gerichtsorten, auch im europäischen Ausland, können wir bei Bedarf auf zuverlässige Vertragsanwälte aus dem Anwaltsnetzwerk der Advounion mit über 4000 Anwälten zurückgreifen.',
    ],
};

export const inkassoInfo = {
    title: 'Inkasso',
    description: [
        'Spezielle Kanzleisoftware und geschulte Mitarbeiter gewährleisten ein zügiges und effizientes Inkasso.',
        'Durch modernste Datentechnik haben wir jederzeit direkten und sekundenschnellen Zugriff auf die Datenbanken von SCHUFA und Creditreform. Dadurch verschaffen wir Ihnen einen wertvollen Zeit- und Informationsvorsprung, sei es bei der Anbahnung von Geschäftsbeziehungen oder beim Inkasso.',
        'Als Mitglied der Advounion, einem Verbund von bundesweit rund 800 Anwaltskanzleien, verfügen wir über ein umfassendes Netz von Vertrauensanwälten. Dadurch sind wir in der Lage, auch an entfernten Orten zuverlässig Aufträge zu erledigen und unseren Mandanten ergänzende Informationen und Daten zu beschaffen.',
    ],
};
