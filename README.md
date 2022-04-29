<div align="center">

# ☁ `@ricardojrmcom/echo`

<b>React lightweight intl</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/echo/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/echo?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/echo?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/echo?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/echo?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardojrmcom/echo

yarn add @ricardojrmcom/echo
```

<br />

### <b>Usage</b>

```ts
// component
import { Echo, EchoProps } from '@ricardojrmcom/echo';

// hook
import { useEcho, EchoRecord, EchoMsgs } from '@ricardojrmcom/echo';

// provider
import { EchoProvider, EchoProviderProps } from '@ricardojrmcom/echo';


// app
const exampleEcho: EchoRecord = {
  en: {
    example: 'example en',
  },
  pt: {
    example: 'exemplo pt',
  },
};

<EchoProvider echo={exampleEcho} echoDefault="en">
  {...}
</EchoProvider>


// component
const Echo = ({ echoid }: EchoProps) => {
  const { echo } = useEcho();
  return <span>{echo(echoid)}</span>;
};

<Echo echoid="example" />
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/echo/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
