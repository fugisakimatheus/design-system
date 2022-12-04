import { Box, Text, HStack, Button, theme } from 'main'
import React from 'react'

function ButtonDocs() {
  const firstVariants = ['solid', 'outline']
  const variants = Object.keys(theme.components.Button.variants || {}).sort(a =>
    firstVariants.includes(a) ? -1 : 1
  )

  return (
    <Box>
      <Box marginBottom="4">
        <Text fontWeight="semibold" color="blue.600" marginBottom="2">
          Variants
        </Text>

        <HStack spacing="8">
          {variants.map(variant => (
            <Box key={variant}>
              <Button
                variant={variant}
                colorScheme="blue"
                textTransform="capitalize"
              >
                {variant} Button
              </Button>
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

export default ButtonDocs
