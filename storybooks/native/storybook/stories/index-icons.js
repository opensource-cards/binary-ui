import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Add from 'binary-ui-icons/binary/Add';
import AddCard from 'binary-ui-icons/binary/AddCard';
import Apple from 'binary-ui-icons/binary/Apple';
import AppleAlt from 'binary-ui-icons/binary/AppleAlt';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ArrowLeft from 'binary-ui-icons/binary/ArrowLeft';
import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import ArrowUp from 'binary-ui-icons/binary/ArrowUp';
import Call from 'binary-ui-icons/binary/Call';
import CallAlt from 'binary-ui-icons/binary/CallAlt';
import CameraAlt from 'binary-ui-icons/binary/CameraAlt';
import Cancel from 'binary-ui-icons/binary/Cancel';
import Card from 'binary-ui-icons/binary/Card';
import CardAlt from 'binary-ui-icons/binary/CardAlt';
import Cards from 'binary-ui-icons/binary/Cards';
import CardsAlt from 'binary-ui-icons/binary/CardsAlt';
import Check from 'binary-ui-icons/binary/Check';
import CheckAlt from 'binary-ui-icons/binary/CheckAlt';
import Copy from 'binary-ui-icons/binary/Copy';
import Delete from 'binary-ui-icons/binary/Delete';
import DeleteCharacter from 'binary-ui-icons/binary/DeleteCharacter';
import DeleteAlt from 'binary-ui-icons/binary/DeleteAlt';
import Deleted from 'binary-ui-icons/binary/Deleted';
import DeletedAlt from 'binary-ui-icons/binary/DeletedAlt';
import Designer from 'binary-ui-icons/binary/Designer';
import Done from 'binary-ui-icons/binary/Done';
import Facebook from 'binary-ui-icons/binary/Facebook';
import Facetime from 'binary-ui-icons/binary/Facetime';
import FacetimeAlt from 'binary-ui-icons/binary/FacetimeAlt';
import Favorites from 'binary-ui-icons/binary/Favorites';
import FavoritesAlt from 'binary-ui-icons/binary/FavoritesAlt';
import Google from 'binary-ui-icons/binary/Google';
import Github from 'binary-ui-icons/binary/Github';
import Info from 'binary-ui-icons/binary/Info';
import InfoAlt from 'binary-ui-icons/binary/InfoAlt';
import Instagram from 'binary-ui-icons/binary/Instagram';
import InstagramAlt from 'binary-ui-icons/binary/InstagramAlt';
import Keypad from 'binary-ui-icons/binary/Keypad';
import KeypadAlt from 'binary-ui-icons/binary/KeypadAlt';
import Linkedin from 'binary-ui-icons/binary/Linkedin';
import LinkedinAlt from 'binary-ui-icons/binary/LinkedinAlt';
import Location from 'binary-ui-icons/binary/Location';
import LocationAlt from 'binary-ui-icons/binary/LocationAlt';
import Locked from 'binary-ui-icons/binary/Locked';
import LockedAlt from 'binary-ui-icons/binary/LockedAlt';
import Logout from 'binary-ui-icons/binary/Logout';
import Medium from 'binary-ui-icons/binary/Medium';
import Microsoft from 'binary-ui-icons/binary/Microsoft';
import Minus from 'binary-ui-icons/binary/Minus';
import MinusAlt from 'binary-ui-icons/binary/MinusAlt';
import More from 'binary-ui-icons/binary/More';
import MoreAlt from 'binary-ui-icons/binary/MoreAlt';
import New from 'binary-ui-icons/binary/New';
import NewAlt from 'binary-ui-icons/binary/NewAlt';
import Open from 'binary-ui-icons/binary/Open';
import Redhat from 'binary-ui-icons/binary/Redhat';
import Remove from 'binary-ui-icons/binary/Remove';
import Save from 'binary-ui-icons/binary/Save';
import Scan from 'binary-ui-icons/binary/Scan';
import ScanAlt from 'binary-ui-icons/binary/ScanAlt';
import Search from 'binary-ui-icons/binary/Search';
import Settings from 'binary-ui-icons/binary/Settings';
import SettingsAlt from 'binary-ui-icons/binary/SettingsAlt';
import Share from 'binary-ui-icons/binary/Share';
import ShareAlt from 'binary-ui-icons/binary/ShareAlt';
import Stack from 'binary-ui-icons/binary/Stack';
import StackFull from 'binary-ui-icons/binary/StackFull';
import StackNew from 'binary-ui-icons/binary/StackNew';
import StackUnavailable from 'binary-ui-icons/binary/StackUnavailable';
import StackUnavailableAlt from 'binary-ui-icons/binary/StackUnavailableAlt';
import Store from 'binary-ui-icons/binary/Store';
import StoreAlt from 'binary-ui-icons/binary/StoreAlt';
import Telegram from 'binary-ui-icons/binary/Telegram';
import Text from 'binary-ui-icons/binary/Text';
import TextAlt from 'binary-ui-icons/binary/TextAlt';
import Time from 'binary-ui-icons/binary/Time';
import Translation from 'binary-ui-icons/binary/Translation';
import Twitter from 'binary-ui-icons/binary/Twitter';
import Ubuntu from 'binary-ui-icons/binary/Ubuntu';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import Update from 'binary-ui-icons/binary/Update';
import User from 'binary-ui-icons/binary/User';
import UserAlt from 'binary-ui-icons/binary/UserAlt';
import Whatsapp from 'binary-ui-icons/binary/Whatsapp';
import WhatsappAlt from 'binary-ui-icons/binary/WhatsappAlt';
import Youtube from 'binary-ui-icons/binary/Youtube';

const COLOR = '#000000';
const SIZE = 50;

storiesOf('binary-ui-icons', module)
  .add('general', () =>
    <View>
      <Add color={COLOR} size={SIZE} onPress={action('clicked')} />
      <AddCard color={COLOR} size={SIZE} onPress={action('clicked')} />
    </View>
  );
