'use client';

import { usePathname, useRouter } from 'next/navigation';
import { 
  HiHome, 
  HiOutlineHome,
  HiCamera,
  HiOutlineCamera,
  HiClipboardDocumentList,
  HiOutlineClipboardDocumentList,
  HiUser,
  HiOutlineUser
} from 'react-icons/hi2';

const navigationItems = [
  {
    id: 'home',
    label: 'Home',
    icon: HiOutlineHome,
    activeIcon: HiHome,
    path: '/en',
  },
  {
    id: 'analyze',
    label: 'Analyze',
    icon: HiOutlineCamera,
    activeIcon: HiCamera,
    path: '/en/analyze',
  },
  {
    id: 'history',
    label: 'Reports',
    icon: HiOutlineClipboardDocumentList,
    activeIcon: HiClipboardDocumentList,
    path: '/en/report',
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: HiOutlineUser,
    activeIcon: HiUser,
    path: '/en/profile',
  },
];

export default function NavigationEN() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 px-4 py-2 shadow-lg rounded-t-3xl z-50">
      <div className="flex justify-around items-center">
        {navigationItems.map((item) => {
          // 단순하고 직관적인 경로 매칭
          let isActive = false;
          
          // 정확한 경로 매칭 우선 시도
          isActive = pathname === item.path;
          
          // 홈 페이지의 경우 trailing slash도 허용
          if (!isActive && item.id === 'home') {
            isActive = (pathname === '/en' || pathname === '/en/');
          }
          
          const IconComponent = isActive ? item.activeIcon : item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.path)}
              className={`flex items-center justify-center min-w-0 flex-1 py-3 px-1 transition-colors duration-200 ${
                isActive 
                  ? 'text-emerald-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent className="h-7 w-7" />
            </button>
          );
        })}
      </div>
    </nav>
  );
} 