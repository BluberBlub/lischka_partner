import type { Location } from '../types';

export const locations: Location[] = [
    {
        id: 'ravensburg',
        name: 'Ravensburg',
        address: {
            street: 'Pfannenstiel 16',
            postalCode: '88214',
            city: 'Ravensburg',
        },
        phone: '0751 36353-0',
        fax: '0751 36353-29',
        email: 'ravensburg@lischka-partner.de',
        mapEmbedUrl: 'https://maps.google.com/maps?q=Pfannenstiel+16,+88214+Ravensburg&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
    {
        id: 'bad-waldsee',
        name: 'Bad Waldsee',
        address: {
            street: 'Schlosshof 1',
            postalCode: '88339',
            city: 'Bad Waldsee',
        },
        phone: '07524 9753-0',
        fax: '07524 9753-29',
        email: 'waldsee@lischka-partner.de',
        mapEmbedUrl: 'https://maps.google.com/maps?q=Schlosshof+1,+88339+Bad+Waldsee&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
];

export const companyInfo = {
    name: 'Lischka & Partner GbR',
    type: 'Anwaltskanzlei',
    ustIdNr: 'DE146376548',
    primaryLocation: locations[0],
    responsiblePerson: 'Rechtsanwalt Tobias Betzel',
    chamberMembership: 'Rechtsanwaltskammer Tübingen',
    insurance: {
        provider: 'Allianz SE',
        address: 'Königinstraße 28, 80802 München',
        coverage: 'Europa',
    },
};
