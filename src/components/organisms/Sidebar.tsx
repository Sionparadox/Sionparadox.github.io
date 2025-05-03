import { FaGithub, FaHome, FaLaptop, FaPuzzlePiece } from 'react-icons/fa';
import IconButton from '../molecules/IconButton';
import { ThemeToggleButton } from '../molecules/ThemeToggleButton';
import { FaList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <aside className="bg-cardBg h-screen w-72 overflow-y-auto">
      <div className="flex flex-col items-center pt-20">
        <div className="stroke-strokeMain mb-4 h-24 w-24 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/99112680?v=4"
            alt="profile"
            className="h-full w-full rounded-full"
          />
        </div>
        <p className="text-title mb-5 text-2xl font-bold">Sion's Log</p>

        <p className="mb-4 font-medium">나의 성장 기록</p>

        <div className="mb-8 flex gap-10">
          <a href="https://github.com/Sionparadox" target="_blank" rel="noopener noreferrer">
            <IconButton icon={<FaGithub />} />
          </a>
          <a href="/">
            <IconButton icon={<FaHome />} />
          </a>
          <ThemeToggleButton />
        </div>
      </div>

      <nav className="text-title px-4 text-xl font-semibold">
        <div className="space-y-1">
          <Link to="/" className="hover:bg-subBg flex items-center gap-3 rounded-md px-2 py-2">
            <IconButton icon={<FaPuzzlePiece />} />
            Algorithm
          </Link>
          <Link to="/" className="hover:bg-subBg flex items-center gap-3 rounded-md px-2 py-2">
            <IconButton icon={<FaLaptop />} />
            ComputerScience
          </Link>
          <Link to="/todo" className="hover:bg-subBg flex items-center gap-3 rounded-md px-2 py-2">
            <IconButton icon={<FaList />} />
            Todo
          </Link>
        </div>
      </nav>
    </aside>
  );
};
