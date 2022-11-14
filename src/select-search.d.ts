/* eslint-disable @typescript-eslint/no-unused-vars */
import { GroupBase } from 'chakra-react-select'

import { ColorsNames } from './theme'

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    color?: ColorsNames
    multiValueBackground?: ColorsNames
  }
}
