import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className='shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4'>
          <h1 className='text-3xl font-black text-gray-900 dark:text-white'>
            기술 블로그
          </h1>
        </div>
      </header>
      <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6'>
          <p className='font-thin text-5xl'>시온시온</p>
          <p className='font-extralight text-5xl'>시온시온</p>
          <p className='font-light text-5xl'>시온시온</p>
          <p className='font-normal text-5xl'>시온시온</p>
          <p className='font-medium text-5xl'>시온시온</p>
          <p className='font-semibold text-5xl'>시온시온</p>
          <p className='font-bold text-5xl'>시온시온</p>
          <p className='font-extrabold text-5xl'>시온시온</p>
          <p className='font-black text-5xl'>시온시온</p>
          <Link to='/test'>테스트</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
