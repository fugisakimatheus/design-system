import { Button, Flex, Text, Spinner, useRefIntersectObserver } from 'main'
import React from 'react'

export type ScrollPaginatorProps = {
  colorLoading?: string
  trackColorLoading?: string
  onLoadMore: () => void
  canLoadMore: boolean
  isLoading: boolean
  rootMargin?: string
  failInfo?: {
    hasFailed: boolean
    tryAgainMessage: string
  }
}

export const ScrollPaginator = (props: ScrollPaginatorProps) => {
  const {
    onLoadMore,
    canLoadMore,
    isLoading,
    colorLoading = 'blue.700',
    trackColorLoading = 'gray.100',
    rootMargin = '160px',
    failInfo
  } = props

  const ref = useRefIntersectObserver<HTMLDivElement>(
    entry => {
      if (!entry.isIntersecting || isLoading) return
      onLoadMore()
    },
    { rootMargin }
  )

  if (failInfo?.hasFailed) {
    return (
      <Flex
        align="center"
        direction="column"
        gap="2"
        mt="4"
        mb="6"
        height="80px"
      >
        <Text
          fontSize="sm"
          color="gray.700"
          fontWeight="bold"
          textAlign="center"
        >
          {failInfo.tryAgainMessage}
        </Text>
        <Button
          data-testid="add-button"
          width="120px"
          variant="solid"
          colorScheme="blue"
          onClick={onLoadMore}
        >
          Tentar novamente
        </Button>
      </Flex>
    )
  }

  return isLoading || canLoadMore ? (
    <Flex
      data-testid="paginator-container"
      ref={ref}
      justify="center"
      align="flex-start"
      marginTop="4"
      mt="4"
      mb="6"
      height="80px"
    >
      <Spinner color={colorLoading} ringColor={trackColorLoading} />
    </Flex>
  ) : null
}
