import type { TeamMember } from '../types';
import { images } from './images';

export const lawyers: TeamMember[] = [
    {
        id: 'christoph-lischka',
        name: 'Christoph Lischka',
        role: 'lawyer',
        title: 'Rechtsanwalt',
        image: images.team.christophLischka,
        admissionYear: 1983,
        specializations: [
            { year: 1985, title: 'Fachanwalt für Steuerrecht', type: 'fachanwalt' },
            { year: 2007, title: 'Fachanwalt für Bau- und Architektenrecht', type: 'fachanwalt' },
            { year: 2008, title: 'Fachanwalt für Bank- und Kapitalmarktrecht', type: 'fachanwalt' },
        ],
        focusAreas: [
            'Steuerrecht',
            'Bau- und Architektenrecht',
            'Bank- und Kapitalmarktrecht',
            'Handels- und Gesellschaftsrecht',
        ],
        memberships: [
            'Bank- und Kapitalmarktrecht (DAV)',
            'Bau- und Architektenrecht (DAV)',
            'Verkehrsrecht (DAV, ehemals ADAC-Vertragsanwalt)',
        ],
    },
    {
        id: 'helmut-hornstein',
        name: 'Helmut Hornstein',
        role: 'lawyer',
        title: 'Rechtsanwalt',
        image: images.team.helmutHornstein,
        admissionYear: 1987,
        specializations: [
            { year: 2006, title: 'Fachanwalt für Verkehrsrecht', type: 'fachanwalt' },
            { year: 2009, title: 'Fachanwalt für Miet- und Wohnungseigentumsrecht', type: 'fachanwalt' },
        ],
        focusAreas: [
            'Verkehrsrecht',
            'Miet- und WEG-Recht',
            'Versicherungsrecht',
            'Medizinrecht',
        ],
        memberships: [
            'Verkehrsrecht (DAV)',
            'Miet- und WEG-Recht (DAV)',
        ],
    },
    {
        id: 'tobias-betzel',
        name: 'Tobias Betzel',
        role: 'lawyer',
        title: 'Rechtsanwalt',
        image: images.team.tobiasBetzel,
        admissionYear: 1991,
        specializations: [
            { year: 1997, title: 'Fachanwalt für Familienrecht', type: 'fachanwalt' },
            { year: 2009, title: 'Fachanwalt für Erbrecht', type: 'fachanwalt' },
            { year: 2010, title: 'Dozent bei der Industrie- und Handelskammer Bodensee-Oberschwaben', type: 'dozent' },
            { year: 2011, title: 'Dozent bei der Handwerkskammer Ulm', type: 'dozent' },
        ],
        focusAreas: [
            'Familienrecht',
            'Erbrecht',
        ],
        memberships: [
            'Arbeitsgemeinschaften im Deutschen Anwaltverein',
        ],
    },
    {
        id: 'matthieu-colas',
        name: 'Matthieu Colas',
        role: 'lawyer',
        title: 'Rechtsanwalt',
        image: images.team.matthieuColas,
        focusAreas: [
            'Bau- und Architektenrecht',
            'Mietrecht',
            'Internationales Wirtschaftsrecht',
            'Allgemeines Zivilrecht',
        ],
    },
    {
        id: 'oliver-dragoescu',
        name: 'Oliver Dragoescu',
        role: 'lawyer',
        title: 'Rechtsanwalt',
        image: images.team.oliverDragoescu,
        focusAreas: [
            'Bank- & Kapitalmarktrecht',
            'Arbeitsrecht',
            'Allgemeines Zivilrecht',
        ],
    },
    {
        id: 'daniel-jakob-pult',
        name: 'Daniel Jakob Pult',
        role: 'lawyer',
        title: 'Rechtsanwalt',
        image: images.team.danielJakobPult,
        focusAreas: [
            'Medizinrecht',
            'Erbrecht',
            'Allgemeines Zivilrecht',
        ],
    },
];

export const assistants: TeamMember[] = [
    {
        id: 'martina-haerdtner',
        name: 'Martina Härdtner',
        role: 'assistant',
        title: 'Anwaltsassistentin',
        image: images.assistants.martinaHaerdtner,
    },
    {
        id: 'claudia-prinz',
        name: 'Claudia Prinz',
        role: 'assistant',
        title: 'Anwaltsassistentin',
        image: images.assistants.claudiaPrinz,
    },
    {
        id: 'kathrin-steinke',
        name: 'Kathrin Steinke',
        role: 'assistant',
        title: 'Anwaltsassistentin',
        image: images.assistants.kathrinSteinke,
    },
    {
        id: 'albina-adra',
        name: 'Albina Adra',
        role: 'assistant',
        title: 'Anwaltsassistentin',
        image: images.assistants.albinaAdra,
    },
    {
        id: 'armina-adra',
        name: 'Armina Adra',
        role: 'assistant',
        title: 'Anwaltsassistentin',
        image: images.assistants.arminaAdra,
    },
];

export const allTeamMembers = [...lawyers, ...assistants];
