import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps
} from '@chakra-ui/react'
import React, { useState } from 'react'

import defaultImage from '../../assets/images/no-image.png'
import { Skeleton } from '../Skeleton'
import { Spinner } from '../Spinner'

export type ImageProps = ChakraImageProps & {
  loadingIndicator?: 'skeleton' | 'spinner'
}

export const Image = (props: ImageProps) => {
  const { loadingIndicator } = props
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const isLoaded = !loadingIndicator || !isLoading || isError
  const canShowSpinner = !isLoaded && loadingIndicator === 'spinner'
  const isLoadedSkeleton = isLoaded || loadingIndicator !== 'skeleton'

  return (
    <Skeleton
      isLoaded={isLoadedSkeleton}
      borderRadius={props.borderRadius || 'md'}
      width={props.width}
      maxWidth={props.maxWidth}
    >
      {canShowSpinner && (
        <Spinner
          color="blue.600"
          emptyColor="gray.200"
          thickness="4px"
          width={props.width}
          height={props.height}
          maxWidth={props.maxWidth}
          maxHeight={props.maxHeight}
          minWidth={props.minWidth}
          minHeight={props.minHeight}
        />
      )}
      <ChakraImage
        loading="lazy"
        {...props}
        borderRadius={props.borderRadius || 'md'}
        visibility={canShowSpinner ? 'hidden' : 'visible'}
        onError={() => setIsError(true)}
        onLoad={() => setIsLoading(false)}
        src={isError ? defaultImage : props.src}
      />
    </Skeleton>
  )
}
