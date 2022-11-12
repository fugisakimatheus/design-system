# Como instalar o design system no meu projeto?

## 1° - Ter acesso ao repositório do design-system e ter SSH configurado no Github

&nbsp;

## 2° - Instalar pacote com npm ou yarn

### #branch, #tag, #commit-hash

```bash
yarn add git+ssh://git@github.com:fugisakimatheus/design-system.git#v1.0.0

# ou

npm install git+ssh://git@github.com:fugisakimatheus/design-system.git#develop
```

---

&nbsp;

## 3° - Configurar ThemeProvider

#### Deve-se adicionar o encapsulamento do ThemeProvider no arquivo principal da aplicação, ou seja, o arquivo no qual vai ter acesso a todas as telas/componentes.

### Exemplo: arquivo "\_app.js" no **Next.js**

```js
import { ThemeProvider } from '@fugisaki/design-system'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

### Outro exemplo: arquivo "index.js" com **CRA**

```js
import Routes from './routes'
import { ThemeProvider } from '@fugisaki/design-system'

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
```

---

&nbsp;

## 4° - Pronto, agora basta importar os componentes do design system e começar a usar nos componentes ou telas desejados

```js
import { Flex, Button, MdIcon } from '@fugisaki/design-system'

export default function MinhaTela() {
  return (
    <Flex>
      <MdIcon name="insert_drive_file" size="sm" color="red.500" />
      <Button colorScheme="blue">Hello World</Button>
    </Flex>
  )
}
```
