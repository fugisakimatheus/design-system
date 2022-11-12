/* eslint-disable @typescript-eslint/no-unused-vars */
import { Token } from '@chakra-ui/styled-system/dist/declarations/src/utils'
import { GroupBase } from 'chakra-react-select'

import { ColorsNames } from './theme'

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    multiValueBackground: Token<ColorsNames, 'colors'>
  }
}
