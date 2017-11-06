import infoAddon from '@storybook/addon-info';
import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import React from 'react';
import styled from 'styled-components';

import Section from 'binary-ui-components/mobile/Section';

setAddon(infoAddon);

storiesOf('binary-ui-components/mobile', module)
  .add('Section', withInfo('Section component')(() => (
    <Section label="Section Label">
      Section content
    </Section>
  )));
