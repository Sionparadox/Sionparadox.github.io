import Chip from '../atoms/Chip';

interface ChipListProps {
  chips: string[];
}

const ChipList = ({ chips }: ChipListProps) => {
  return <div className="flex flex-wrap gap-2">
    {chips.map((chip) => (
      <Chip key={chip} size="sm" label={chip} />
    ))}
  </div>;
};

export default ChipList;
