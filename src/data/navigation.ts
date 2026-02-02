import type { NavigationItem } from '../types';

export const mainNavigation: NavigationItem[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Team',
        href: '/team/',
    },
    {
        label: 'Kanzlei',
        href: '/kanzlei/',
    },
    {
        label: 'Rechtsgebiete',
        href: '/rechtsgebiete/',
    },
    {
        label: 'Karriere',
        href: '/karriere/',
    },
    {
        label: 'Extras',
        href: '#',
        children: [
            {
                label: 'Infoveranstaltungen und Fortbildungen',
                href: '/service/infoveranstaltungen/',
            },
            {
                label: 'Jura News',
                href: 'https://www.bundesgerichtshof.de/DE/Presse/Pressemitteilungen/pressemitteilungen_node.html',
                external: true,
            },
            {
                label: 'Promillerechner',
                href: 'https://www.kenn-dein-limit.de/alkohol-tests/promillerechner',
                external: true,
            },
            {
                label: 'Düsseldorfer Unterhaltstabelle',
                href: 'https://www.olg-duesseldorf.nrw.de/infos/Duesseldorfer_Tabelle/',
                external: true,
            },
        ],
    },
];

export const footerNavigation: NavigationItem[] = [
    {
        label: 'Kanzlei',
        href: '/kanzlei/',
    },
    {
        label: 'Rechtsgebiete',
        href: '/rechtsgebiete/',
    },
    {
        label: 'Karriere',
        href: '/karriere/',
    },
    {
        label: 'Kontakt',
        href: '/kontakt/',
    },
];

export const legalNavigation: NavigationItem[] = [
    {
        label: 'Impressum',
        href: '/impressum/',
    },
    {
        label: 'Datenschutzerklärung',
        href: '/datenschutz/',
    },
];
