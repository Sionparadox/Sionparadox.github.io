interface ChipProps {
  label: string;
  color?: 'primary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

//TODO: 추후 컬러 추가
const COLORS = {
  primary: 'bg-subBg text-foreground',
}

const SIZES = {
  xs: 'px-1 py-0.5 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1 text-base',
  lg: 'px-4 py-1 text-lg',
}

const Chip = ({ label, color = 'primary', size = 'xs' }: ChipProps) => {
  return <div className={`rounded-full font-medium w-fit ${SIZES[size]} ${COLORS[color]}`}>{label}</div>;
};

export default Chip;

