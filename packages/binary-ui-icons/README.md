# Icons

## Design Rules

Icon style follows a set of rules:
- Canvas size 512 × 512 px
- Over 90% of icon fit inside 66 px / 446 px vertical and horizontal guides
- When including filled and line style icon, append `Alt` at the end of the line icon filename
- Stroke width 25 px, with 100% rounded ends
- All shapes should be converted to curves. To import icons to this project, only `<path>` shape supported, no `<rect>`, `<ellipse>`, `<line>` or other basic SVG shapes 

Merge all curves, export to SVG and copy path data `d=""` prop.

## Iconset

![](iconset-preview.gif)

## Example

From the Circle.svg file:

```html
<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" 
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
  <path d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-105.14 85.36,-190.5 190.5,-190.5Zm0,25c91.342,0 165.5,74.158 165.5,165.5c0,91.342 -74.158,165.5 -165.5,165.5c-91.342,0 -165.5,-74.158 -165.5,-165.5c0,-91.342 74.158,-165.5 165.5,-165.5Z"
  />
</svg>
```

extract data prop:
```html
d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-105.14 85.36,-190.5 190.5,-190.5Zm0,25c91.342,0 165.5,74.158 165.5,165.5c0,91.342 -74.158,165.5 -165.5,165.5c-91.342,0 -165.5,-74.158 -165.5,-165.5c0,-91.342 74.158,-165.5 165.5,-165.5Z"
```

and use it in file named CardsIconCircle.jsx file:
```jsx
import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M256,65.5c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-105.14 85.36,-190.5 190.5,-190.5Zm0,25c91.342,0 165.5,74.158 165.5,165.5c0,91.342 -74.158,165.5 -165.5,165.5c-91.342,0 -165.5,-74.158 -165.5,-165.5c0,-91.342 74.158,-165.5 165.5,-165.5Z"
      />
    </Group>
  )
);
```
Do not include `style=""` prop of the shape, or any other props.
Don't forget to import the newly created icon into Storybook for preview.

## API

prop             | type                 | default value
-----------------|----------------------|--------------
`color`          | `string`             | 
`size`         | `number`             | '20'

## Contribute

Please see [CONTRIBUTING.md](CONTRIBUTING.md)

## License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/material-ui/blob/master/LICENSE)
