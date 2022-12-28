import React, { ReactNode } from 'react';
import { ComponentPage } from '../components';
export declare type RoutesContextType = {
    currentPage: ComponentPage;
    setCurrentPage: (page: string) => void;
};
export declare const RoutesContext: React.Context<RoutesContextType>;
export declare const RoutesProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useRoute: () => RoutesContextType;
