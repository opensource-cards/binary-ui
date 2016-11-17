import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
  CardsIconCreateCard,
  CardsIconDelete,
  CardsIconDeleteAlt,
  CardsIconDeleted,
  CardsIconDeletedAlt,
  CardsIconDone,
  CardsIconFacebook,
  CardsIconFacebookAlt,
  CardsIconFacetime,
  CardsIconFacetimeAlt,
  CardsIconFavorites,
  CardsIconFavoritesAlt,
  CardsIconGoogle,
  CardsIconIncoming,
  CardsIconIncomingAlt,
  CardsIconInfo,
  CardsIconInfoAlt,
  CardsIconInstagram,
  CardsIconInstagramAlt,
  CardsIconIPhone,
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
  CardsIconTwitterAlt,
  CardsIconUbuntu,
  CardsIconUncheck,
  CardsIconUser,
  CardsIconUserAlt,
  CardsIconWhatsapp,
  CardsIconWhatsappAlt,
} from 'binary-ui-icons';
import styled from 'styled-components';

// render svg instead of canvas
import ARTSVGMode from 'art/modes/svg';
import ARTCurrentMode from 'art/modes/current';
ARTCurrentMode.setCurrent(ARTSVGMode);

const COLOR = '#0F9BE0';
const SIZE = 100;

const CardsIconAddStyled = styled(CardsIconAdd)`
  background-color: #FFFF00;
`;

storiesOf('Icons Advanced', module)
  .add('styled', () => (
    <CardsIconAddStyled color={COLOR} size={SIZE} />
  ))
  .add('styled events', () => (
    <CardsIconAddStyled color={COLOR} size={SIZE} onMouseDown={() => { console.log('onMouseDown'); }} />
  ));

storiesOf('Icons', module)
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
  .add('CardsIconCreateCard', () => (
    <CardsIconCreateCard color={COLOR} size={SIZE} />
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
  .add('CardsIconIncoming', () => (
    <CardsIconIncoming color={COLOR} size={SIZE} />
  ))
  .add('CardsIconIncomingAlt', () => (
    <CardsIconIncomingAlt color={COLOR} size={SIZE} />
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

storiesOf('Companies & Social', module)
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
  .add('CardsIconFacebook', () => (
    <CardsIconFacebook color={COLOR} size={SIZE} />
  ))
  .add('CardsIconFacebookAlt', () => (
    <CardsIconFacebookAlt color={COLOR} size={SIZE} />
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
  .add('CardsIconIPhone', () => (
    <CardsIconIPhone color={COLOR} size={SIZE} />
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
  .add('CardsIconTwitterAlt', () => (
    <CardsIconTwitterAlt color={COLOR} size={SIZE} />
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
