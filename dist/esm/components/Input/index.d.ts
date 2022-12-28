import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import React from 'react';
export declare const BaseInput: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"input", ChakraInputProps>;
export declare const InputGroup: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/input/dist/input-group").InputGroupProps>;
export declare const InputLeftElement: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/input/dist/input-element").InputElementProps>;
export declare const InputLeftAddon: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/input/dist/input-addon").InputAddonProps>;
export declare const InputRightElement: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/input/dist/input-element").InputElementProps>;
export declare const InputRightAddon: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"div", import("@chakra-ui/input/dist/input-addon").InputAddonProps>;
export declare type InputProps = ChakraInputProps & {
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
    rightElementSlot?: React.ReactNode;
    leftElementSlot?: React.ReactNode;
};
export declare const Input: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"input", InputProps>;
