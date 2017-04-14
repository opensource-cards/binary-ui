import infoAddon from '@kadira/react-storybook-addon-info';
import { setAddon, storiesOf, action } from '@kadira/storybook';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ActionButton from 'binary-ui-components/mobile/ActionButton';
import ActionDiv from 'binary-ui-components/mobile/ActionDiv';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import ActionLink from 'binary-ui-components/mobile/ActionLink';
import ActionLinkInline from 'binary-ui-components/mobile/ActionLinkInline';
import Alert, { ALERT_TYPES } from 'binary-ui-components/mobile/Alert';
import Button from 'binary-ui-components/mobile/Button';
import Checkbox from 'binary-ui-components/mobile/Checkbox';
import ListItem from 'binary-ui-components/mobile/ListItem';
import ListItemContentText from 'binary-ui-components/mobile/ListItemContentText';
import ListItemNameText from 'binary-ui-components/mobile/ListItemNameText';
import Group from 'binary-ui-components/mobile/Group';
import ImagePicker from 'binary-ui-components/mobile/ImagePicker';
import Section from 'binary-ui-components/mobile/Section';
import Select from 'binary-ui-components/mobile/Select';
import Slider from 'binary-ui-components/mobile/Slider';
import Switch from 'binary-ui-components/mobile/Switch';
import Textarea from 'binary-ui-components/mobile/Textarea';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';
import Text from 'binary-ui-components/mobile/Text';
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
      <Slider
        position={position}
        onPositionChange={this.onPositionChange}
      />
    );
  }
}

storiesOf('binary-ui-components', module)
  .addWithInfo('Alert', () => (
    <div>
      <Alert text="Alert text" type={ALERT_TYPES.INFO} />
      <Alert text="Alert text" type={ALERT_TYPES.CONFIRM} />
      <Alert text="Alert text" type={ALERT_TYPES.CRITICAL} />
    </div>
  ))
  .addWithInfo('Button', () => (
    <div>
      <Button label={text} isBold onClick={action()} />
      <Button label={text} isEdit={false} onClick={action()} />
    </div>
  ))
  .addWithInfo('Checkbox', () => (
    <div>
      <Checkbox
        isChecked
        onChange={action()}
        onClick={action()}
      />
      <Checkbox
        isChecked={false}
        onChange={action()}
        onClick={action()}
      />
    </div>
  ))
  .addWithInfo('ImagePicker', () => (
    <ImagePicker
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
  .addWithInfo('Input', () => (
      <div>
        <Input
          isRequired
          type={INPUT_FIELD_TYPES.ANY}
          onRef={action()}
          onTextChange={action()}
          onMoreClick={action()}
          placeholder="INPUT_FIELD_TYPES.ANY"
        />
        <Input
          isMoreButton
          isRequired
          type={INPUT_FIELD_TYPES.NUMBER}
          onRef={action()}
          onTextChange={action()}
          onMoreClick={action()}
          placeholder="INPUT_FIELD_TYPES.NUMBER"          
        />
        <Input
          isMoreButton
          type={INPUT_FIELD_TYPES.PHONE_NUMBER}
          onRef={action()}
          onTextChange={action()}
          onMoreClick={action()}
          placeholder="INPUT_FIELD_TYPES.PHONE_NUMBER"
        />
        <Input
          isMoreButton
          type={INPUT_FIELD_TYPES.PASSWORD}
          onRef={action()}
          onTextChange={action()}
          onMoreClick={action()}
          placeholder="INPUT_FIELD_TYPES.PASSWORD"
        />
        <Input
          isMoreButton
          isValid={false}
          placeholder="Invalid"
          onTextChange={action()}
          onMoreClick={action()}          
          onRef={action()}
          type={INPUT_FIELD_TYPES.EMAIL}
        />
      </div>
  ))
  .addWithInfo('Group', () => (
    <div>
      <Group
        renderLeft={() => (<Select
        selected="uk"
        items={[
          { key: 'ko', value: 'ko', label: 'Korea (+82)' },
          { key: 'uk', value: 'uk', label: 'Ukraine (+38)' },
        ]}
        onChange={action()}
      />)}
        renderRight={() => (<Input
            isMoreButton
            type={INPUT_FIELD_TYPES.PHONE_NUMBER}
            onRef={action()}
            onTextChange={action()}
            onMoreClick={action()}
            placeholder="Input"
          />)}
      />
      <Group
        renderLeft={() => (<Button label={text} renderIcon={() => (<ArrowDown />)} isBold onClick={action()} />)}
        renderRight={() => (
          <Slider
            position={0}
            renderIconLeft={null}
            renderIconRight={null}
            onPositionChange={action()}
          />)}
      />
    </div>
  ))
  .addWithInfo('Section', () => (
    <Section label="Section">
      Section contents
    </Section>
  ))
  .addWithInfo('Select', () => (
    <Select
      selected="uk"
      items={[
        { key: 'ko', value: 'ko', label: 'Korea (+82)' },
        { key: 'uk', value: 'uk', label: 'Ukraine (+38)' },
      ]}
      onChange={action()}
    />
  ))
  .addWithInfo('Slider', () => (
    <div>
      <Slider
        position={0}
        renderIconLeft={null}
        renderIconRight={null}
        onPositionChange={action()}
      />
      <SliderDemo1 />
    </div>
  ))
  .addWithInfo('Switch', () => (
    <div>
      <Switch
        isChecked
        label={text}
        onChange={action()}
      />
      <Switch
        isChecked={false}
        onChange={action()}
      />
    </div>
  ))
  .addWithInfo('Text', () => (
    <Text
      isMoreButton
      onMoreClick={action()}
    >
      Look at "<a href="#">this</a>" text
    </Text>
  ))
  .addWithInfo('Textarea', () => (
    <div>
      <TextareaDemo1 />
      <Textarea
        isMoreButton
        isValid={false}
        placeholder="Type here"
        value=""
        onRef={action()}
        onTextChange={action()}
        onMoreClick={action()}
      />
    </div>
  ));
