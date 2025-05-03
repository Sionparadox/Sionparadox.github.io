import { FaGithub } from 'react-icons/fa6';
import IconButton from './IconButton';
import { FaHome } from 'react-icons/fa';
import { ThemeToggleButton } from './ThemeToggleButton';

export const ProfileContent = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="stroke-strokeMain mb-4 h-24 w-24 rounded-full border">
          <img
            src="https://avatars.githubusercontent.com/u/99112680?v=4"
            alt="profile"
            className="h-full w-full rounded-full"
          />
        </div>
        <p className="text-title mb-5 text-2xl font-bold">Sion's Log</p>

        <p className="mb-4 font-medium">나의 성장 기록</p>

        <div className="flex gap-10">
          <a href="https://github.com/Sionparadox" target="_blank" rel="noopener noreferrer">
            <IconButton icon={<FaGithub />} />
          </a>
          <a href="/">
            <IconButton icon={<FaHome />} />
          </a>
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};
