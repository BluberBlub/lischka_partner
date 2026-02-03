import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo-white.png';
import logoSquare from '../assets/images/logo-square.png';

// Headers / Sliders
import headerHome from '../assets/images/header-home.jpg';
import headerKanzlei from '../assets/images/header-kanzlei.jpg'; // Used for multiple pages

// Team
import teamLischka from '../assets/images/team-lischka.jpg';
import teamHornstein from '../assets/images/team-hornstein.jpg';
import teamBetzel from '../assets/images/team-betzel.jpg';
import teamColas from '../assets/images/team-colas.jpg';
import teamDragoescu from '../assets/images/team-dragoescu.jpg';
import teamPult from '../assets/images/team-pult.jpg';

// Assistants
import assistantHaerdtner from '../assets/images/assistant-haerdtner.jpg';
import assistantPrinz from '../assets/images/assistant-prinz.jpg';
import assistantSteinke from '../assets/images/assistant-steinke.jpg';
import assistantAlbina from '../assets/images/assistant-albina.png';
import assistantArmina from '../assets/images/assistant-armina.png';

export const images = {
    // Logo
    logo,
    logoWhite,
    logoSquare,

    // Slider Images (Homepage)
    slider: {
        image1: headerHome,
        image2: headerKanzlei,
    },

    // Page Header Images
    pageHeaders: {
        home: headerHome,
        kanzlei: headerKanzlei,
        team: headerKanzlei,
        karriere: headerHome,
        rechtsgebiete: headerKanzlei,
        kontakt: headerHome,
        polnisch: headerKanzlei,
    },

    // Team Photos - Lawyers
    team: {
        christophLischka: teamLischka,
        helmutHornstein: teamHornstein,
        tobiasBetzel: teamBetzel,
        matthieuColas: teamColas,
        oliverDragoescu: teamDragoescu,
        danielJakobPult: teamPult,
    },

    // Team Photos - Assistants
    assistants: {
        martinaHaerdtner: assistantHaerdtner,
        claudiaPrinz: assistantPrinz,
        kathrinSteinke: assistantSteinke,
        albinaAdra: assistantAlbina,
        arminaAdra: assistantArmina,
    },

    // Office Photos (reusing headers for now or placeholders if missing downloads)
    office: {
        ravensburg: headerHome,
        badWaldsee: headerKanzlei,
        interior: headerKanzlei,
    },

    // Hero/Background Images
    hero: {
        main: headerHome,
        contact: headerKanzlei,
    },

    // Placeholder
    placeholder: {
        person: '/images/placeholder-person.svg',
        office: '/images/placeholder-office.svg',
    },
} as const;

export type ImageKey = keyof typeof images;
