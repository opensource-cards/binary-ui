import infoAddon from '@kadira/react-storybook-addon-info';
import { setAddon, storiesOf, action } from '@kadira/storybook';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
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

setAddon(infoAddon);

const text = 'Important: for compatibility set container width in pixels!';
const selectedPhotoGuid = uuid.v1();

storiesOf('binary-ui-components actionable icons', module)
  .addWithInfo('regular', () => (
    <ActionableIcon
      color="red"
      IconComponent={ArrowDown}
      size={20}
      onClick={action()}
    />
  ))
  .addWithInfo('hover', () => (
    <ActionableIcon
      color="red"
      IconComponent={ArrowDown}
      isHover
      size={20}
      onClick={action()}
    />
  ))
  .addWithInfo('hover & active', () => (
    <ActionableIcon
      color="red"
      IconComponent={ArrowDown}
      isActive
      isHover
      size={20}
      onClick={action()}
    />
  ))
  .addWithInfo('disabled', () => (
    <ActionableIcon
      color="red"
      IconComponent={ArrowDown}
      isDisabled
      size={20}
      onClick={action()}
    />
  ));

storiesOf('binary-ui-components actionable text', module)
  .addWithInfo('regular', () => (
    <ActionableText
      color="red"
      onClick={action()}
    >
      regular
    </ActionableText>
  ))
  .addWithInfo('hover', () => (
    <ActionableText
      color="red"
      isHover
      onClick={action()}
    >
      hover
    </ActionableText>
  ))
  .addWithInfo('hover & active', () => (
    <ActionableText
      color="red"
      isActive
      isHover
      onClick={action()}
    >
      hover & active
    </ActionableText>
  ))
  .addWithInfo('disabled', () => (
    <ActionableText
      color="red"
      isDisabled
      onClick={action()}
    >
      disabled
    </ActionableText>
  ));

storiesOf('binary-ui-components actionable list item icon', module)
  .addWithInfo('regular', () => (
    <ActionableListItemIcon
      IconComponent={ArrowDown}
      onClick={action()}
    />
  ))
  .addWithInfo('hover', () => (
    <ActionableListItemIcon
      IconComponent={ArrowDown}
      isHover
      onClick={action()}
    />
  ))
  .addWithInfo('hover & active', () => (
    <ActionableListItemIcon
      IconComponent={ArrowDown}
      isActive
      isHover
      onClick={action()}
    />
  ))
  .addWithInfo('disabled', () => (
    <ActionableListItemIcon
      IconComponent={ArrowDown}
      isDisabled
      onClick={action()}
    />
  ));

storiesOf('binary-ui-components links', module)
  .addWithInfo('action button', () => (
    <ActionButton onClick={action()} IconComponentLeft={ArrowDown} >Put test here</ActionButton>
  ))
  .addWithInfo('action button disabled', () => (
    <ActionButton isDisabled onClick={action()} IconComponentLeft={ArrowDown} >Put test here</ActionButton>
  ))
  .addWithInfo('action button submit disabled', () => (
    <ActionButton isDisabled onClick={action()} type="submit" IconComponentLeft={ArrowDown} >Put test here</ActionButton>
  ))
  .addWithInfo('action div', () => (
    <ActionDiv onClick={action()} >Put test here</ActionDiv>
  ))
  .addWithInfo('action div disabled', () => (
    <ActionDiv isDisabled onClick={action()} >Put test here</ActionDiv>
  ))
  .addWithInfo('action icon', () => (
    <ActionIcon title="Icon" onClick={action()} IconComponent={ArrowDown} />
  ))
  .addWithInfo('action icon disabled', () => (
    <ActionIcon isDisabled title="Icon" onClick={action()} IconComponent={ArrowDown} />
  ))
  .addWithInfo('action link', () => (
    <ActionLink onClick={action()} IconComponentLeft={ArrowDown} >
      ActionLink
    </ActionLink>
  ))
  .addWithInfo('action link disabled', () => (
    <ActionLink isDisabled onClick={action()} IconComponentLeft={ArrowDown} >
      ActionLink
    </ActionLink>
  ))
  .addWithInfo('action link inline', () => (
    <ActionLinkInline href="http://try.cards/" onClick={action()} IconComponentRight={ArrowDown} >
      ActionLinkInline
    </ActionLinkInline>
  ))
  .addWithInfo('action link inline disabled', () => (
    <ActionLinkInline href="http://try.cards/" isDisabled onClick={action()} IconComponentRight={ArrowDown} >
      ActionLinkInline
    </ActionLinkInline>
  ));

storiesOf('binary-ui-components alert', module)
  .addWithInfo('info', () => (
    <Alert text="Alert text" type={AlertTypes.INFO} />
  ))
  .addWithInfo('confirm', () => (
    <Alert text="Alert text" type={AlertTypes.CONFIRM} />
  ))
  .addWithInfo('critical', () => (
    <Alert text="Alert text" type={AlertTypes.CRITICAL} />
  ));

class TextareaDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '000',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.setState({
      value,
    });
  }
  render() {
    const { value } = this.state;
    return (
      <Textarea
        isMoreButton
        placeholder="Type here"
        value={value}
        onRef={action()}
        onTextChange={this.onChange}
        onMoreClick={action()}
      />
    );
  }
}

class SliderDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
    this.onPositionChange = this.onPositionChange.bind(this);
  }
  onPositionChange(position) {
    this.setState({
      position,
    });
  }
  render() {
    const { position } = this.state;
    return (
      <ListItem>
        <Slider
          position={position}
          renderIconLeft={() => (null)}
          renderIconRight={() => (null)}
          onPositionChange={this.onPositionChange}
        />
      </ListItem>
    );
  }
}

storiesOf('binary-ui-components list items', module)
  .addWithInfo('with list item name text', () => (
    <ListItem>
      <ListItemNameText
        isEdit
        isFull
        onClick={action()}
        IconComponent={ArrowDown}
      >
        list item name text
      </ListItemNameText>
    </ListItem>
  ))
  .addWithInfo('with button', () => (
    <ListItem>
      <ListItemNameText
        isEdit
        onClick={action()}
        IconComponent={ArrowDown}
      >
        Button Label
      </ListItemNameText>
      <Button text={text} type={ButtonTypes.RIGHT} onClick={action()} />
    </ListItem>
  ))
  .addWithInfo('with text (number)', () => (
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
  .addWithInfo('with text (phone number)', () => (
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
  .addWithInfo('with text (!isValid)', () => (
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
  .addWithInfo('slider', () => (
    <SliderDemo1 />
  ))
  .addWithInfo('with switch checked', () => (
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
  .addWithInfo('with switch unchecked', () => (
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
  .addWithInfo('with select', () => (
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
  .addWithInfo('textarea', () => (
    <TextareaDemo1 />
  ))
  .addWithInfo('textarea required', () => (
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
  .addWithInfo('photo selector', () => (
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
  .addWithInfo('with text', () => (
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
  .addWithInfo('all', () => (
    <TextView
      isMoreButton
      onMoreClick={action()}
    >
      Look at "<a href="#">this</a>" text and a
      <ActionButton
        IconComponentRight={ArrowDown}
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
  .addWithInfo('checked', () => (
    <Checkbox
      id="checkbox-1"
      isChecked
      onChange={action()}
    />
  ))
  .addWithInfo('unchecked', () => (
    <Checkbox
      id="checkbox-2"
      onChange={action()}
    />
  ));

storiesOf('binary-ui-components section', module)
  .addWithInfo('main', () => (
    <Section name="Section Title">
      Section Text
    </Section>
  ));
