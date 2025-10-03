export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

import { StaticImageData } from 'next/image';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: StaticImageData;
    longThumbnail: StaticImageData;
    images: StaticImageData[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}
