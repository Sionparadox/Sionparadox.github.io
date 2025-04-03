import { FiHome } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaPuzzlePiece, FaLaptop } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <aside className="h-screen w-64 overflow-y-auto bg-light-bg-card dark:bg-dark-bg-card">
      <div className="flex flex-col items-center pt-20">
        <div className="mb-4 h-24 w-24 rounded-full bg-white stroke-light-stroke-main dark:stroke-dark-stroke-main">
          {/* 프로필 이미지가 들어갈 자리 */}
        </div>
        <p className="mb-5 text-2xl font-bold text-light-text-title dark:text-dark-text-title">
          Sion's Log
        </p>

        <p className="mb-4 font-medium">나의 성장 기록</p>

        <div className="mb-8 flex space-x-4">
          <a
            href="https://github.com/Sionparadox"
            className="p-2 hover:text-gray-900 dark:hover:text-white" //TODO: hover 색상 변경
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="/" className="p-2 hover:text-gray-900 dark:hover:text-white">
            <FiHome className="h-6 w-6" />
          </a>
        </div>
      </div>

      <nav className="px-4 text-xl font-semibold text-light-text-title dark:text-dark-text-title">
        <div className="space-y-1">
          <a
            href="/"
            className="flex items-center rounded-md px-2 py-2 hover:text-gray-900 dark:hover:text-white"
          >
            <FaPuzzlePiece className="mr-3 h-5 w-5" />
            Algorithm
          </a>
          <a
            href="/"
            className="flex items-center rounded-md px-2 py-2 hover:text-gray-900 dark:hover:text-white"
          >
            <FaLaptop className="mr-3 h-5 w-5" />
            ComputerScience
          </a>
        </div>
      </nav>
    </aside>
  );
};
