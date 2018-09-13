# binary-ui-carousel

[![Greenkeeper badge](https://badges.greenkeeper.io/andcards/binary-ui-carousel.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/andcards/binary-ui-carousel.svg?branch=master)](https://travis-ci.org/andcards/binary-ui-carousel)
[![npm package](https://badge.fury.io/js/binary-ui-carousel.svg)](https://www.npmjs.org/package/binary-ui-carousel)
[![Dependency Status](https://david-dm.org/andcards/binary-ui-carousel.svg)](https://david-dm.org/andcards/binary-ui-carousel)
[![devDependency Status](https://david-dm.org/andcards/binary-ui-carousel/dev-status.svg)](https://david-dm.org/andcards/binary-ui-carousel#info=devDependencies)
[![peerDependency Status](https://david-dm.org/andcards/binary-ui-carousel/peer-status.svg)](https://david-dm.org/andcards/binary-ui-carousel#info=peerDependencies)

React carousel component.

This component is designed to be used with a [binary-ui](https://github.com/andcards/binary-ui) package with performance in mind. Only visible content is rendered for making DOM tree smaller and first rendering/re-rendering faster.

<img src="https://github.com/andcards/binary-ui-carousel/blob/master/demo.gif" width="320" />

### Installation

```
yarn add binary-ui-carousel
```

### API

prop                | type                       | default value
--------------------|----------------------------|--------------
`children`          | `arrayOf[node]`            |
`containerHeight`   | `number`                   |
`containerWidth`    | `number`                   |
`isLoop`            | `boolean`                  | `false`
`renderButtonLeft`  | `func`                     |
`renderButtonRight` | `func`                     |
`selectedIndex`     | `number`                   |
`onChangeIndex`     | `func`                     |       

### License

MIT
