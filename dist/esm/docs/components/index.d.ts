/// <reference types="react" />
export declare type ComponentPage = {
    name: string;
    group?: string;
    component: JSX.Element;
};
export declare const componentsPages: ComponentPage[];
export declare const groupedComponentsPages: {};
export declare const ungroupedComponentsPages: ComponentPage[];
export declare const componentsPagesMap: Map<string, ComponentPage>;
