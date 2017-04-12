# binary-ui-components

## Design Rules

Component style follows a set of rules:
- Flexbox layout is preferred for all elements
- When navigating to another page on button press, the direction of the icon button should correspond to animation. If next page arrives from the right, use CardsIconArrowRight. If next page arrives from the bottom, use ArrowDown. 

## Component anatomy

List elements have the following structure:

<table>
  <tr>
    <td>Container</td>
    <td align="center" colspan="2" bgcolor="#0087BD">ListItem</td>
  </tr>
  <tr>
    <td>Layout</td>
    <td bgcolor="#C40333">ListItemName</td>
    <td bgcolor="#009e6b">ListItemContents</td>
  </tr>
  <tr>
    <td>Component</td>
    <td>ListItemNameText</td>
    <td>ListItemContentText<br>Button<br>Switch<br>TextField</td>
  </tr>
</table>

There are also sections with pure text, which are constructed like this:

function     | component
-------------|-------------
Container    | Section
Contents     | TextView

### Example

```jsx
<Section name={sectionTitle} >
  <TextView style={sectionStyle}>
    {someText}
  </TextView>
</Section>
```

## Components list

component    | API        | use              
-------------|---------|----------------------
[ActionButton](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20links&selectedStory=action%20button)       | `children` <br> `isDisabled` <br> `style` <br> `onClick` <br> `onSubmit` <br> `IconComponentLeft` <br> `IconComponentRight` | Clickable text with icon for apps
[ActionDiv](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20links&selectedStory=action%20div)          | `isDisabled` <br> `onClick` | Clickable `<div>` element for apps
[ActionIcon](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20links&selectedStory=action%20icon)          | `color` <br> `size` <br> `isDisabled` <br> `onMouseEnter` <br> `onMouseLeave` <br> `onTapDown` | Clickable icon only for apps
[ActionLink](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20links&selectedStory=action%20link)          | `children` <br> `isDisabled` <br> `style` <br> `onClick` <br> `onMouseEnter` <br> `onMouseLeave` <br> `onTapDown` <br> `IconComponentLeft` <br> `IconComponentRight` | Link component for web pages
[ActionLinkInline](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20links&selectedStory=action%20link%20inline)          | same as above | Same as above, but styled for positioning inside text blocks
[Alert](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20alert&selectedStory=info)          | `type` (INFO, CONFIRM, CRITICAL) <br> `text` | Snackbars for lightweight feedback about an operation
Button          | `text` <br> `type` (DOWN, RIGHT)  <br> `onClick` | Clickable full width `ListItem` with tap highlight for apps
[Checkbox](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20checkbox&selectedStory=checked)          | `isChecked` <br> `onChange` <br> `onClick` | Description
[ListItem](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=with%20list%20item%20name%20text)     | -     | Container for list items
ListItemContents | `borderColor` <br> `children` <br> `isEdit` <br> `isTapHighlight` <br> `isTypingHighlight` <br> `isValid` <br> `onClick`   | Container for `ListItem` contents components (right side)
[ListItemContentText](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=with%20text)          | `isMoreButton` <br> `text` <br> `onMoreClick` | Static text component for `ListItem` contents (right side)
[ListItemNameText](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=with%20list%20item%20name%20text)   | `children` <br> `isEdit` <br> `isFull` <br> `onClick` <br> `IconComponent` <br>  | Static text component for `ListItem` name (left side)
[ListItemPhotoWrapper](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=photo%20selector)          | `isSelectable` <br> `limit` <br> `noImageUrl` <br> `photoFit` <br> `selectedPhotoGuid` <br> `uploadedPhotos` <br> `onPhotoClick` <br> `onPhotoUpload` | Component for profile photo upload and selection
[Section](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20section&selectedStory=main)         | `name` <br> `children` | Container for list items with header
[Select](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=with%20select)         | `items` <br> `selected` <br> `onChange` | Styled implementation of standard `<select>` component
[Switch](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20checkbox&selectedStory=checked)         | `isChecked` <br> `onChange` | Switch toggle
[Textarea](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=textarea)         | `isMoreButton` <br> `isValid` <br> `value` <br> `onBlur` <br> `onFocus` <br> `onTextChange` <br> `onMoreClick` | Styled implementation of standard `<textarea>` component
[TextField](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20list%20items&selectedStory=with%20text%20%28number%29)          | `borderColor` <br> `isMoreButton` <br> `isValid` <br> `mask` <br> `type` (ANY, NUMBER, PASSWORD, EMAIL, PHONE_NUMBER, LINK) <br> `value` <br> `onBlur` <br> `onFocus` <br> `onMoreClick` <br> `onTextChange` | Description
[TextView](https://opensource-cards.github.io/binary-ui/?selectedKind=binary-ui-components%20section&selectedStory=main)  | `children` <br> `isEdit` <br> `isMoreButton` <br> `onMoreClick` | Full width text component

### Note

These files should be set globally.

```
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

## License

MIT
