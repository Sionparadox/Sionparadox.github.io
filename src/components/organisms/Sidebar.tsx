import { FaGithub, FaHome, FaLaptop, FaPuzzlePiece } from 'react-icons/fa';
import IconButton from '../molecules/IconButton';
import { ThemeToggleButton } from '../molecules/ThemeToggleButton';

export const Sidebar = () => {
  return (
    <aside className="bg-cardBg h-screen w-64 overflow-y-auto">
      <div className="flex flex-col items-center pt-20">
        <div className="stroke-strokeMain mb-4 h-24 w-24 rounded-full bg-white">
          {/* 프로필 이미지가 들어갈 자리 */}
        </div>
        <p className="text-title mb-5 text-2xl font-bold">Sion's Log</p>

        <p className="mb-4 font-medium">나의 성장 기록</p>

        <div className="mb-8 flex gap-10">
          <a
            href="https://github.com/Sionparadox"
            className="hover:text-gray-900 dark:hover:text-white" //TODO: hover 색상 변경
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FaGithub />
            </IconButton>
          </a>
          <a href="/" className="hover:text-gray-900 dark:hover:text-white">
            <IconButton>
              <FaHome />
            </IconButton>
          </a>
          <ThemeToggleButton className="hover:text-gray-900 dark:hover:text-white" />
        </div>
      </div>

      <nav className="text-title px-4 text-xl font-semibold">
        <div className="space-y-1">
          <a
            href="/"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:text-gray-900 dark:hover:text-white"
          >
            <IconButton>
              <FaPuzzlePiece />
            </IconButton>
            Algorithm
          </a>
          <a
            href="/"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:text-gray-900 dark:hover:text-white"
          >
            <IconButton>
              <FaLaptop />
            </IconButton>
            ComputerScience
          </a>
        </div>
      </nav>
    </aside>
  );
};
