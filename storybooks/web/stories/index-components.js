import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf, action } from '@storybook/react';
import Remove from 'binary-ui-icons/binary/Remove';
import Add from 'binary-ui-icons/binary/Add';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import IconMore from 'binary-ui-icons/binary/More';
import ActionButton from 'binary-ui-components/mobile/ActionButton';
import ActionDiv from 'binary-ui-components/mobile/ActionDiv';
import ActionIcon from 'binary-ui-components/mobile/ActionIcon';
import ActionLink from 'binary-ui-components/mobile/ActionLink';
import ActionLinkInline from 'binary-ui-components/mobile/ActionLinkInline';
import Alert, { ALERT_TYPES } from 'binary-ui-components/mobile/Alert';
import Button from 'binary-ui-components/mobile/Button';
import Checkbox from 'binary-ui-components/mobile/Checkbox';
import Group from 'binary-ui-components/mobile/Group';
import ImagePicker from 'binary-ui-components/mobile/ImagePicker';
import ProgressBar from 'binary-ui-components/mobile/ProgressBar';
import Section from 'binary-ui-components/mobile/Section';
import Select from 'binary-ui-components/mobile/Select';
import Slider from 'binary-ui-components/mobile/Slider';
import Switch from 'binary-ui-components/mobile/Switch';
import Textarea from 'binary-ui-components/mobile/Textarea';
import Tooltip from 'binary-ui-components/mobile/Tooltip';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';
import Textline from 'binary-ui-components/mobile/Textline';
import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { getImg } from './resources/fake-img';

setAddon(infoAddon);

const text = 'Important: for compatibility set container width in pixels!';
const imageSelectedId = uuid.v1();

class InputWithMask extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }
  handleTextChange(value) {
    this.setState(() => ({
      value,
    }))
  }
  render() {
    const { value } = this.state;
    return (
      <Input
          placeholder="INPUT_FIELD_TYPES.TEL with mask"
          type={INPUT_FIELD_TYPES.TEL}
          value={value}
          mask="(##) ###-##-##"
          renderIcon={() => (<IconMore />)}
          onTextChange={value => this.handleTextChange(value)}
          onMoreClick={action()}
        />
    )
  }
}

class TooltipDemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleLeft: false,
      isVisibleRight: false,
    };
    this.onChangeLeft = this.onChangeLeft.bind(this);
    this.onChangeRight = this.onChangeRight.bind(this);
  }

  onChangeLeft() {
    this.setState((prevState) => ({
      isVisibleLeft: !prevState.isVisibleLeft,
    }));
  }

  onChangeRight() {
    this.setState((prevState) => ({
      isVisibleRight: !prevState.isVisibleRight,
    }));
  }

  render() {
    const { isVisibleLeft, isVisibleRight } = this.state;
    return (
      <div style={{ padding: 50 }} >
        <div style={{ float: 'left', height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', position: 'relative' }}>
          <ActionIcon id="IconTooltipLeft" title="Icon" onClick={this.onChangeLeft} renderIcon={() => (<ArrowDown />)} size={20} />
        </div>
        <div style={{ float: 'right', height: 20, width: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', position: 'relative' }}>
          <ActionIcon id="IconTooltipRight" title="Icon" onClick={this.onChangeRight} renderIcon={() => (<ArrowDown />)} size={20} />
        </div>
        <div style={{ clear: 'both' }} />
        {/* 
        <div style={{ margin: 50, backgroundColor: 'lightgray' }} >
          <div>Container for Tooltips</div>
          <Tooltip
            isVisible={isVisibleLeft}
            label="Right tooltip"
            placement="bottom-right"
            targetId="IconTooltipLeft"
          />
          <Tooltip
            isVisible={isVisibleRight}
            label="Left tooltip"
            placement="bottom-left"
            targetId="IconTooltipRight"
          />
        </div>
        */}
        
        <div style={{ position: 'relative' }} >
          <div style={{ position: 'absolute', top: 50, left: 50, backgroundColor: 'lightgray' }} >
            <div>Container for Tooltips</div>
            <Tooltip
              isVisible={isVisibleLeft}
              label="Right tooltip"
              placement="bottom-right"
              targetId="IconTooltipLeft"
            />
            <Tooltip
              isVisible={isVisibleRight}
              label="Left tooltip"
              placement="bottom-left"
              targetId="IconTooltipRight"
            />
          </div>
        </div>
        
      </div>
    );
  }
}

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
    <ActionIcon title="Icon" onClick={action()} renderIcon={() => (<Add />)} />
  ))
  .addWithInfo('action icon with tooltip', () => (
    <TooltipDemo1 />
  ))
  .addWithInfo('action icon pass color', () => (
    <ActionIcon color="red" title="Icon" onClick={action()} renderIcon={() => (<ArrowDown />)} />
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
    <ActionLinkInline href="http://try.cards/" onClick={action()} renderIconRight={() => (<ArrowRight size={16} />)} >
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
    this.setState(() => ({
      value,
    }));
  }
  render() {
    const { value } = this.state;
    return (
      <Textarea
        placeholder="Type here"
        value={value}
        renderIcon={() => (<IconMore />)}
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
    this.setState(() => ({
      position,
    }));
  }
  render() {
    const { position } = this.state;
    return (
      <Slider
        position={position}
        renderIconLeft={() => (<Remove />)}
        renderIconRight={() => (<Add />)}
        onPositionChange={this.onPositionChange}
      />
    );
  }
}

storiesOf('binary-ui-components', module)
  .addWithInfo('Alert', () => (
    <div>
      <Alert text="Alert text that is very long would be clipped with ellipsis instead of wrapping to a new line" type={ALERT_TYPES.INFO} onClick={action()} />
      <Alert text="Alert text" type={ALERT_TYPES.CONFIRM} onClick={action()} />
      <Alert text="Alert text" type={ALERT_TYPES.PRIORITY} onClick={action()} />
      <Alert text="Alert text" type={ALERT_TYPES.CRITICAL} onClick={action()} />
    </div>
  ))
  .addWithInfo('Button', () => (
    <div>
      <Button label="A standard button" isBold onClick={action()} />
      <Button label="A non editable button" isEdit={false} onClick={action()} />
      <Button label="A disabled button" isBold isDisabled onClick={action()} />
      <Button label="A standard with button icon" isBold renderIcon={() => (<ArrowDown />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon button" isBold renderIcon={() => (<ArrowDown />)} onClick={action()} />
      <Button color="#0087BD" label="A colorful with icon disabled button" isBold isDisabled renderIcon={() => (<ArrowDown />)} onClick={action()} />
    </div>
  ))
  .addWithInfo('Checkbox', () => (
    <div>
      <Checkbox isChecked onChange={action()} onClick={action()} />
      <Checkbox isChecked={false} onChange={action()} onClick={action()} />
    </div>
  ))
  .addWithInfo('ImagePicker', () => (
    <ImagePicker
      imageFit="contain"
      imageUploadUrl="https://dararweyne.files.wordpress.com/2012/04/23.jpg?w=2000&h="
      images={[{
        url: getImg(),
        id: imageSelectedId,
      }]}
      imageSelectedId={imageSelectedId}
      isImageUpload={1 < 3}
      onImageClick={action()}
      onImageUpload={action()}
    />
  ))
  .addWithInfo('Input', () => (
      <div>
        <Input
          isRequired
          placeholder="INPUT_FIELD_TYPES.TEXT"
          type={INPUT_FIELD_TYPES.TEXT}
          value=""
          onTextChange={action()}
          onMoreClick={action()}
        />
        <Input
          isRequired
          placeholder="INPUT_FIELD_TYPES.NUMBER"
          type={INPUT_FIELD_TYPES.NUMBER}
          value=""
          renderIcon={() => (<IconMore />)}
          onTextChange={action()}
          onMoreClick={action()}
        />
        <Input
          placeholder="INPUT_FIELD_TYPES.TEL"
          type={INPUT_FIELD_TYPES.TEL}
          value=""
          renderIcon={() => (<IconMore />)}
          onTextChange={action()}
          onMoreClick={action()}
        />
        <InputWithMask />
        <Input
          placeholder="INPUT_FIELD_TYPES.PASSWORD"
          type={INPUT_FIELD_TYPES.PASSWORD}
          value=""
          renderIcon={() => (<IconMore />)}
          onTextChange={action()}
          onMoreClick={action()}
        />
        <Input
          isValid={false}
          placeholder="Invalid"
          type={INPUT_FIELD_TYPES.EMAIL}
          value=""
          renderIcon={() => (<IconMore />)}
          onTextChange={action()}
          onMoreClick={action()}          
        />
      </div>
  ))
  .addWithInfo('Group', () => (
    <div>
      <Group
        renderLeft={() => (
          <Select
            selected="uk"
            items={[
              { key: 'ko', value: 'ko', label: 'Korea (+82)' },
              { key: 'uk', value: 'uk', label: 'Ukraine (+38)' },
            ]}
            onChange={action()}
          />
        )}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value=""
            renderIcon={() => (<IconMore />)}
            onTextChange={action()}
            onMoreClick={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (<Button label={text} renderIcon={() => (<ArrowDown />)} isBold onClick={action()} />)}
        renderRight={() => (
          <Slider
            position={0}
            renderIconLeft={null}
            renderIconRight={null}
            onPositionChange={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (<Textline isBold >Label</Textline>)}
        renderRight={() => (<TextareaDemo1 />)}
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
      isValid={false}
      items={[
        { key: 'ko', value: 'ko', label: 'Korea (+82)' },
        { key: 'uk', value: 'uk', label: 'Ukraine (+38)' },
      ]}
      selected="uk"
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
  .addWithInfo('ProgressBar', () => (
    <div>
      <ProgressBar progress={89} />
      <ProgressBar progress={90} />
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
    <div>
      <Textline
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Look at "<a href="#">this</a>" text
      </Textline>
      <Textline
        isDisabled
        isEdit
        renderIcon={() => (<IconMore />)}
        onMoreClick={action()}
      >
        Look at "<a href="#">this</a>" text
      </Textline>
      <Textline isBold >
        Look at bold text
      </Textline>
      <Textline isBold isDisabled >
        Look at bold text
      </Textline>
    </div>
  ))
  .addWithInfo('Textarea', () => (
    <div>
      <TextareaDemo1 />
      <Textarea
        isValid={false}
        placeholder="Type here"
        value=""
        renderIcon={() => (<IconMore />)}
        onTextChange={action()}
        onMoreClick={action()}
      />
    </div>
  ));
