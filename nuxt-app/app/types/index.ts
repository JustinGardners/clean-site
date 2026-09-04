import type { CardProps, CardClasses } from '#layers/base/app/types'
import type { ClassValue } from "clsx";
import { itemWithInfoClasses } from '~/types/tokens'

export type SingleImagePropsClasses = {
    picture?: ClassValue;
    link?: ClassValue;
}

export type SingleImageProps = Pick<CardProps, 'picture' | 'shadow'> & {
    link?: string;
    title?: string;
    classes?: SingleImagePropsClasses;
    bordered?: boolean;
};

export type ImageWithInfoPropsNewClasses = (typeof itemWithInfoClasses)

export type ImageWithInfoPropsNewClassesRecord = Partial<Record<keyof Omit<ImageWithInfoPropsNewClasses, 'class'>, ClassValue>>

export type ImageWithInfoPropsClasses = Partial<CardClasses> & ImageWithInfoPropsNewClassesRecord
export type ImageWithInfoClassMap = Partial<Record<keyof ImageWithInfoPropsClasses, ClassValue>>
export type ImageWithInfoResolvedClasses = Partial<Record<keyof ImageWithInfoPropsClasses, string>>

export type ImageWithInfoProps = Pick<CardProps, 'title' | 'tagline' | 'picture' | 'config' | 'ctas' | 'shadow'> & {
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
