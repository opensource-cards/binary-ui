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
Contents     | Text

## License

MIT
