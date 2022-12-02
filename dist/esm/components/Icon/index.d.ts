/// <reference types="react" />
import { IconType } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import { ColorsNames, SpaceNames } from 'theme';
export declare type MdIconNames = keyof typeof MdIcons;
export declare type FaIconNames = keyof typeof FaIcons;
export declare type FiIconNames = keyof typeof FiIcons;
export declare type IconSizes = 'xs' | 'sm' | 'md' | 'lg';
export declare type IconsProps<T> = {
    name: T;
    color?: ColorsNames;
    size?: IconSizes;
    onClick?: () => void;
    backgroundColor?: ColorsNames;
    marginLeft?: SpaceNames;
    marginRight?: SpaceNames;
    marginTop?: SpaceNames;
    marginBottom?: SpaceNames;
    marginX?: SpaceNames;
    marginY?: SpaceNames;
    paddingLeft?: SpaceNames;
    paddingRight?: SpaceNames;
    paddingTop?: SpaceNames;
    paddingBottom?: SpaceNames;
    paddingX?: SpaceNames;
    paddingY?: SpaceNames;
};
export declare type MdIconsProps = IconsProps<MdIconNames>;
export declare type FaIconsProps = IconsProps<FaIconNames>;
export declare type FiIconsProps = IconsProps<FiIconNames>;
export declare const iconSizesMap: Map<IconSizes, string>;
export declare function iconBuilder<T>(props: IconsProps<T>, reactIcons: {
    [name: string]: IconType;
}): JSX.Element;
export declare const MdIcon: (props: MdIconsProps) => JSX.Element;
export declare const FaIcon: (props: FaIconsProps) => JSX.Element;
export declare const FiIcon: (props: FiIconsProps) => JSX.Element;
