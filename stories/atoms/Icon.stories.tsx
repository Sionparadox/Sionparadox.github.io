import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/components/atoms/Icon';
import { FaStar, FaHeart, FaHome } from 'react-icons/fa';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: <FaStar />,
  },
};

export const Small: Story = {
  args: {
    children: <FaStar />,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: <FaStar />,
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    children: <FaStar />,
    size: 'xl',
  },
};

export const CustomColor: Story = {
  args: {
    children: <FaStar />,
    className: 'text-yellow-500',
  },
};

export const DifferentIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon>
        <FaStar />
      </Icon>
      <Icon>
        <FaHeart />
      </Icon>
      <Icon>
        <FaHome />
      </Icon>
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon className="text-red-500 hover:text-red-700">
        <FaHeart />
      </Icon>
      <Icon className="text-blue-500 hover:text-blue-700">
        <FaHome />
      </Icon>
      <Icon className="text-green-500 hover:text-green-700">
        <FaStar />
      </Icon>
    </div>
  ),
};
