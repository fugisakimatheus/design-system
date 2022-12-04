import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  FaIcon,
  FiIcon,
  MdIcon,
  SimpleGrid,
  ScrollPaginator
} from 'main'
import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'

const iconSources = ['Material Design', 'Font Aweasome', 'Father Icons']

function IconDocs() {
  const faNames = Object.keys(FaIcons)
  const fiNames = Object.keys(FiIcons)
  const mdNames = Object.keys(MdIcons)

  const [iconSource, setIconSource] = useState<string>(iconSources[0])
  const [search, setSearch] = useState<string>('')
  const [perPage, setPerPage] = useState<number>(100)

  const handleIconFilter = (name: string) => {
    return name.toLowerCase().includes(search.toLowerCase())
  }

  const mdResult =
    iconSource === iconSources[0] ? mdNames.filter(handleIconFilter) : []
  const faResult =
    iconSource === iconSources[1] ? faNames.filter(handleIconFilter) : []
  const fiResult =
    iconSource === iconSources[2] ? fiNames.filter(handleIconFilter) : []

  const hasSearch = search.trim().length > 0

  const mdIcons = (
    hasSearch ? mdResult : iconSource === iconSources[0] ? mdNames : []
  ).slice(0, perPage)

  const faIcons = (
    hasSearch ? faResult : iconSource === iconSources[1] ? faNames : []
  ).slice(0, perPage)

  const fiIcons = (
    hasSearch ? fiResult : iconSource === iconSources[2] ? fiNames : []
  ).slice(0, perPage)

  const canLoadMore = () => {
    if (iconSource === iconSources[0]) {
      return (hasSearch ? mdResult.length : mdNames.length) > mdIcons.length
    }
    if (iconSource === iconSources[1]) {
      return (hasSearch ? faResult.length : faNames.length) > faIcons.length
    }
    if (iconSource === iconSources[2]) {
      return (hasSearch ? fiResult.length : fiNames.length) > fiIcons.length
    }
    return false
  }

  useEffect(() => {
    setPerPage(100)
  }, [iconSource, search])

  return (
    <Box>
      <Box marginBottom="4">
        <Input
          variant="outline"
          colorScheme="blue"
          placeholder="Buscar ícones..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <Flex marginTop="4">
          {iconSources.map(source => (
            <Button
              key={source}
              colorScheme="blue"
              variant={source === iconSource ? 'solid' : 'outline'}
              onClick={() => setIconSource(source)}
              marginRight="4"
            >
              {source}
            </Button>
          ))}
        </Flex>
      </Box>

      <Box>
        {hasSearch && (
          <Text marginTop="lg" fontSize="lg" fontWeight="bold" color="blue.600">
            Resultados da busca:
          </Text>
        )}
        <Flex paddingY="4" wrap="wrap" justifyContent="space-between">
          {iconSource === iconSources[0] && (
            <>
              <Text
                paddingTop="sm"
                fontSize="md"
                fontWeight="semibold"
                color="blue.600"
              >
                Material Design:
              </Text>

              <SimpleGrid
                columns={8}
                spacing="6"
                marginTop="4"
                marginBottom="8"
                width="100%"
              >
                {mdIcons.map(iconName => (
                  <Box key={iconName} textAlign="center">
                    <MdIcon key={iconName} name={iconName as any} size="lg" />
                    <Text
                      marginTop={2}
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      {iconName}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </>
          )}

          {iconSource === iconSources[1] && (
            <>
              <Text
                paddingTop="sm"
                fontSize="md"
                fontWeight="semibold"
                color="blue.600"
              >
                Font Aweasome:
              </Text>
              <SimpleGrid
                columns={8}
                spacing="6"
                marginTop="4"
                marginBottom="8"
                width="100%"
              >
                {faIcons.map(iconName => (
                  <Box key={iconName} textAlign="center">
                    <FaIcon key={iconName} name={iconName as any} size="lg" />
                    <Text
                      marginTop={2}
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      {iconName}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </>
          )}

          {iconSource === iconSources[2] && (
            <>
              <Text
                paddingTop="sm"
                fontSize="md"
                fontWeight="semibold"
                color="blue.600"
              >
                Father Icons:
              </Text>
              <SimpleGrid
                columns={8}
                spacing="6"
                marginTop="4"
                marginBottom="8"
                width="100%"
              >
                {fiIcons.map(iconName => (
                  <Box key={iconName} textAlign="center">
                    <FiIcon key={iconName} name={iconName as any} size="lg" />
                    <Text
                      marginTop={2}
                      fontSize="sm"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      {iconName}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </>
          )}
        </Flex>
      </Box>
      <ScrollPaginator
        onLoadMore={() => setPerPage(old => old + 100)}
        canLoadMore={canLoadMore()}
        isLoading={false}
      />
    </Box>
  )
}

export default IconDocs
