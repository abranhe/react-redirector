# react-redirector [![Build Status](https://github.com/abranhe/react-redirector/workflows/Publish/badge.svg)](https://github.com/abranhe/react-redirector/actions) [![](https://img.shields.io/npm/v/react-redirector.svg)](https://npmjs.com/package/react-redirector)

> Redirect to a URL using React

## Install

```
$ npm install react-redirector
```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Redirector from 'react-redirector';

const App = () => <Redirector to='https://abranhe.com'/>;

ReactDOM.render(<App/>, document.getElementById('root'));
```

## API

### `<Redirector/>` 

Redirect to a URL, extends `window.location`.

### Props

`to`: Location to redirect the page.

## License

[MIT][license] License © [Carlos Abraham][abranhe]

<!-------------------- Links ------------------------>
[abranhe]: https://github.com/abranhe
[license]: https://github.com/abranhe/react-redirector/blob/master/license
