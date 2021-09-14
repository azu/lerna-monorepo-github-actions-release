import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';

import Button, {
  DestructiveButton,
  DisabledButton,
  ErrorButton,
  SecondaryButton,
  TextButton,
  UnstyledButton,
} from './Button';

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
    <Row>
      <SecondaryButton {...args} onClick={action('secondary button clicked')} />
    </Row>
    <Row>
      <ErrorButton {...args} onClick={action('error button clicked')} />
    </Row>
    <Row>
      <DisabledButton {...args} onClick={action('disabled button clicked')} />
    </Row>
    <Row>
      <TextButton {...args} onClick={action('text button clicked')} />
    </Row>
    <Row>
      <UnstyledButton {...args} onClick={action('unstyled button clicked')} />
    </Row>
    <Row>
      <DestructiveButton
        {...args}
        onClick={action('destructive button clicked')}
      />
    </Row>
  </Container>
);
const ButtonTemplate = (args: any) => (
  <Button {...args} onClick={action('primary clicked')} />
);
const SecondaryButtonTemplate = (args: any) => (
  <SecondaryButton {...args} onClick={action('secondary clicked')} />
);
const ErrorButtonTemplate = (args: any) => (
  <ErrorButton {...args} onClick={action('error clicked')} />
);
const DisabledButtonTemplate = (args: any) => (
  <DisabledButton {...args} onClick={action('disabled clicked')} />
);
const TextButtonTemplate = (args: any) => (
  <TextButton {...args} onClick={action('text clicked')} />
);
const UnstyledButtonTemplate = (args: any) => (
  <UnstyledButton {...args} onClick={action('unstyled clicked')} />
);
const DestructiveButtonTemplate = (args: any) => (
  <DestructiveButton {...args} onClick={action('destructive clicked')} />
);

export const All: any = AllButtonsTemplate.bind({});
export const Primary: any = ButtonTemplate.bind({});
export const Secondary: any = SecondaryButtonTemplate.bind({});
export const Error: any = ErrorButtonTemplate.bind({});
export const Disabled: any = DisabledButtonTemplate.bind({});
export const Text: any = TextButtonTemplate.bind({});
export const Unstyled: any = UnstyledButtonTemplate.bind({});
export const Destructive: any = DestructiveButtonTemplate.bind({});