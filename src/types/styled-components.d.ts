import 'styled-components';
import { ColorsType } from 'src/styles/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
