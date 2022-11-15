import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import React from 'react';
export declare const BaseInput: import("@chakra-ui/system").ComponentWithAs<"input", ChakraInputProps>;
export declare const InputGroup: import("@chakra-ui/system").ComponentWithAs<"div", import("@chakra-ui/input").InputGroupProps>;
export declare const InputLeftElement: import("@chakra-ui/system").ComponentWithAs<"div", import("@chakra-ui/input").InputElementProps>;
export declare const InputLeftAddon: import("@chakra-ui/system").ComponentWithAs<"div", import("@chakra-ui/input").InputAddonProps>;
export declare const InputRightElement: import("@chakra-ui/system").ComponentWithAs<"div", import("@chakra-ui/input").InputElementProps>;
export declare const InputRightAddon: import("@chakra-ui/system").ComponentWithAs<"div", import("@chakra-ui/input").InputAddonProps>;
export declare type InputProps = ChakraInputProps & {
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
    rightElementSlot?: React.ReactNode;
    leftElementSlot?: React.ReactNode;
};
export declare const Input: import("@chakra-ui/system").ComponentWithAs<"input", InputProps>;
