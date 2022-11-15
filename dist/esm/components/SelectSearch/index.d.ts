import { SelectProps } from '@chakra-ui/react';
import type { RefAttributes } from 'react';
import type { GroupBase, Props, SelectInstance } from 'react-select';
import { ColorsNames } from '../../theme';
declare type Option = unknown;
declare type IsMulti = boolean;
declare type Group = GroupBase<Option>;
export declare type SelectOption<T = string> = {
    value: T;
    label: string;
};
export declare type SelectSearchProps = SelectProps & Props<Option, IsMulti, Group> & RefAttributes<SelectInstance<Option, IsMulti, Group>> & {
    color?: ColorsNames;
    multiValueBackground?: ColorsNames;
};
export declare const SelectSearch: import("@chakra-ui/system").ComponentWithAs<"input", SelectSearchProps>;
export {};
