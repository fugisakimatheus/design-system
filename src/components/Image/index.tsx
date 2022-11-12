import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps
} from '@chakra-ui/react'
import React, { useState } from 'react'

import defaultImage from '../../assets/images/no-image.png'
import { Skeleton } from '../Skeleton'

export type ImageProps = ChakraImageProps

export const Image = (props: ImageProps) => {
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <Skeleton isLoaded={!isLoading}>
      <ChakraImage
        onError={() => setIsError(true)}
        onLoadedData={() => setIsLoading(false)}
        src={isError ? defaultImage : props.src}
        {...props}
      />
    </Skeleton>
  )
}
