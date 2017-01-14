# Styles
## Description

### Layout styles (web)

const                  | use
-----------------------|-------------
FONT_FAMILY_MAIN       | set default font families for all devices
MAXIMIZED_STYLE        | make components' height and width 100% (JS)
MAXIMIZED_CSS          | same as above but CSS
NO_SELECT_STYLE        | make object non-selectable (JS)
NO_SELECT_CSS          | same as above but CSS
WEBSITE_RESET_STYLES   | neutralize default styles
WEBSITE_WRAPPER_STYLE  | positioning website components using JS
WEBSITE_WRAPPER_CSS    | same as above but CSS
LIST_ITEM_HEIGHT       | default height of list elements in non-card stacks

### Layout styles (native)

const                  | use
-----------------------|-------------
MAIN_FONT_FAMILY_IOS       | set default font for iOS
MAIN_FONT_FAMILY_ANDROID       | set default font for Android

### Color styles (web and native)

Cards color palette relies on six elementary color percepts of human vision—the psychological primaries—as described by Natural Color System.

<table>
<tr>
  <th align="left">const</th>
  <th align="left">default</th>
  <th align="left">use</th>
</tr>
<tr>
  <td>CARDS_GREY_COLOR</td>
  <td bgcolor="#EEEAE5">#EEEAE5</td>
  <td>used for background (user logged in)</td>
</tr>
<tr>
  <td>CARDS_SECONDARY_COLOR</td>
  <td bgcolor="#EAEBEC">#EAEBEC</td>
  <td>used for background (not logged in)</td>
</tr>
<tr>
  <td>CARDS_BLUE_COLOR</td>
  <td bgcolor="#0087BD">#0087BD</td>
  <td>used for active state</td>
</tr>
<tr>
  <td>CARDS_RED_COLOR</td>
  <td bgcolor="#C40333">#C40333</td>
  <td>used for warnings, errors, delete</td>
</tr>
<tr>
  <td>CARDS_GREEN_COLOR</td>
  <td bgcolor="#009e6b">#009E6B</td>
  <td>used for phone-related elements (provisional)</td>
</tr>
<tr>
  <td>CARDS_DARK_COLOR</td>
  <td bgcolor="#454759">#454759</td>
  <td>used for settings (provisional)</td>
</tr>
<tr>
  <td>CARDS_DISABLED_COLOR</td>
  <td bgcolor="#808080">#808080</td>
  <td>used for disabled elements</td>
</tr>
</table>

## Contribute

Please see [CONTRIBUTING.md](CONTRIBUTING.md)

## License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/material-ui/blob/master/LICENSE)
