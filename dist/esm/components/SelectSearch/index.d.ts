import { SelectProps, ThemeTypings, ResponsiveValue } from '@chakra-ui/react';
import type { RefAttributes } from 'react';
import type { GroupBase, Props, SelectInstance } from 'react-select';
import { ColorsNames } from '../../theme';
export declare type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]> : ResponsiveValue<CSSType>;
declare type Option = unknown;
declare type IsMulti = boolean;
declare type Group = GroupBase<Option>;
export declare type SelectOption<T = string> = {
    value: T;
    label: string;
};
export declare type SelectSearchProps = SelectProps & Props<Option, IsMulti, Group> & RefAttributes<SelectInstance<Option, IsMulti, Group>> & {
    multiValueBackground: Token<ColorsNames, 'colors'>;
};
export declare const SelectSearch: import("@chakra-ui/system").ComponentWithAs<"input", SelectSearchProps>;
export {};
