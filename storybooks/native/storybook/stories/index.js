import React from 'react';
import { storiesOf, action } from '@kadira/react-native-storybook';
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
  CardsIconDone,
  CardsIconDesigner,
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
import styled from 'styled-components/native';

import { StatusBar, Text, TextInput, View, Picker } from 'react-native';
import uuid from 'react-native-uuid';
import { getImg } from './resources/fake-img';
import ActionableIcon from 'binary-ui-components/components/ActionableIcon';
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
  SelectOptionModel,
  Select,
  Switch,
  Textarea,
  TextField,
  TextFieldTypes,
  Textview,
} from 'binary-ui-components';

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
    <CardsIconScan color={COLOR} size={SIZE} />
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

const text = 'Button label text';
const selectedPhotoGuid = uuid.v1();
const selectValue = 'Ukraine (+380)';

storiesOf('binary-ui-components actionable icons', module)
  .add('regular', () => (
    <View>
      <StatusBar hidden />
      <ActionableIcon
        color="red"
        IconComponent={CardsIconArrowDown}
        size={20}
      />
    </View>
  ))
  .add('hover', () => (
    <View>
      <StatusBar hidden />
      <ActionableIcon
        color="red"
        IconComponent={CardsIconArrowDown}
        isHover
        size={20}
      />
    </View>
  ))
  .add('hover & active', () => (
    <View>
      <StatusBar hidden />
      <ActionableIcon
        color="red"
        IconComponent={CardsIconArrowDown}
        isActive
        isHover
        size={20}
      />
    </View>
  ))
  .add('desabled', () => (
    <View>
      <StatusBar hidden />
      <ActionableIcon
        color="red"
        IconComponent={CardsIconArrowDown}
        isDisabled
        size={20}
      />
    </View>
  ));

storiesOf('binary-ui-components links', module)
  .add('action icon', () => (
    <View>
      <StatusBar hidden />
      <ActionIcon IconComponent={CardsIconArrowDown} title="Icon" />
    </View>
  ))
  .add('action link', () => (
    <View>
      <StatusBar hidden />
      <ActionLink IconComponentLeft={CardsIconArrowDown} >
        ActionLink
      </ActionLink>
    </View>
  ))
  .add('action link inline', () => (
    <View>
      <StatusBar hidden />
      <ActionLinkInline IconComponentRight={CardsIconArrowDown} >
        ActionLinkInline
      </ActionLinkInline>
    </View>
  ))
  .add('action div', () => (
    <View>
      <StatusBar hidden />
      <ActionBlock>Put test here</ActionBlock>
    </View>
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

storiesOf('binary-ui-components  list items', module)
  .add('with list item name text', () => (
    <View>
      <StatusBar hidden />
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
    </View>
  ))
  .add('with button', () => (
    <View>
      <StatusBar hidden />
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
    </View>
  ))
  .add('with text (number)', () => (
    <ListItem>
      <ListItemNameText>
        Text Field
      </ListItemNameText>
      <TextField
        isMoreButton
        isValid
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
    <View>
      <StatusBar hidden />
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
    </View>
  ))
  .add('with switch unchecked', () => (
    <View>
      <StatusBar hidden />
      <ListItem>
        <ListItemNameText>
          Switch Label
        </ListItemNameText>
        <Switch
          id="switch-2"
          onChange={action()}
        />
      </ListItem>
    </View>
  ))
  .add('with select', () => (
    <View>
      <StatusBar hidden />
      <ListItem>
      <ListItemNameText>
        Select Label
      </ListItemNameText>
      <Button text={selectValue} type={ButtonTypes.DOWN} onClick={action()} />
    </ListItem>
  </View>
  ))
  .add('textarea', () => (
    <View>
      <StatusBar hidden />
      <Textarea
        isMoreButton
        placeholder="Type here"
        value="000"
        onTextChange={action()}
        onMoreClick={action()}
      />
    </View>
  ))
  .add('textarea required', () => (
    <View>
      <StatusBar hidden />
      <Textarea
        isMoreButton
        isValid={false}
        placeholder="Type here"
        value=""
        onTextChange={action()}
        onMoreClick={action()}
      />
    </View>
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
    <View>
      <StatusBar hidden />
        <Textview
        isMoreButton
        onMoreClick={action()}
      >
        <Text>Look at "this" text and a </Text>
        <ActionButton
          disabled={false}
          style={undefined}
          type="submit"
          onClick={action()}
        >
          Link
        </ActionButton>
      </Textview>
    </View>
  ));

storiesOf('binary-ui-components checkbox', module)
  .add('checked', () => (
    <View>
      <StatusBar hidden />
      <Checkbox
        id="checkbox-1"
        isChecked
        onChange={action()}
      />
    </View>
  ))
  .add('unchecked', () => (
    <View>
      <StatusBar hidden />
      <Checkbox
        id="checkbox-2"
        onChange={action()}
      />
    </View>
  ));

storiesOf('binary-ui-components section', module)
  .add('main', () => (
    <View>
      <StatusBar hidden />
      <Section name="Section Title">
        <Text>Section Text</Text>
      </Section>
    </View>
  ));
