import { useModal } from '@/hooks/useModal';
import React, { useState, useEffect, useRef } from 'react';
import { ProfileContent } from '../molecules/ProfileContent';

const INIT_RADIUS = 50;
const END_RADIUS = 2000;
const ANIMATION_DURATION = 1000;

export const Profile = () => {
  const { modalType, closeModal } = useModal();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandOrigin, setExpandOrigin] = useState({ x: 0, y: 0 });
  const [expandRadius, setExpandRadius] = useState(INIT_RADIUS);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const resetState = () => {
    setIsExpanding(false);
    setExpandRadius(INIT_RADIUS);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    startTimeRef.current = null;
  };

  useEffect(() => {
    if (modalType !== 'profile') {
      resetState();
    }
    return () => resetState();
  }, [modalType]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExpanding) return;
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const animateExpand = (startRadius: number, endRadius: number, duration: number) => {
    startTimeRef.current = null;
    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentRadius = startRadius + (endRadius - startRadius) * progress;
      setExpandRadius(currentRadius);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        closeModal();
        resetState();
      }
    };
    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExpanding) return;
    const { clientX, clientY } = e;
    setExpandOrigin({ x: clientX, y: clientY });
    setIsExpanding(true);
    animateExpand(INIT_RADIUS, END_RADIUS, ANIMATION_DURATION);
  };

  if (modalType !== 'profile') return null;

  const maskX = isExpanding ? expandOrigin.x : mouse.x;
  const maskY = isExpanding ? expandOrigin.y : mouse.y;
  const maskRadius = expandRadius;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/30"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${maskRadius}px at ${maskX}px ${maskY}px, transparent 0 ${maskRadius}px, black ${maskRadius + 10}px 100%)`,
          maskImage: `radial-gradient(circle ${maskRadius}px at ${maskX}px ${maskY}px, transparent 0 ${maskRadius}px, black ${maskRadius + 10}px 100%)`,
          backdropFilter: 'blur(8px)',
          pointerEvents: isExpanding ? 'none' : 'auto',
        }}
        onMouseMove={handleMouseMove}
        onClick={handleOverlayClick}
      />
      {!isExpanding && (
        <div className="z-50 flex h-[320px] w-[480px] items-center justify-center rounded-lg border border-strokeMain bg-background shadow-md">
          <ProfileContent />
        </div>
      )}
    </div>
  );
};
