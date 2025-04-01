import './index.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <header className='bg-white dark:bg-gray-800 shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4'>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
            기술 블로그
          </h1>
        </div>
      </header>
      <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6'>
          <p className='text-gray-700 dark:text-gray-300'>초기화</p>
        </div>
      </main>
    </div>
  );
}

export default App;
