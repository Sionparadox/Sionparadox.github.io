import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-black text-gray-900 dark:text-white">시온시온</h1>
      <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <Link
          to="/test"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          테스트 페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default Home;
