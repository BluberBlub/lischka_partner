import { practiceAreas } from './practice-areas';
import { allTeamMembers } from './team';
import { jobPostings } from './career';

export type SearchCategory = 'Seite' | 'Rechtsgebiet' | 'Team' | 'Karriere';

export interface SearchItem {
    id: string;
    title: string;
    description?: string;
    href: string;
    category: SearchCategory;
}

const staticPages: SearchItem[] = [
    {
        id: 'home',
        title: 'Startseite',
        description: 'Lischka & Partner Rechtsanwälte - Ihre Kanzlei in Ravensburg und Bad Waldsee.',
        href: '/',
        category: 'Seite',
    },
    {
        id: 'team',
        title: 'Team',
        description: 'Lernen Sie unsere Anwälte und das Team kennen.',
        href: '/team/',
        category: 'Seite',
    },
    {
        id: 'kanzlei',
        title: 'Kanzlei',
        description: 'Über unsere Kanzlei, Standorte und Geschichte.',
        href: '/kanzlei/',
        category: 'Seite',
    },
    {
        id: 'rechtsgebiete',
        title: 'Rechtsgebiete',
        description: 'Übersicht unserer Rechtsgebiete und Leistungen.',
        href: '/rechtsgebiete/',
        category: 'Seite',
    },
    {
        id: 'karriere',
        title: 'Karriere',
        description: 'Stellenangebote und Karrierechancen bei Lischka & Partner.',
        href: '/karriere/',
        category: 'Seite',
    },
    {
        id: 'kontakt',
        title: 'Kontakt',
        description: 'Nehmen Sie Kontakt mit uns auf. Telefon, E-Mail und Anfahrt.',
        href: '/kontakt/',
        category: 'Seite',
    },
    {
        id: 'impressum',
        title: 'Impressum',
        href: '/impressum/',
        category: 'Seite',
    },
    {
        id: 'datenschutz',
        title: 'Datenschutzerklärung',
        href: '/datenschutz/',
        category: 'Seite',
    },
    {
        id: 'polnisch',
        title: 'Polnisch / Obsługa Prawna',
        description: 'Porady i reprezentacje prawne w języku polskim i niemieckim.',
        href: '/service/polnisch/',
        category: 'Seite',
    },
    {
        id: 'infoveranstaltungen',
        title: 'Infoveranstaltungen',
        description: 'Aktuelle Infoveranstaltungen und Fortbildungen.',
        href: '/service/infoveranstaltungen/',
        category: 'Seite',
    }
];

const practiceAreaItems: SearchItem[] = practiceAreas.map(area => ({
    id: `pa-${area.id}`,
    title: area.name,
    description: `Rechtsberatung im Bereich ${area.name}.`,
    href: `/rechtsgebiete/${area.slug}/`,
    category: 'Rechtsgebiet',
}));

const teamItems: SearchItem[] = allTeamMembers.map(member => ({
    id: `team-${member.id}`,
    title: member.name,
    description: `${member.title || member.role}. ${member.specializations?.map(s => s.title).join(', ') || ''}`,
    href: '/team/', // We link to team page as there is no individual page yet, or anchor if possible? Let's just go to team page.
    category: 'Team',
}));

const jobItems: SearchItem[] = jobPostings.map(job => ({
    id: `job-${job.id}`,
    title: job.title,
    description: job.subtitle,
    href: '/karriere/',
    category: 'Karriere',
}));

export const searchIndex: SearchItem[] = [
    ...staticPages,
    ...practiceAreaItems,
    ...teamItems,
    ...jobItems,
];
