/// <reference types="react" />
declare type PaginatorSize = 'sm' | 'md' | 'lg';
export declare type PaginatorProps = {
    currentPage: number;
    lastPage: number;
    offsetSize?: number;
    size?: PaginatorSize;
    onChangePage: (page: number) => void;
};
export declare const Paginator: ({ currentPage, lastPage, offsetSize, size, onChangePage }: PaginatorProps) => JSX.Element;
export {};
