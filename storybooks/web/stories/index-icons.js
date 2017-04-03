import infoAddon from '@kadira/react-storybook-addon-info';
import { setAddon, storiesOf, action } from '@kadira/storybook';
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

setAddon(infoAddon);

const COLOR = '#0F9BE0';
const SIZE = 100;

const AddStyled = styled(Add)`
  background-color: #FFFF00;
`;

storiesOf('binary-ui-icons with styles', module)
  .addWithInfo('styled', () => (
    <AddStyled color={COLOR} size={SIZE} />
  ))
  .addWithInfo('styled events', () => (
    <AddStyled color={COLOR} size={SIZE} onMouseDown={action()} />
  ));

storiesOf('binary-ui-icons main', module)
  .addWithInfo('Add', () => (
    <Add color={COLOR} size={SIZE} />
  ))
  .addWithInfo('AddCard', () => (
    <AddCard color={COLOR} size={SIZE} />
  ))
  .addWithInfo('ArrowDown', () => (
    <ArrowDown color={COLOR} size={SIZE} />
  ))
  .addWithInfo('ArrowLeft', () => (
    <ArrowLeft color={COLOR} size={SIZE} />
  ))
  .addWithInfo('ArrowRight', () => (
    <ArrowRight color={COLOR} size={SIZE} />
  ))
  .addWithInfo('ArrowUp', () => (
    <ArrowUp color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Call', () => (
    <Call color={COLOR} size={SIZE} />
  ))
  .addWithInfo('CallAlt', () => (
    <CallAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('CameraAlt', () => (
    <CameraAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Cancel', () => (
    <Cancel color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Card', () => (
    <Card color={COLOR} size={SIZE} />
  ))
  .addWithInfo('CardAlt', () => (
    <CardAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Check', () => (
    <Check color={COLOR} size={SIZE} />
  ))
  .addWithInfo('CheckAlt', () => (
    <CheckAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Copy', () => (
    <Copy color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Delete', () => (
    <Delete color={COLOR} size={SIZE} />
  ))
  .addWithInfo('DeleteCharacter', () => (
    <DeleteCharacter color={COLOR} size={SIZE} />
  ))
  .addWithInfo('DeleteAlt', () => (
    <DeleteAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Deleted', () => (
    <Deleted color={COLOR} size={SIZE} />
  ))
  .addWithInfo('DeletedAlt', () => (
    <DeletedAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Done', () => (
    <Done color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Favorites', () => (
    <Favorites color={COLOR} size={SIZE} />
  ))
  .addWithInfo('FavoritesAlt', () => (
    <FavoritesAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Info', () => (
    <Info color={COLOR} size={SIZE} />
  ))
  .addWithInfo('InfoAlt', () => (
    <InfoAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Keypad', () => (
    <Keypad color={COLOR} size={SIZE} />
  ))
  .addWithInfo('KeypadAlt', () => (
    <KeypadAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Location', () => (
    <Location color={COLOR} size={SIZE} />
  ))
  .addWithInfo('LocationAlt', () => (
    <LocationAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Locked', () => (
    <Locked color={COLOR} size={SIZE} />
  ))
  .addWithInfo('LockedAlt', () => (
    <LockedAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Logout', () => (
    <Logout color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Minus', () => (
    <Minus color={COLOR} size={SIZE} />
  ))
  .addWithInfo('MinusAlt', () => (
    <MinusAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('More', () => (
    <More color={COLOR} size={SIZE} />
  ))
  .addWithInfo('MoreAlt', () => (
    <MoreAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('New', () => (
    <New color={COLOR} size={SIZE} />
  ))
  .addWithInfo('NewAlt', () => (
    <NewAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Open', () => (
    <Open color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Save', () => (
    <Save color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Scan', () => (
    <Scan color={COLOR} size={SIZE} />
  ))
  .addWithInfo('ScanAlt', () => (
    <ScanAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Search', () => (
    <Search color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Settings', () => (
    <Settings color={COLOR} size={SIZE} />
  ))
  .addWithInfo('SettingsAlt', () => (
    <SettingsAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Share', () => (
    <Share color={COLOR} size={SIZE} />
  ))
  .addWithInfo('ShareAlt', () => (
    <ShareAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Stack', () => (
    <Stack color={COLOR} size={SIZE} />
  ))
  .addWithInfo('StackFull', () => (
    <StackFull color={COLOR} size={SIZE} />
  ))
  .addWithInfo('StackNew', () => (
    <StackNew color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Store', () => (
    <Store color={COLOR} size={SIZE} />
  ))
  .addWithInfo('StoreAlt', () => (
    <StoreAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Text', () => (
    <Text color={COLOR} size={SIZE} />
  ))
  .addWithInfo('TextAlt', () => (
    <TextAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Time', () => (
    <Time color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Translation', () => (
    <Translation color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Uncheck', () => (
    <Uncheck color={COLOR} size={SIZE} />
  ))
  .addWithInfo('User', () => (
    <User color={COLOR} size={SIZE} />
  ))
  .addWithInfo('UserAlt', () => (
    <UserAlt color={COLOR} size={SIZE} />
  ));

storiesOf('binary-ui-icons companies & social', module)
  .addWithInfo('Apple', () => (
    <Apple color={COLOR} size={SIZE} />
  ))
  .addWithInfo('AppleAlt', () => (
    <AppleAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Cards', () => (
    <Cards color={COLOR} size={SIZE} />
  ))
  .addWithInfo('CardsAlt', () => (
    <CardsAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Designer', () => (
    <Designer color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Facebook', () => (
    <Facebook color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Facetime', () => (
    <Facetime color={COLOR} size={SIZE} />
  ))
  .addWithInfo('FacetimeAlt', () => (
    <FacetimeAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Google', () => (
    <Google color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Github', () => (
    <Github color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Instagram', () => (
    <Instagram color={COLOR} size={SIZE} />
  ))
  .addWithInfo('InstagramAlt', () => (
    <InstagramAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Linkedin', () => (
    <Linkedin color={COLOR} size={SIZE} />
  ))
  .addWithInfo('LinkedinAlt', () => (
    <LinkedinAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Medium', () => (
    <Medium color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Microsoft', () => (
    <Microsoft color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Redhat', () => (
    <Redhat color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Telegram', () => (
    <Telegram color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Twitter', () => (
    <Twitter color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Ubuntu', () => (
    <Ubuntu color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Whatsapp', () => (
    <Whatsapp color={COLOR} size={SIZE} />
  ))
  .addWithInfo('WhatsappAlt', () => (
    <WhatsappAlt color={COLOR} size={SIZE} />
  ))
  .addWithInfo('Youtube', () => (
    <Youtube color={COLOR} size={SIZE} />
  ));
