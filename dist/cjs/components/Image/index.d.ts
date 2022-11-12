/// <reference types="react" />
import { ImageProps as ChakraImageProps } from '@chakra-ui/react';
export declare type ImageProps = ChakraImageProps & {
    loadingIndicator?: 'skeleton' | 'spinner';
};
export declare const Image: (props: ImageProps) => JSX.Element;
