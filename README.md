# blur-image-url

## Install

Install with `npm`

```
$ npm install blur-image-url
```

Or install with `yarn`

```
$ yarn add stackBlurToUrl
```

```js
import blurImageUrl from 'blur-image-url';
```

Or umd builds are also available

```html
<script src="path/to/blur-image-url.js"></script>
```

Will expose the global variable to `window.blurImageUrl`.

## Usage

```js
// Only need image address and blur radius
blurImageUrl('./banner.png', 100).then(url => {
    console.log(url);
});
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
