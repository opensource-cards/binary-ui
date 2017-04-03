import { storiesOf, action } from '@kadira/storybook';
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
import User from 'binary-ui-icons/binary/User';
import UserAlt from 'binary-ui-icons/binary/UserAlt';
import Whatsapp from 'binary-ui-icons/binary/Whatsapp';
import WhatsappAlt from 'binary-ui-icons/binary/WhatsappAlt';
import Youtube from 'binary-ui-icons/binary/Youtube';
import React from 'react';
import styled from 'styled-components';

const COLOR = '#0F9BE0';
const SIZE = 100;

const AddStyled = styled(Add)`
  background-color: #FFFF00;
`;

storiesOf('binary-ui-icons with styles', module)
  .add('styled', () => (
    <AddStyled color={COLOR} size={SIZE} />
  ))
  .add('styled events', () => (
    <AddStyled color={COLOR} size={SIZE} onMouseDown={action()} />
  ));

storiesOf('binary-ui-icons main', module)
  .add('Add', () => (
    <Add color={COLOR} size={SIZE} />
  ))
  .add('AddCard', () => (
    <AddCard color={COLOR} size={SIZE} />
  ))
  .add('ArrowDown', () => (
    <ArrowDown color={COLOR} size={SIZE} />
  ))
  .add('ArrowLeft', () => (
    <ArrowLeft color={COLOR} size={SIZE} />
  ))
  .add('ArrowRight', () => (
    <ArrowRight color={COLOR} size={SIZE} />
  ))
  .add('ArrowUp', () => (
    <ArrowUp color={COLOR} size={SIZE} />
  ))
  .add('Call', () => (
    <Call color={COLOR} size={SIZE} />
  ))
  .add('CallAlt', () => (
    <CallAlt color={COLOR} size={SIZE} />
  ))
  .add('CameraAlt', () => (
    <CameraAlt color={COLOR} size={SIZE} />
  ))
  .add('Cancel', () => (
    <Cancel color={COLOR} size={SIZE} />
  ))
  .add('Card', () => (
    <Card color={COLOR} size={SIZE} />
  ))
  .add('CardAlt', () => (
    <CardAlt color={COLOR} size={SIZE} />
  ))
  .add('Check', () => (
    <Check color={COLOR} size={SIZE} />
  ))
  .add('CheckAlt', () => (
    <CheckAlt color={COLOR} size={SIZE} />
  ))
  .add('Copy', () => (
    <Copy color={COLOR} size={SIZE} />
  ))
  .add('Delete', () => (
    <Delete color={COLOR} size={SIZE} />
  ))
  .add('DeleteCharacter', () => (
    <DeleteCharacter color={COLOR} size={SIZE} />
  ))
  .add('DeleteAlt', () => (
    <DeleteAlt color={COLOR} size={SIZE} />
  ))
  .add('Deleted', () => (
    <Deleted color={COLOR} size={SIZE} />
  ))
  .add('DeletedAlt', () => (
    <DeletedAlt color={COLOR} size={SIZE} />
  ))
  .add('Done', () => (
    <Done color={COLOR} size={SIZE} />
  ))
  .add('Favorites', () => (
    <Favorites color={COLOR} size={SIZE} />
  ))
  .add('FavoritesAlt', () => (
    <FavoritesAlt color={COLOR} size={SIZE} />
  ))
  .add('Info', () => (
    <Info color={COLOR} size={SIZE} />
  ))
  .add('InfoAlt', () => (
    <InfoAlt color={COLOR} size={SIZE} />
  ))
  .add('Keypad', () => (
    <Keypad color={COLOR} size={SIZE} />
  ))
  .add('KeypadAlt', () => (
    <KeypadAlt color={COLOR} size={SIZE} />
  ))
  .add('Location', () => (
    <Location color={COLOR} size={SIZE} />
  ))
  .add('LocationAlt', () => (
    <LocationAlt color={COLOR} size={SIZE} />
  ))
  .add('Locked', () => (
    <Locked color={COLOR} size={SIZE} />
  ))
  .add('LockedAlt', () => (
    <LockedAlt color={COLOR} size={SIZE} />
  ))
  .add('Logout', () => (
    <Logout color={COLOR} size={SIZE} />
  ))
  .add('Minus', () => (
    <Minus color={COLOR} size={SIZE} />
  ))
  .add('MinusAlt', () => (
    <MinusAlt color={COLOR} size={SIZE} />
  ))
  .add('More', () => (
    <More color={COLOR} size={SIZE} />
  ))
  .add('MoreAlt', () => (
    <MoreAlt color={COLOR} size={SIZE} />
  ))
  .add('New', () => (
    <New color={COLOR} size={SIZE} />
  ))
  .add('NewAlt', () => (
    <NewAlt color={COLOR} size={SIZE} />
  ))
  .add('Open', () => (
    <Open color={COLOR} size={SIZE} />
  ))
  .add('Save', () => (
    <Save color={COLOR} size={SIZE} />
  ))
  .add('Scan', () => (
    <Scan color={COLOR} size={SIZE} />
  ))
  .add('ScanAlt', () => (
    <ScanAlt color={COLOR} size={SIZE} />
  ))
  .add('Search', () => (
    <Search color={COLOR} size={SIZE} />
  ))
  .add('Settings', () => (
    <Settings color={COLOR} size={SIZE} />
  ))
  .add('SettingsAlt', () => (
    <SettingsAlt color={COLOR} size={SIZE} />
  ))
  .add('Share', () => (
    <Share color={COLOR} size={SIZE} />
  ))
  .add('ShareAlt', () => (
    <ShareAlt color={COLOR} size={SIZE} />
  ))
  .add('Stack', () => (
    <Stack color={COLOR} size={SIZE} />
  ))
  .add('StackFull', () => (
    <StackFull color={COLOR} size={SIZE} />
  ))
  .add('StackNew', () => (
    <StackNew color={COLOR} size={SIZE} />
  ))
  .add('Store', () => (
    <Store color={COLOR} size={SIZE} />
  ))
  .add('StoreAlt', () => (
    <StoreAlt color={COLOR} size={SIZE} />
  ))
  .add('Text', () => (
    <Text color={COLOR} size={SIZE} />
  ))
  .add('TextAlt', () => (
    <TextAlt color={COLOR} size={SIZE} />
  ))
  .add('Time', () => (
    <Time color={COLOR} size={SIZE} />
  ))
  .add('Translation', () => (
    <Translation color={COLOR} size={SIZE} />
  ))
  .add('Uncheck', () => (
    <Uncheck color={COLOR} size={SIZE} />
  ))
  .add('User', () => (
    <User color={COLOR} size={SIZE} />
  ))
  .add('UserAlt', () => (
    <UserAlt color={COLOR} size={SIZE} />
  ));

