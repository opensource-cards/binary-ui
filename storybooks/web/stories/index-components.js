import infoAddon from '@kadira/react-storybook-addon-info';
import { setAddon, storiesOf, action } from '@kadira/storybook';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ActionButton from 'binary-ui-components/mobile/ActionButton';
import ActionDiv from 'binary-ui-components/mobile/ActionDiv';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import ActionLink from 'binary-ui-components/mobile/ActionLink';
import ActionLinkInline from 'binary-ui-components/mobile/ActionLinkInline';
import Alert, { AlertTypes } from 'binary-ui-components/mobile/Alert';
import Button, { ButtonTypes } from 'binary-ui-components/mobile/Button';
import Checkbox from 'binary-ui-components/mobile/Checkbox';
import ListItem from 'binary-ui-components/mobile/ListItem';
import ListItemContentText from 'binary-ui-components/mobile/ListItemContentText';
import ListItemNameText from 'binary-ui-components/mobile/ListItemNameText';
import ListItemPhotoWrapper from 'binary-ui-components/mobile/ListItemPhotoWrapper';
import Section from 'binary-ui-components/mobile/Section';
import Select, { selectOptionModel } from 'binary-ui-components/mobile/Select';
import Slider from 'binary-ui-components/mobile/Slider';
import Switch from 'binary-ui-components/mobile/Switch';
import Textarea from 'binary-ui-components/mobile/Textarea';
import TextField, { TextFieldTypes } from 'binary-ui-components/mobile/TextField';
import TextView from 'binary-ui-components/mobile/TextView';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { getImg } from './resources/fake-img';

setAddon(infoAddon);

const text = 'Important: for compatibility set container width in pixels!';
const selectedPhotoGuid = uuid.v1();

storiesOf('binary-ui-components links', module)
  .addWithInfo('action button', () => (
    <ActionButton onClick={action()} renderIconLeft={() => (<ArrowDown />)} >Put test here</ActionButton>
  ))
  .addWithInfo('action button disabled', () => (
    <ActionButton isDisabled onClick={action()} renderIconLeft={() => (<ArrowDown />)} >Put test here</ActionButton>
  ))
  .addWithInfo('action button submit disabled', () => (
    <ActionButton isDisabled onClick={action()} type="submit" renderIconLeft={() => (<ArrowDown />)} >Put test here</ActionButton>
  ))
  .addWithInfo('action div', () => (
    <ActionDiv onClick={action()} >Put test here</ActionDiv>
  ))
  .addWithInfo('action div disabled', () => (
    <ActionDiv isDisabled onClick={action()} >Put test here</ActionDiv>
  ))
  .addWithInfo('action icon', () => (
    <ActionIcon title="Icon" onClick={action()} renderIcon={() => (<ArrowDown />)} />
  ))
  .addWithInfo('action icon disabled', () => (
    <ActionIcon isDisabled title="Icon" onClick={action()} renderIcon={() => (<ArrowDown />)} />
  ))
  .addWithInfo('action link', () => (
    <ActionLink onClick={action()} renderIconLeft={() => (<ArrowDown />)} >
      ActionLink
    </ActionLink>
  ))
  .addWithInfo('action link disabled', () => (
    <ActionLink isDisabled onClick={action()} renderIconLeft={() => (<ArrowDown />)} >
      ActionLink
    </ActionLink>
  ))
  .addWithInfo('action link inline', () => (
    <ActionLinkInline href="http://try.cards/" onClick={action()} renderIconRight={() => (<ArrowDown />)} >
      ActionLinkInline
    </ActionLinkInline>
  ))
  .addWithInfo('action link inline disabled', () => (
    <ActionLinkInline href="http://try.cards/" isDisabled onClick={action()} renderIconRight={() => (<ArrowDown />)} >
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

storiesOf('binary-ui-components checkbox', module)
  .addWithInfo('checked', () => (
    <Checkbox
      isChecked
      onChange={action()}
      onClick={action()}
    />
  ))
  .addWithInfo('unchecked', () => (
    <Checkbox
      isChecked={false}
      onChange={action()}
      onClick={action()}
    />
  ));

storiesOf('binary-ui-components section', module)
  .addWithInfo('main', () => (
    <Section name="Section Title">
      Section Text
    </Section>
  ));

storiesOf('binary-ui-components select', module)
  .addWithInfo('main', () => (
    <Select
      selected="uk"
      items={[
        selectOptionModel('ko', 'ko', 'Korea (+82)'),
        selectOptionModel('uk', 'uk', 'Ukraine (+38)'),
      ]}
      onChange={action()}
    />
  ));

storiesOf('binary-ui-components slider', module)
  .addWithInfo('no buttons', () => (
    <Slider
      position={0}
      renderIconLeft={null}
      renderIconRight={null}
      onPositionChange={action()}
    />
  ))
  .addWithInfo('standard buttons', () => (
    <Slider
      position={0}
      onPositionChange={action()}
    />
  ));

storiesOf('binary-ui-components switch', module)
  .addWithInfo('with switch checked', () => (
    <Switch
      isChecked
      onChange={action()}
    />
  ))
  .addWithInfo('with switch unchecked', () => (
    <Switch
      isChecked={false}
      onChange={action()}
    />
  ));

storiesOf('binary-ui-components textview', module)
  .addWithInfo('rich', () => (
    <TextView
      isMoreButton
      onMoreClick={action()}
    >
      Look at "<a href="#">this</a>" text and a
      {' '}
      <ActionButton
        disabled={false}
        style={undefined}
        type="submit"
        renderIconRight={() => (<ArrowDown />)}
        onClick={action()}
      >
        Link
      </ActionButton>
    </TextView>
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
          renderIconLeft={null}
          renderIconRight={null}
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
        renderIcon={() => (<ArrowDown />)}
        onClick={action()}
      >
        list item name text
      </ListItemNameText>
    </ListItem>
  ))
  .addWithInfo('with button', () => (
    <ListItem>
      <ListItemNameText
        isEdit
        renderIcon={() => (<ArrowDown />)}
        onClick={action()}
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
        isChecked={false}
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
      }]}
      selectedPhotoGuid={selectedPhotoGuid}
      onPhotoClick={action()}
      onPhotoUpload={action()}
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
