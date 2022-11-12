/* eslint-disable @typescript-eslint/no-unused-vars */
import { GroupBase } from 'chakra-react-select'

import { Token } from './components/SelectSearch'
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
