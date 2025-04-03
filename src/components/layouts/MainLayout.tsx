import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';
import { Footer } from '../organisms/Footer';

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* 사이드바 */}
      <div
        className={`fixed left-0 top-0 h-full w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } z-30 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>

      {/* 메인 콘텐츠 */}
      <div
        className={`min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'pl-64' : 'pl-0'
        }`}
      >
        {/* 실제 콘텐츠 */}
        <div className="flex min-h-screen flex-col">
          <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
