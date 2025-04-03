import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';
import { Footer } from '../organisms/Footer';
import { useAtomValue, useSetAtom } from 'jotai';
import { sidebarAtom, setSidebarToggleAtom } from '@/atoms/sidebar';
import { useEffect, useCallback, memo } from 'react';

const SidebarWrapper = memo(({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`fixed left-0 top-0 h-full w-64 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } z-30 transition-transform duration-300 ease-in-out`}
  >
    <Sidebar />
  </div>
));

export const MainLayout = () => {
  const sidebar = useAtomValue(sidebarAtom);
  const setToggle = useSetAtom(setSidebarToggleAtom);

  const initializeToggle = useCallback(() => {
    setToggle();
  }, [setToggle]);

  useEffect(() => {
    initializeToggle();
  }, [initializeToggle]);

  return (
    <div className="relative min-h-screen">
      {/* 사이드바 */}
      <SidebarWrapper isOpen={sidebar.isOpen} />

      {/* 메인 콘텐츠 */}
      <div
        className={`min-h-screen transition-all duration-300 ease-in-out ${
          sidebar.isOpen ? 'pl-64' : 'pl-0'
        }`}
      >
        {/* 실제 콘텐츠 */}
        <div className="flex min-h-screen flex-col">
          <Header onToggleSidebar={sidebar.toggle} isSidebarOpen={sidebar.isOpen} />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
