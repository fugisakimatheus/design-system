/// <reference types="react" />
export declare type ScrollPaginatorProps = {
    colorLoading?: string;
    trackColorLoading?: string;
    onLoadMore: () => void;
    canLoadMore: boolean;
    isLoading: boolean;
    rootMargin?: string;
    failInfo?: {
        hasFailed: boolean;
        tryAgainMessage: string;
    };
};
export declare const ScrollPaginator: (props: ScrollPaginatorProps) => JSX.Element | null;
