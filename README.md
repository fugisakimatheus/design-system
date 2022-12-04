# Fugisaki - Design System

## Configuração do ambiente
  ### Recomenda-se o uso do **"nvm"** para facilitar a instalação e configuração do **Node** e suas diferentes versões.

- ### Node: 14.18.3 ou a versão LTS mais recente
- ### Yarn: 1.22.4 ou mais recente

---

## Comandos

### Instalando as dependências

```bash
yarn

#or

yarn install
```

### Inicia as docs do design-system

```bash
yarn ds:docs
```

#### Gera as tipagens customizadas do tema do chakra, usando arquivo de configuração do tema

```bash
yarn gen:theme
```

#### Executa os testes

```bash
yarn test
```

#### Executa os testes no modo watch(fica observando mudanças)

```bash
yarn test:watch
```

#### Executa os testes e logo depois abre o arquivo de coverage

```bash
yarn test:coverage
```

#### Executa a verificação de estilos de código e tipagem

```bash
yarn check:lint
```

#### Executa a correção da padronização de syntax do typescript

```bash
yarn fix:lint
```

#### Corrige identação, estilos de código, quebra de linha, etc...

```bash
yarn prettify
```

---

&nbsp;

# Extensões requeridas

- ### ESLint (<https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>);
- ### Prettier (<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>);

---

&nbsp;

# Outros documentos

## [Como instalar a lib no meu projeto?](./INSTALL.md)

## [Como fazer deploy da lib?](./DEPLOY.md)

---

&nbsp;
