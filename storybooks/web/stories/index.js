import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  CardsIconAdd,
  CardsIconAddCard,
  CardsIconApple,
  CardsIconAppleAlt,
  CardsIconArrowDown,
  CardsIconArrowLeft,
  CardsIconArrowRight,
  CardsIconArrowUp,
  CardsIconCall,
  CardsIconCallAlt,
  CardsIconCameraAlt,
  CardsIconCancel,
  CardsIconCard,
  CardsIconCardAlt,
  CardsIconCards,
  CardsIconCardsAlt,
  CardsIconCheck,
  CardsIconCheckAlt,
  CardsIconCopy,
  CardsIconDelete,
  CardsIconDeleteAlt,
  CardsIconDeleted,
  CardsIconDeletedAlt,
  CardsIconDesigner,
  CardsIconDone,
  CardsIconFacebook,
  CardsIconFacetime,
  CardsIconFacetimeAlt,
  CardsIconFavorites,
  CardsIconFavoritesAlt,
  CardsIconGoogle,
  CardsIconInfo,
  CardsIconInfoAlt,
  CardsIconInstagram,
  CardsIconInstagramAlt,
  CardsIconKeypad,
  CardsIconKeypadAlt,
  CardsIconLinkedin,
  CardsIconLinkedinAlt,
  CardsIconLocation,
  CardsIconLocationAlt,
  CardsIconLocked,
  CardsIconLockedAlt,
  CardsIconLogout,
  CardsIconMedium,
  CardsIconMicrosoft,
  CardsIconMinus,
  CardsIconMinusAlt,
  CardsIconMore,
  CardsIconMoreAlt,
  CardsIconNew,
  CardsIconNewAlt,
  CardsIconOpen,
  CardsIconRedhat,
  CardsIconSave,
  CardsIconScan,
  CardsIconScanAlt,
  CardsIconSearch,
  CardsIconSettings,
  CardsIconSettingsAlt,
  CardsIconShare,
  CardsIconShareAlt,
  CardsIconStack,
  CardsIconStackFull,
  CardsIconStackNew,
  CardsIconStore,
  CardsIconStoreAlt,
  CardsIconTelegram,
  CardsIconText,
  CardsIconTextAlt,
  CardsIconTranslation,
  CardsIconTwitter,
  CardsIconUbuntu,
  CardsIconUncheck,
  CardsIconUser,
  CardsIconUserAlt,
  CardsIconWhatsapp,
  CardsIconWhatsappAlt,
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
  Switch,
  Textarea,
  TextField,
  TextFieldTypes,
  TextView,
} from 'binary-ui-components';
import uuid from 'node-uuid';
import styled from 'styled-components';
import { getImg } from './resources/fake-img';

// render svg instead of canvas
import ARTSVGMode from 'art/modes/svg';
import ARTCurrentMode from 'art/modes/current';
ARTCurrentMode.setCurrent(ARTSVGMode);

const COLOR = '#0F9BE0';
const SIZE = 100;

const CardsIconAddStyled = styled(CardsIconAdd)`
  background-color: #FFFF00;
`;

storiesOf('binary-ui-icons with styles', module)
  .add('styled', () => (
    <CardsIconAddStyled color={COLOR} size={SIZE} />
  ))
  .add('styled events', () => (
    <CardsIconAddStyled color={COLOR} size={SIZE} onMouseDown={action()} />
  ));

