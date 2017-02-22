import { storiesOf, action } from '@kadira/storybook';
import {
  CardsIconArrowDown,
} from 'binary-ui-icons';
import ActionableIcon from 'binary-ui-components/components/ActionableIcon';
import ActionableText from 'binary-ui-components/components/ActionableText';
import ActionableListItemIcon from 'binary-ui-components/components/ActionableListItemIcon';
import {
  ActionIcon,
  ActionLink,
  ActionLinkInline,
  ActionDiv,
  ActionButton,
  Alert,
  AlertTypes,
  Button,
  ButtonTypes,
  Checkbox,
  ListItem,
  ListItemContentText,
  ListItemNameText,
  ListItemPhotoWrapper,
  Section,
  selectOptionModel,
  Select,
  Slider,
  Switch,
  Textarea,
  TextField,
  TextFieldTypes,
  TextView,
} from 'binary-ui-components';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { getImg } from './resources/fake-img';

const text = 'Button Text (very long name that will collapse when the screen is too narrow)';
const selectedPhotoGuid = uuid.v1();

storiesOf('binary-ui-components actionable icons', module)
  .add('regular', () => (
    <ActionableIcon
      color="red"
      IconComponent={CardsIconArrowDown}
      size={20}
      onClick={action()}
    />
  ))
  .add('hover', () => (
    <ActionableIcon
      color="red"
      IconComponent={CardsIconArrowDown}
      isHover
      size={20}
      onClick={action()}
    />
  ))
  .add('hover & active', () => (
    <ActionableIcon
      color="red"
      IconComponent={CardsIconArrowDown}
      isActive
      isHover
      size={20}
      onClick={action()}
    />
  ))
  .add('disabled', () => (
    <ActionableIcon
      color="red"
      IconComponent={CardsIconArrowDown}
      isDisabled
      size={20}
      onClick={action()}
    />
  ));

storiesOf('binary-ui-components actionable text', module)
  .add('regular', () => (
    <ActionableText
      color="red"
      onClick={action()}
    >
      regular
    </ActionableText>
  ))
  .add('hover', () => (
    <ActionableText
      color="red"
      isHover
      onClick={action()}
    >
      hover
    </ActionableText>
  ))
  .add('hover & active', () => (
    <ActionableText
      color="red"
      isActive
      isHover
      onClick={action()}
    >
      hover & active
    </ActionableText>
  ))
  .add('disabled', () => (
    <ActionableText
      color="red"
      isDisabled
      onClick={action()}
    >
      disabled
    </ActionableText>
  ));

storiesOf('binary-ui-components actionable list item icon', module)
  .add('regular', () => (
    <ActionableListItemIcon
      IconComponent={CardsIconArrowDown}
      onClick={action()}
    />
  ))
  .add('hover', () => (
    <ActionableListItemIcon
      IconComponent={CardsIconArrowDown}
      isHover
      onClick={action()}
    />
  ))
  .add('hover & active', () => (
    <ActionableListItemIcon
      IconComponent={CardsIconArrowDown}
      isActive
      isHover
      onClick={action()}
    />
  ))
  .add('disabled', () => (
    <ActionableListItemIcon
      IconComponent={CardsIconArrowDown}
      isDisabled
      onClick={action()}
    />
  ));

storiesOf('binary-ui-components links', module)
  .add('action button', () => (
    <ActionButton onClick={action()} IconComponentLeft={CardsIconArrowDown} >Put test here</ActionButton>
  ))
  .add('action button disabled', () => (
    <ActionButton isDisabled onClick={action()} IconComponentLeft={CardsIconArrowDown} >Put test here</ActionButton>
  ))
  .add('action button submit disabled', () => (
    <ActionButton isDisabled onClick={action()} type="submit" IconComponentLeft={CardsIconArrowDown} >Put test here</ActionButton>
  ))
  .add('action div', () => (
    <ActionDiv onClick={action()} >Put test here</ActionDiv>
  ))
  .add('action div disabled', () => (
    <ActionDiv isDisabled onClick={action()} >Put test here</ActionDiv>
  ))
  .add('action icon', () => (
    <ActionIcon title="Icon" onClick={action()} IconComponent={CardsIconArrowDown} />
  ))
  .add('action icon disabled', () => (
    <ActionIcon isDisabled title="Icon" onClick={action()} IconComponent={CardsIconArrowDown} />
  ))
  .add('action link', () => (
    <ActionLink onClick={action()} IconComponentLeft={CardsIconArrowDown} >
      ActionLink
    </ActionLink>
  ))
  .add('action link disabled', () => (
    <ActionLink isDisabled onClick={action()} IconComponentLeft={CardsIconArrowDown} >
      ActionLink
    </ActionLink>
  ))
  .add('action link inline', () => (
    <ActionLinkInline href="http://try.cards/" onClick={action()} IconComponentRight={CardsIconArrowDown} >
      ActionLinkInline
    </ActionLinkInline>
  ))
  .add('action link inline disabled', () => (
    <ActionLinkInline href="http://try.cards/" isDisabled onClick={action()} IconComponentRight={CardsIconArrowDown} >
      ActionLinkInline
    </ActionLinkInline>
  ));

