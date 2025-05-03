import { Icon } from './Icon';
import { LuCalendarDays } from 'react-icons/lu';

interface DateLabelProps {
  date: string;
  style: 'dot' | 'dash' | 'slash';
  withIcon?: boolean;
}


const DateLabel = ({ date, style, withIcon = false }: DateLabelProps) => {
    const [year, month, day] = date.split('-');
    let dateString = '';
    if(style === 'dot') {
        dateString = `${year}.${month}.${day}`;
    } else if(style === 'dash') {
        dateString = `${year}-${month}-${day}`;
    } else if(style === 'slash') {
        dateString = `${year}/${month}/${day}`;
    }

  return <div className="text-sm text-title flex items-center gap-2">{withIcon && <Icon size="sm"><LuCalendarDays /></Icon>} {dateString}</div>;
};

export default DateLabel;
