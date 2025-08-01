'use client';

import { useEffect } from 'react';

export default function ScrollBlocker() {
  useEffect(() => {
    // 스크롤 이벤트 차단
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 키보드 스크롤 차단
    const preventKeyboardScroll = (e: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (scrollKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 터치 스크롤 차단
    const preventTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 이벤트 리스너 추가
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventTouchMove, { passive: false });
    document.addEventListener('keydown', preventKeyboardScroll, { passive: false });
    document.addEventListener('scroll', preventScroll, { passive: false });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventTouchMove);
      document.removeEventListener('keydown', preventKeyboardScroll);
      document.removeEventListener('scroll', preventScroll);
    };
  }, []);

  return null; // 아무것도 렌더링하지 않음
} 