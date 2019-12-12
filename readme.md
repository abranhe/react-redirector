<p align="center">
	<br>
	<a href="https://npmjs.com/package/react-redirector"><img src="https://cdn.abranhe.com/projects/react-redirector/logo.svg" width="250"></a>
	<br>
    <br>
	<a href="https://npmjs.com/react-redirector">react-redirector</a>: Redirect to a URL using React
	<br>
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/react-redirector"><img src="https://img.shields.io/travis/abranhe/react-redirector.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/react-redirector/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/react-redirector.svg" /></a>
  <a href="https://npmjs.com/package/react-redirector"><img src="https://img.shields.io/npm/v/react-redirector.svg"></a>
  <br>
  <br>
</p>


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