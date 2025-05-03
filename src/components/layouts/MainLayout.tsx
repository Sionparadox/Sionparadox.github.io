import { Outlet } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';
import { Footer } from '../organisms/Footer';
import { useAtomValue, useSetAtom } from 'jotai';
import { sidebarAtom, setSidebarToggleAtom } from '@/atoms/sidebar';
import { useEffect, useCallback, useRef } from 'react';
import { Profile } from '../organisms/Profile';

export const MainLayout = () => {
  const sidebar = useAtomValue(sidebarAtom);
  const setToggle = useSetAtom(setSidebarToggleAtom);
  const isInitialized = useRef(false);

  const initializeToggle = useCallback(() => {
    if (!isInitialized.current) {
      setToggle();
      isInitialized.current = true;
    }
  }, [setToggle]);

  useEffect(() => {
    initializeToggle();
  }, [initializeToggle]);

  return (
    <div className="relative min-h-screen">
      {/* 사이드바 */}
      <div
        className={`fixed left-0 top-0 h-full w-72 transform ${
          sidebar.isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-30 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>
      <Profile />
      {/* 메인 콘텐츠 */}
      <div
        className={`min-h-screen transition-all duration-300 ease-in-out ${
          sidebar.isOpen ? 'pl-72' : 'pl-0'
        }`}
      >
        {/* 실제 콘텐츠 */}
        <div className="flex min-h-screen flex-col">
          <div className="sticky top-0 z-20">
            <Header />
          </div>
          <main className="mx-auto w-[1080px] flex-1 pt-16">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