storiesOf('binary-ui-components alert', module)
  .add('info', () => (
    <Alert text="Alert text" type={AlertTypes.INFO} />
  ))
  .add('confirm', () => (
    <Alert text="Alert text" type={AlertTypes.CONFIRM} />
  ))
  .add('critical', () => (
    <Alert text="Alert text" type={AlertTypes.CRITICAL} />
  ));

storiesOf('binary-ui-components list items', module)
  .add('with list item name text', () => (
    <ListItem>
      <ListItemNameText
        isEdit
        isFull
        onClick={action()}
        IconComponent={CardsIconArrowDown}
      >
        list item name text
      </ListItemNameText>
    </ListItem>
  ))
  .add('with button', () => (
    <ListItem>
      <ListItemNameText
        isEdit
        onClick={action()}
        IconComponent={CardsIconArrowDown}
      >
        Button Label
      </ListItemNameText>
      <Button text={text} type={ButtonTypes.RIGHT} onClick={action()} />
    </ListItem>
  ))
  .add('with text (number)', () => (
    <ListItem>
      <ListItemNameText>
        Text Field
      </ListItemNameText>
      <TextField
        isMoreButton
        isRequired
        mask="####"
        type={TextFieldTypes.NUMBER}
        value="000"
        onRef={action()}
        onTextChange={action()}
        onMoreClick={action()}
      />
    </ListItem>
  ))
  .add('with text (phone number)', () => (
    <ListItem>
      <ListItemNameText>
        Text Field Phone Number
      </ListItemNameText>
      <TextField
        isMoreButton
        mask="## #### ####"
        type={TextFieldTypes.PHONE_NUMBER}
        value="000"
        onRef={action()}
        onTextChange={action()}
        onMoreClick={action()}
      />
    </ListItem>
  ))
  .add('with text (!isValid)', () => (
    <ListItem>
      <ListItemNameText>
        ListItemContentText
      </ListItemNameText>
      <TextField
        isMoreButton
        isValid={false}
        placeholder="Placeholder"
        value=""
        onTextChange={action()}
      />
    </ListItem>
  ))
  .add('slider', () => (
    <ListItem>
      <Slider
        id="slider-1"
        onChange={action()}
      />
    </ListItem>
  ))
  .add('with switch checked', () => (
    <ListItem>
      <ListItemNameText>
        Switch Label
      </ListItemNameText>
      <Switch
        id="switch-1"
        isChecked
        onChange={action()}
      />
    </ListItem>
  ))
  .add('with switch unchecked', () => (
    <ListItem>
      <ListItemNameText>
        Switch Label
      </ListItemNameText>
      <Switch
        id="switch-2"
        onChange={action()}
      />
    </ListItem>
  ))
  .add('with select', () => (
    <ListItem>
      <ListItemNameText>
        Select Label
      </ListItemNameText>
      <Select
        selected="uk"
        items={[
          selectOptionModel('ko', 'ko', 'Korea (+82)'),
          selectOptionModel('uk', 'uk', 'Ukraine (+38)'),
        ]}
        onChange={action()}
      />
    </ListItem>
  ))
  .add('textarea', () => (
    <Textarea
      isMoreButton
      placeholder="Type here"
      value="000"
      onRef={action()}
      onTextChange={action()}
      onMoreClick={action()}
    />
  ))
  .add('textarea required', () => (
    <Textarea
      isMoreButton
      isValid={false}
      placeholder="Type here"
      value=""
      onRef={action()}
      onTextChange={action()}
      onMoreClick={action()}
    />
  ))
  .add('photo selector', () => (
    <ListItemPhotoWrapper
      isSelectable
      limit={3}
      noImageUrl="https://dararweyne.files.wordpress.com/2012/04/23.jpg?w=2000&h="
      uploadedPhotos={[{
        url: getImg(),
        guid: selectedPhotoGuid,
        isNew: false,
      }]}
      selectedPhotoGuid={selectedPhotoGuid}
      onPhotoClick={action()}
      onSelectPhotoUrl={action()}
      onSetUploadedPhotos={action()}
      photoFit="contain"
    />
  ))
  .add('with text', () => (
    <ListItem>
      <ListItemNameText>
        ListItemContentText
      </ListItemNameText>
      <ListItemContentText
        isMoreButton
        onMoreClick={action()}
        text="ListItemContentText text"
      />
    </ListItem>
  ));

storiesOf('binary-ui-components textview', module)
  .add('all', () => (
    <TextView
      isMoreButton
      onMoreClick={action()}
    >
      Look at "<a href="#">this</a>" text and a
      <ActionButton
        IconComponentRight={CardsIconArrowDown}
        disabled={false}
        style={undefined}
        type="submit"
        onClick={action()}
      >
        Link
      </ActionButton>
    </TextView>
  ));

storiesOf('binary-ui-components checkbox', module)
  .add('checked', () => (
    <Checkbox
      id="checkbox-1"
      isChecked
      onChange={action()}
    />
  ))
  .add('unchecked', () => (
    <Checkbox
      id="checkbox-2"
      onChange={action()}
    />
  ));

storiesOf('binary-ui-components section', module)
  .add('main', () => (
    <Section name="Section Title">
      Section Text
    </Section>
  ));
