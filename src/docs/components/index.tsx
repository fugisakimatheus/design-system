import React from 'react'

import Button from './button'
import Checkbox from './checkbox'
import Colors from './colors'
import Icon from './icon'
import Input from './input'
import Introduction from './introduction'

export type ComponentPage = {
  name: string
  group?: string
  component: JSX.Element
}

export const componentsPages: ComponentPage[] = [
  {
    name: 'Introdução',
    component: <Introduction />
  },
  {
    name: 'Colors',
    group: 'Tokens',
    component: <Colors />
  },
  {
    name: 'Borders',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Border Radius',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Spacing',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Font Sizes',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Line Heights',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Font Weights',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Letter Spacings',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Shadows',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Breakpoints',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'zIndices',
    group: 'Tokens',
    component: <Checkbox />
  },
  {
    name: 'Avatar',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Badge',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Flex',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Container',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Box',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Stack',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Divider',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Button',
    group: 'Components',
    component: <Button />
  },
  {
    name: 'IconButton',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Icon',
    group: 'Components',
    component: <Icon />
  },
  {
    name: 'Input',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Radio',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Switch',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Slider',
    group: 'Components',
    component: <Input />
  },
  {
    name: 'Checkbox',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Tabs',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Grid',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Spinner',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Text',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Heading',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Tooltip',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Select Search',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Image',
    group: 'Components',
    component: <Checkbox />
  },
  {
    name: 'Skeleton',
    group: 'Components',
    component: <Checkbox />
  }
]

export const groupedComponentsPages = componentsPages.reduce((list, page) => {
  if (!page.group) return list

  return {
    ...list,
    [page.group]: [...(list[page.group] || []), page].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }
}, {})

export const ungroupedComponentsPages = componentsPages.filter(
  page => !page.group
)

export const componentsPagesMap = new Map<string, ComponentPage>(
  componentsPages.map(page => [page.name, page])
)
