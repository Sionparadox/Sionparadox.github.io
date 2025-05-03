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
      options: ['sm', 'md', 'lg'],
      description: '아이콘 버튼의 크기를 선택합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다.',
    },
    icon: {
      description: '버튼에 표시할 아이콘을 설정합니다.',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <FaStar />,
    onClick: () => console.log('clicked'),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    icon: <FaHouse />,
    onClick: () => console.log('clicked'),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    icon: <FaMoon />,
    onClick: () => console.log('clicked'),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    icon: <FaSun />,
    onClick: () => console.log('clicked'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: <FaStar />,
    onClick: () => console.log('clicked'),
  },
};
