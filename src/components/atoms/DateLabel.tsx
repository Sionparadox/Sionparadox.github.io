import { Icon } from './Icon';
import { LuCalendarDays } from 'react-icons/lu';

interface DateLabelProps {
  date: string;
  style: 'dot' | 'dash' | 'slash';
  withIcon?: boolean;
}

const DateLabel = ({ date, style, withIcon = false }: DateLabelProps) => {
  const d = new Date(date);
  const [year, month, day] = [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ];
  let dateString = '';
  if (style === 'dot') {
    dateString = `${year}.${month}.${day}`;
  } else if (style === 'dash') {
    dateString = `${year}-${month}-${day}`;
  } else if (style === 'slash') {
    dateString = `${year}/${month}/${day}`;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-title">
      {withIcon && (
        <Icon size="sm">
          <LuCalendarDays />
        </Icon>
      )}{' '}
      {dateString}
    </div>
  );
};

export default DateLabel;
