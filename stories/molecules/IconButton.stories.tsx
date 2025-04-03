import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@/components/molecules/IconButton';
import { FaStar, FaHouse, FaMoon, FaSun } from 'react-icons/fa6';

const meta: Meta<typeof IconButton> = {
  title: 'Molecules/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: '아이콘의 크기를 선택합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <FaStar />,
    onClick: () => console.log('clicked'),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <FaHouse />,
    onClick: () => console.log('clicked'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <FaMoon />,
    onClick: () => console.log('clicked'),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <FaSun />,
    onClick: () => console.log('clicked'),
  },
};
