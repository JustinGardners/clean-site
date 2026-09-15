import type { CardProps, CardClasses } from '#layers/base/app/types'
import type { ClassValue } from "clsx";
import { itemWithInfoClasses, frameworkSpacing } from '~/types/tokens'

export type FrameworkSpacing = (typeof frameworkSpacing)[number];

export type ImagePropsClasses = {
    card?: ClassValue;
    picture?: ClassValue;
    link?: ClassValue;
    body?: ClassValue;
    caption?: ClassValue;
    title?: ClassValue;
}

export type CardImageProps = Pick<CardProps, 'picture' | 'shadow'> & {
    link?: string;
    title?: string;
    classes?: ImagePropsClasses;
    bordered?: boolean;
    roundedImage?: 'none' | 'sm' | 'md' | 'lg' | 'full' | 'default';
};

export type ImageWithInfoPropsNewClasses = (typeof itemWithInfoClasses)

export type ImageWithInfoPropsNewClassesRecord = Partial<Record<keyof Omit<ImageWithInfoPropsNewClasses, 'class'>, ClassValue>>

export type ImageWithInfoPropsClasses = Partial<CardClasses> & ImageWithInfoPropsNewClassesRecord
export type ImageWithInfoClassMap = Partial<Record<keyof ImageWithInfoPropsClasses, ClassValue>>
export type ImageWithInfoResolvedClasses = Partial<Record<keyof ImageWithInfoPropsClasses, string>>

export type ImageWithInfoProps = Pick<CardProps, 'tagline' | 'subtitle' | 'config' | 'ctas' | 'shadow'> & CardImageProps & {
    title: string;
    link?: string;
    author?: string;
    format?: string;
    price?: {
        rrp?: {
            label?: string;
            value: string;
        }
        sale?: {
            label?: string;
            value: string;
        }
    }
    classes?: ImageWithInfoPropsClasses;
    ctaCover?: boolean;
}
