import { HeadingItem } from '@/types/heading';
import { useState, useEffect, useCallback } from 'react';
import { Location } from 'react-router-dom';
import { useDebounce } from './useDebounce';

const HEADER_TOP = 64;
const HEADER_PADDING = 20;
const BOTTOM_THRESHOLD = 50;
const HEADER_OFFSET = 60;

export const useHeaderScroll = (location: Location) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [scrollY, setScrollY] = useState(0);
  const debouncedScrollY = useDebounce(scrollY, 50);

  useEffect(() => {
    setHeadings([]);
    setActiveId('');

    const timeoutId = setTimeout(() => {
      const contentElement = document.querySelector('.mdx-content');
      if (!contentElement) return;

      const headingElements = Array.from(contentElement.querySelectorAll('h2, h3'));
      const headingItems = headingElements.map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName.charAt(1)),
        top:
          element.getBoundingClientRect().top +
          window.scrollY -
          HEADER_TOP -
          HEADER_PADDING -
          HEADER_OFFSET,
      }));
      setHeadings(headingItems);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  const findActiveHeading = useCallback(() => {
    if (headings.length === 0) return;

    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (debouncedScrollY + windowHeight >= docHeight - BOTTOM_THRESHOLD) {
      setActiveId(headings[headings.length - 1]?.id || '');
      return;
    }

    let currentId = '';
    for (let i = 0; i < headings.length; i++) {
      if (debouncedScrollY + 1 >= headings[i].top) {
        currentId = headings[i].id;
      }
    }
    setActiveId(currentId);
  }, [headings, debouncedScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    findActiveHeading();
  }, [findActiveHeading]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - HEADER_TOP - HEADER_PADDING;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return {
    headings,
    activeId,
    scrollToHeading,
  };
};
