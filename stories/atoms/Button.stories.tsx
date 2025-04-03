import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/atoms/Button';
import { FaStar } from 'react-icons/fa6';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link'],
      description: '버튼의 스타일 변형을 선택합니다.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'fit'],
      description: '버튼의 크기를 선택합니다.',
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼이 컨테이너의 전체 너비를 차지하도록 합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '버튼',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '아웃라인 버튼',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '고스트 버튼',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: '링크 버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '작은 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '큰 버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화 버튼',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'ghost',
    size: 'fit',
    children: (
      <>
        <FaStar />
      </>
    ),
  },
};
