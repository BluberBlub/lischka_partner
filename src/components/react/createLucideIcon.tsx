import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export const createLucideIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];

    if (!Icon) {
        console.warn(`Icon "${iconName}" not found in lucide-react`);
        return null; // or a fallback icon
    }

    return (props: LucideProps) => <Icon {...props} />;
};
