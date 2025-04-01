import './index.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <header className='bg-white dark:bg-gray-800 shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4'>
          <h1 className='text-3xl font-black text-gray-900 dark:text-white'>
            기술 블로그
          </h1>
        </div>
      </header>
      <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6'>
          <p className='font-thin'>시온시온</p>
          <p className='font-extralight'>시온시온</p>
          <p className='font-light'>시온시온</p>
          <p className='font-normal'>시온시온</p>
          <p className='font-medium'>시온시온</p>
          <p className='font-semibold'>시온시온</p>
          <p className='font-bold'>시온시온</p>
          <p className='font-extrabold'>시온시온</p>
          <p className='font-black'>시온시온</p>
        </div>
      </main>
    </div>
  );
}

export default App;
