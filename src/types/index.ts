// Team Member Types
export interface TeamMember {
    id: string;
    name: string;
    role: 'lawyer' | 'assistant';
    title?: string;
    image?: string;
    admissionYear?: number;
    specializations?: Specialization[];
    focusAreas?: string[];
    memberships?: string[];
}

export interface Specialization {
    year: number;
    title: string;
    type: 'fachanwalt' | 'lehrgang' | 'dozent';
}

// Practice Area Types
export interface PracticeArea {
    id: string;
    name: string;
    slug: string;
    description?: string;
}

// Location Types
export interface Location {
    id: string;
    name: string;
    address: {
        street: string;
        postalCode: string;
        city: string;
    };
    phone: string;
    fax: string;
    email: string;
}

// Navigation Types
export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
    external?: boolean;
}

// Job Posting Types
export interface JobPosting {
    id: string;
    title: string;
    subtitle?: string;
    intro: string;
    tasks: string[];
    requirements: string[];
    benefits: string[];
    contactEmail: string;
    contactPhone: string;
}

// SEO Types
export interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
}
