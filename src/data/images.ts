/**
 * Centralized image management
 * All images are referenced from the existing website
 */

const BASE_URL = 'https://www.lischka-partner.de/wp-content/uploads';

export const images = {
    // Logo
    logo: `${BASE_URL}/2023/04/Logo_Long.png`,
    logoWhite: `${BASE_URL}/2023/04/Logo_weiss.png`,
    logoSquare: `${BASE_URL}/2023/04/Logo.png`,

    // Slider Images (Homepage)
    slider: {
        image1: `${BASE_URL}/2024/12/Lischka-1573-4-scaled.jpg`,
        image2: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
    },

    // Page Header Images
    pageHeaders: {
        home: `${BASE_URL}/2024/12/Lischka-1573-4-scaled.jpg`,
        kanzlei: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
        team: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
        karriere: `${BASE_URL}/2024/12/Lischka-1573-4-scaled.jpg`,
        rechtsgebiete: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
        kontakt: `${BASE_URL}/2024/12/Lischka-1573-4-scaled.jpg`,
    },

    // Team Photos - Lawyers (full resolution)
    team: {
        christophLischka: `${BASE_URL}/2023/11/Lischka.jpg`,
        helmutHornstein: `${BASE_URL}/2023/04/Lischka-1198.jpg`,
        tobiasBetzel: `${BASE_URL}/2023/04/Lischka-1152.jpg`,
        matthieuColas: `${BASE_URL}/2026/01/IMG_8165b-1.jpg`,
        oliverDragoescu: `${BASE_URL}/2026/01/IMG_8262b-1.jpg`,
        danielJakobPult: `${BASE_URL}/2026/01/IMG_8244b-1.jpg`,
    },

    // Team Photos - Assistants (full resolution)
    assistants: {
        martinaHaerdtner: `${BASE_URL}/2023/04/Lischka-582-1.jpg`,
        claudiaPrinz: `${BASE_URL}/2023/04/Lischka-374.jpg`,
        kathrinSteinke: `${BASE_URL}/2023/04/Lischka-306.jpg`,
        albinaAdra: `${BASE_URL}/2026/01/Gemini_Generated_Image_zb2tdizb2tdizb2t.png`,
        arminaAdra: `${BASE_URL}/2026/01/Gemini_Generated_Image_f3oulkf3oulkf3ou.png`,
    },

    // Office Photos
    office: {
        ravensburg: `${BASE_URL}/2024/12/Lischka-1573-4-scaled.jpg`,
        badWaldsee: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
        interior: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
    },

    // Hero/Background Images
    hero: {
        main: `${BASE_URL}/2024/12/Lischka-1573-4-scaled.jpg`,
        contact: `${BASE_URL}/2023/11/Lischka-1433-scaled.jpg`,
    },

    // Placeholder for missing images
    placeholder: {
        person: '/images/placeholder-person.svg',
        office: '/images/placeholder-office.svg',
    },
} as const;

export type ImageKey = keyof typeof images;

