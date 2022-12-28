import { TabsProps as ChakraTabsProps, TabListProps as ChakraTabListProps, TabProps as ChakraTabProps, TabPanelsProps as ChakraTabPanelsProps, TabPanelProps as ChakraTabPanelProps } from '@chakra-ui/react';
import React from 'react';
export declare type TabsProps = ChakraTabsProps;
export declare const Tabs: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", ChakraTabsProps>;
export declare type TabListProps = ChakraTabListProps;
export declare const TabList: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", ChakraTabListProps>;
export declare type TabPanelsProps = ChakraTabPanelsProps;
export declare const TabPanels: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", ChakraTabPanelsProps>;
export declare type TabPanelProps = ChakraTabPanelProps;
export declare const TabPanel: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", ChakraTabPanelProps>;
declare type CustomTabProps = ChakraTabProps & {
    icon?: JSX.Element;
    iconPosition?: string;
};
export declare type TabProps = CustomTabProps;
export declare const Tab: React.FC<CustomTabProps>;
export {};
