<div align="center">

# ☁ `@ricardo-jrm/echo`

<b>React lightweight intl</b>

![build](https://img.shields.io/github/workflow/status/ricardo-jrm/echo/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardo-jrm/echo?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardo--jrm)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardo-jrm/echo?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardo-jrm/echo?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardo-jrm/echo?style=for-the-badge)

</div>

<br />

---

<br />

### <b>Install</b>

```ts
npm install @ricardo-jrm/echo

yarn add @ricardo-jrm/echo
```

<br />

### <b>Usage</b>

```ts
// component
import { Echo, EchoProps } from '@ricardo-jrm/echo';

// hook
import { useEcho, EchoRecord, EchoMsgs } from '@ricardo-jrm/echo';

// provider
import { EchoProvider, EchoProviderProps } from '@ricardo-jrm/echo';


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

[MIT](https://github.com/ricardo-jrm/echo/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardo-jrm](https://github.com/ricardo-jrm))

Bootstrapped with 🟣[@ricardo-jrm/supernova](https://github.com/ricardo-jrm/supernova)

<br />
