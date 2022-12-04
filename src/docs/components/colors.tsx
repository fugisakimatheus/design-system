import { Box, Flex, Text, SimpleGrid, theme } from 'main'
import React from 'react'

function ColorsDocs() {
  const colors = Object.keys(theme.colors || {})

  return (
    <Box>
      <Box marginBottom="4">
        <Text fontWeight="semibold" color="blue.600" marginBottom="2">
          Cores disponíveis
        </Text>

        <Box width="100%">
          <Text
            fontWeight="semibold"
            color="gray.600"
            textTransform="capitalize"
            marginTop="4"
            paddingX="4"
          >
            black
          </Text>
          <Box padding="4" borderRadius="md">
            <Flex
              bgColor="black"
              align="center"
              justify="center"
              height="60px"
              borderRadius="md"
              fontWeight="semibold"
              color="white"
            >
              black
            </Flex>
          </Box>
        </Box>

        <Box width="100%">
          <Text
            fontWeight="semibold"
            color="gray.600"
            textTransform="capitalize"
            marginTop="4"
            paddingX="4"
          >
            white
          </Text>
          <Text color="gray.900" fontSize="14px" paddingX="4" marginBottom="1">
            Background gray.600 aplicado para dar um contraste e facilitar a
            visualização da cor, já que é a mesma cor de fundo dessa página.
          </Text>
          <Box padding="4" borderRadius="md" bgColor="gray.800">
            <Flex
              bgColor="white"
              align="center"
              justify="center"
              height="60px"
              borderRadius="md"
              fontWeight="semibold"
              color="black"
            >
              white
            </Flex>
          </Box>
        </Box>

        {colors.map(color => {
          const invalidColors = ['transparent', 'current', 'black', 'white']
          if (invalidColors.includes(color)) return null

          const faixasDeCores = Object.keys(theme.colors[color] || {})

          return (
            <Box key={color}>
              <Text
                fontWeight="semibold"
                color="gray.600"
                textTransform="capitalize"
                marginTop="4"
                paddingX="4"
              >
                {color}
              </Text>
              {color === 'whiteAlpha' && (
                <Text
                  color="gray.900"
                  fontSize="14px"
                  paddingX="4"
                  marginBottom="1"
                >
                  Background gray.600 aplicado para dar um contraste e facilitar
                  a visualização das cores que possuem opacidade.
                </Text>
              )}
              <SimpleGrid
                columns={4}
                spacing="4"
                padding="4"
                borderRadius="md"
                bgColor={color === 'whiteAlpha' ? 'gray.800' : ''}
              >
                {faixasDeCores.map(faixa => (
                  <Flex
                    key={faixa}
                    bgColor={`${color}.${faixa}`}
                    align="center"
                    justify="center"
                    height="60px"
                    borderRadius="md"
                    fontWeight="semibold"
                    color={
                      Number(faixa) >= 500 && color !== 'whiteAlpha'
                        ? 'white'
                        : 'black'
                    }
                  >
                    {color}.{faixa}
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default ColorsDocs