storiesOf('binary-ui-icons companies & social', module)
  .add('Apple', () => (
    <Apple color={COLOR} size={SIZE} />
  ))
  .add('AppleAlt', () => (
    <AppleAlt color={COLOR} size={SIZE} />
  ))
  .add('Cards', () => (
    <Cards color={COLOR} size={SIZE} />
  ))
  .add('CardsAlt', () => (
    <CardsAlt color={COLOR} size={SIZE} />
  ))
  .add('Designer', () => (
    <Designer color={COLOR} size={SIZE} />
  ))
  .add('Facebook', () => (
    <Facebook color={COLOR} size={SIZE} />
  ))
  .add('Facetime', () => (
    <Facetime color={COLOR} size={SIZE} />
  ))
  .add('FacetimeAlt', () => (
    <FacetimeAlt color={COLOR} size={SIZE} />
  ))
  .add('Google', () => (
    <Google color={COLOR} size={SIZE} />
  ))
  .add('Github', () => (
    <Github color={COLOR} size={SIZE} />
  ))
  .add('Instagram', () => (
    <Instagram color={COLOR} size={SIZE} />
  ))
  .add('InstagramAlt', () => (
    <InstagramAlt color={COLOR} size={SIZE} />
  ))
  .add('Linkedin', () => (
    <Linkedin color={COLOR} size={SIZE} />
  ))
  .add('LinkedinAlt', () => (
    <LinkedinAlt color={COLOR} size={SIZE} />
  ))
  .add('Medium', () => (
    <Medium color={COLOR} size={SIZE} />
  ))
  .add('Microsoft', () => (
    <Microsoft color={COLOR} size={SIZE} />
  ))
  .add('Redhat', () => (
    <Redhat color={COLOR} size={SIZE} />
  ))
  .add('Telegram', () => (
    <Telegram color={COLOR} size={SIZE} />
  ))
  .add('Twitter', () => (
    <Twitter color={COLOR} size={SIZE} />
  ))
  .add('Ubuntu', () => (
    <Ubuntu color={COLOR} size={SIZE} />
  ))
  .add('Whatsapp', () => (
    <Whatsapp color={COLOR} size={SIZE} />
  ))
  .add('WhatsappAlt', () => (
    <WhatsappAlt color={COLOR} size={SIZE} />
  ))
  .add('Youtube', () => (
    <Youtube color={COLOR} size={SIZE} />
  ));
