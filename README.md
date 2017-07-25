# is-color-stop

Check if a string is CSS color stop


## Install

```shell
$ npm install is-color-stop
```

## Usage

```js
const isColorStop = require('is-color-stop');

isColorStop('yellow    12px') // true
isColorStop('yellow') // true
isColorStop('yellow', '12px') // true
isColorStop('yellow', 'px') // false

isColorStop.isColor('red') // true
isColorStop.isColor('rgb(255)') // false

isColorStop.isRGB('rgb(255, 0, 0)') // true
isColorStop.isRGB('rgb(255)') // false

isColorStop.isRGBA('rgba(255, 0, 0, .8)') // true
isColorStop.isRGBA('rgba(255, 0, 0)') // false

isColorStop.isHSL('hsl(123, 45%, 67%)') // true
isColorStop.isHSL('hsl(123, 45%)') // false

isColorStop.isHSLA('hsla(123, 45%, 67%, 0.4)') // true
isColorStop.isHSLA('hsla(123, 45%, 67%)') // false

isColorStop.isHex('#fff') // true
isColorStop.isHex('#ff') // false

isColorStop.isCSSColorName('tomato') // true
isColorStop.isCSSColorName('hoge') // false

isColorStop.isCSSLengthUnit('px') // true
isColorStop.isCSSLengthUnit('x') // false

isColorStop.isTransparent('transparent') // true
```

## License

The MIT License (MIT)

Copyright (c) 2017 Pigcan
