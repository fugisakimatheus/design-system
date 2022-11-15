/// <reference types="react" />
import { ColorsNames } from '../../theme';
declare type PaginatorSize = 'sm' | 'md' | 'lg';
export declare type PaginatorProps = {
    currentPage: number;
    lastPage: number;
    offsetSize?: number;
    size?: PaginatorSize;
    color?: ColorsNames;
    textColor?: ColorsNames;
    onChangePage: (page: number) => void;
};
export declare const Paginator: ({ currentPage, lastPage, offsetSize, size, color, textColor, onChangePage }: PaginatorProps) => JSX.Element;
export {};
