import { FaLaptop, FaPuzzlePiece } from 'react-icons/fa';
import IconButton from '../molecules/IconButton';
import { FaList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { ProfileContent } from '../molecules/ProfileContent';
export const Sidebar = () => {
  return (
    <aside className="bg-cardBg h-screen w-72 overflow-y-auto">
      <div className="mb-8 mt-20">
        <ProfileContent />
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
