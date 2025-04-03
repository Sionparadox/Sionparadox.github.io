import { FaGithub, FaHome, FaLaptop, FaPuzzlePiece } from 'react-icons/fa';
import { Icon } from '../atoms/Icon';
import { MdOutlineLightMode } from 'react-icons/md';

export const Sidebar = () => {
  return (
    <aside className="h-screen w-64 overflow-y-auto bg-light-bg-card dark:bg-dark-bg-card">
      <div className="flex flex-col items-center pt-20">
        <div className="stroke-light-stroke-main dark:stroke-dark-stroke-main mb-4 h-24 w-24 rounded-full bg-white">
          {/* 프로필 이미지가 들어갈 자리 */}
        </div>
        <p className="mb-5 text-2xl font-bold text-light-text-title dark:text-dark-text-title">
          Sion's Log
        </p>

        <p className="mb-4 font-medium">나의 성장 기록</p>

        <div className="mb-8 flex gap-10">
          <a
            href="https://github.com/Sionparadox"
            className="hover:text-gray-900 dark:hover:text-white" //TODO: hover 색상 변경
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size="lg">
              <FaGithub />
            </Icon>
          </a>
          <a href="/" className="hover:text-gray-900 dark:hover:text-white">
            <Icon size="lg">
              <FaHome />
            </Icon>
          </a>
          <a href="/" className="hover:text-gray-900 dark:hover:text-white">
            <Icon size="lg">
              <MdOutlineLightMode />
            </Icon>
          </a>
        </div>
      </div>

      <nav className="px-4 text-xl font-semibold text-light-text-title dark:text-dark-text-title">
        <div className="space-y-1">
          <a
            href="/"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:text-gray-900 dark:hover:text-white"
          >
            <Icon>
              <FaPuzzlePiece />
            </Icon>
            Algorithm
          </a>
          <a
            href="/"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:text-gray-900 dark:hover:text-white"
          >
            <Icon>
              <FaLaptop />
            </Icon>
            ComputerScience
          </a>
        </div>
      </nav>
    </aside>
  );
};
