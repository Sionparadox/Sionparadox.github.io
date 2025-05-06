import { FaLaptop, FaPuzzlePiece } from 'react-icons/fa';
import IconButton from '../molecules/IconButton';
import { FaCode, FaList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ProfileContent } from '../molecules/ProfileContent';
export const Sidebar = () => {
  return (
    <aside className="h-screen w-72 overflow-y-auto bg-cardBg">
      <div className="mb-8 mt-20">
        <ProfileContent />
      </div>

      <nav className="px-4 text-xl font-semibold text-title">
        <div className="space-y-1">
          <Link
            to="/posts/Algorithm"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-subBg"
          >
            <IconButton icon={<FaPuzzlePiece />} />
            Algorithm
          </Link>
          <Link
            to="/posts/Computerscience"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-subBg"
          >
            <IconButton icon={<FaLaptop />} />
            ComputerScience
          </Link>
          <Link
            to="/posts/Frontend"
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-subBg"
          >
            <IconButton icon={<FaCode />} />
            FrontEnd
          </Link>
          <Link to="/todo" className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-subBg">
            <IconButton icon={<FaList />} />
            Todo
          </Link>
        </div>
      </nav>
    </aside>
  );
};