storiesOf('binary-ui-icons main', module)
  .add('CardsIconAdd', () => (
    <CardsIconAdd color={COLOR} size={SIZE} />
  ))
  .add('CardsIconAddCard', () => (
    <CardsIconAddCard color={COLOR} size={SIZE} />
  ))
  .add('CardsIconArrowDown', () => (
    <CardsIconArrowDown color={COLOR} size={SIZE} />
  ))
  .add('CardsIconArrowLeft', () => (
    <CardsIconArrowLeft color={COLOR} size={SIZE} />
  ))
  .add('CardsIconArrowRight', () => (
    <CardsIconArrowRight color={COLOR} size={SIZE} />
  ))
  .add('CardsIconArrowUp', () => (
    <CardsIconArrowUp color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCall', () => (
    <CardsIconCall color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCallAlt', () => (
    <CardsIconCallAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCameraAlt', () => (
    <CardsIconCameraAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCancel', () => (
    <CardsIconCancel color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCard', () => (
    <CardsIconCard color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCardAlt', () => (
    <CardsIconCardAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCheck', () => (
    <CardsIconCheck color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCheckAlt', () => (
    <CardsIconCheckAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCopy', () => (
    <CardsIconCopy color={COLOR} size={SIZE} />
  ))
  .add('CardsIconDelete', () => (
    <CardsIconDelete color={COLOR} size={SIZE} />
  ))
  .add('CardsIconDeleteAlt', () => (
    <CardsIconDeleteAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconDeleted', () => (
    <CardsIconDeleted color={COLOR} size={SIZE} />
  ))
  .add('CardsIconDeletedAlt', () => (
    <CardsIconDeletedAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconDone', () => (
    <CardsIconDone color={COLOR} size={SIZE} />
  ))
  .add('CardsIconFavorites', () => (
    <CardsIconFavorites color={COLOR} size={SIZE} />
  ))
  .add('CardsIconFavoritesAlt', () => (
    <CardsIconFavoritesAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconInfo', () => (
    <CardsIconInfo color={COLOR} size={SIZE} />
  ))
  .add('CardsIconInfoAlt', () => (
    <CardsIconInfoAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconKeypad', () => (
    <CardsIconKeypad color={COLOR} size={SIZE} />
  ))
  .add('CardsIconKeypadAlt', () => (
    <CardsIconKeypadAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLocation', () => (
    <CardsIconLocation color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLocationAlt', () => (
    <CardsIconLocationAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLocked', () => (
    <CardsIconLocked color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLockedAlt', () => (
    <CardsIconLockedAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLogout', () => (
    <CardsIconLogout color={COLOR} size={SIZE} />
  ))
  .add('CardsIconMinus', () => (
    <CardsIconMinus color={COLOR} size={SIZE} />
  ))
  .add('CardsIconMinusAlt', () => (
    <CardsIconMinusAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconMore', () => (
    <CardsIconMore color={COLOR} size={SIZE} />
  ))
  .add('CardsIconMoreAlt', () => (
    <CardsIconMoreAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconNew', () => (
    <CardsIconNew color={COLOR} size={SIZE} />
  ))
  .add('CardsIconNewAlt', () => (
    <CardsIconNewAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconOpen', () => (
    <CardsIconOpen color={COLOR} size={SIZE} />
  ))
  .add('CardsIconSave', () => (
    <CardsIconSave color={COLOR} size={SIZE} />
  ))
  .add('CardsIconScan', () => (
    <CardsIconScan color={COLOR} size={SIZE} />
  ))
  .add('CardsIconScanAlt', () => (
    <CardsIconScanAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconSearch', () => (
    <CardsIconSearch color={COLOR} size={SIZE} />
  ))
  .add('CardsIconSettings', () => (
    <CardsIconSettings color={COLOR} size={SIZE} />
  ))
  .add('CardsIconSettingsAlt', () => (
    <CardsIconSettingsAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconShare', () => (
    <CardsIconShare color={COLOR} size={SIZE} />
  ))
  .add('CardsIconShareAlt', () => (
    <CardsIconShareAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconStack', () => (
    <CardsIconStack color={COLOR} size={SIZE} />
  ))
  .add('CardsIconStackFull', () => (
    <CardsIconStackFull color={COLOR} size={SIZE} />
  ))
  .add('CardsIconStackNew', () => (
    <CardsIconStackNew color={COLOR} size={SIZE} />
  ))
  .add('CardsIconStore', () => (
    <CardsIconStore color={COLOR} size={SIZE} />
  ))
  .add('CardsIconStoreAlt', () => (
    <CardsIconStoreAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconText', () => (
    <CardsIconText color={COLOR} size={SIZE} />
  ))
  .add('CardsIconTextAlt', () => (
    <CardsIconTextAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconTranslation', () => (
    <CardsIconTranslation color={COLOR} size={SIZE} />
  ))
  .add('CardsIconUncheck', () => (
    <CardsIconUncheck color={COLOR} size={SIZE} />
  ))
  .add('CardsIconUser', () => (
    <CardsIconUser color={COLOR} size={SIZE} />
  ))
  .add('CardsIconUserAlt', () => (
    <CardsIconUserAlt color={COLOR} size={SIZE} />
  ));

storiesOf('binary-ui-icons companies & social', module)
  .add('CardsIconApple', () => (
    <CardsIconApple color={COLOR} size={SIZE} />
  ))
  .add('CardsIconAppleAlt', () => (
    <CardsIconAppleAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCards', () => (
    <CardsIconCards color={COLOR} size={SIZE} />
  ))
  .add('CardsIconCardsAlt', () => (
    <CardsIconCardsAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconDesigner', () => (
    <CardsIconDesigner color={COLOR} size={SIZE} />
  ))
  .add('CardsIconFacebook', () => (
    <CardsIconFacebook color={COLOR} size={SIZE} />
  ))
  .add('CardsIconFacetime', () => (
    <CardsIconFacetime color={COLOR} size={SIZE} />
  ))
  .add('CardsIconFacetimeAlt', () => (
    <CardsIconFacetimeAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconGoogle', () => (
    <CardsIconGoogle color={COLOR} size={SIZE} />
  ))
  .add('CardsIconInstagram', () => (
    <CardsIconInstagram color={COLOR} size={SIZE} />
  ))
  .add('CardsIconInstagramAlt', () => (
    <CardsIconInstagramAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLinkedin', () => (
    <CardsIconLinkedin color={COLOR} size={SIZE} />
  ))
  .add('CardsIconLinkedinAlt', () => (
    <CardsIconLinkedinAlt color={COLOR} size={SIZE} />
  ))
  .add('CardsIconMedium', () => (
    <CardsIconMedium color={COLOR} size={SIZE} />
  ))
  .add('CardsIconMicrosoft', () => (
    <CardsIconMicrosoft color={COLOR} size={SIZE} />
  ))
  .add('CardsIconRedhat', () => (
    <CardsIconRedhat color={COLOR} size={SIZE} />
  ))
  .add('CardsIconTelegram', () => (
    <CardsIconTelegram color={COLOR} size={SIZE} />
  ))
  .add('CardsIconTwitter', () => (
    <CardsIconTwitter color={COLOR} size={SIZE} />
  ))
  .add('CardsIconUbuntu', () => (
    <CardsIconUbuntu color={COLOR} size={SIZE} />
  ))
  .add('CardsIconWhatsapp', () => (
    <CardsIconWhatsapp color={COLOR} size={SIZE} />
  ))
  .add('CardsIconWhatsappAlt', () => (
    <CardsIconWhatsappAlt color={COLOR} size={SIZE} />
  ));

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
