import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: space-evenly;
`;

const Row = styled.div`
  display: flex;
  width: 15rem;
  justify-content: space-between;
  align-items: center;
`;

export default {
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'CLICK ME',
      name: 'children',
      type: { name: 'string', required: false },
    },
  },
  component: Button,
  title: 'Design system/UI/Button',
} as Meta;

const AllButtonsTemplate = (args: any) => (
  <Container>
    <Row>
      <Button {...args} onClick={action('primary button clicked')} />
    </Row>
  </Container>
);
const ButtonTemplate = (args: any) => (
  <Button {...args} onClick={action('primary clicked')} />
);

export const All: any = AllButtonsTemplate.bind({});
export const Primary: any = ButtonTemplate.bind({});