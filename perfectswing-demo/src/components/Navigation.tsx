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
    label: '홈',
    icon: HiOutlineHome,
    activeIcon: HiHome,
    path: '/',
  },
  {
    id: 'analyze',
    label: '스윙 분석',
    icon: HiOutlineCamera,
    activeIcon: HiCamera,
    path: '/analyze',
  },
  {
    id: 'history',
    label: '연습 기록',
    icon: HiOutlineClipboardDocumentList,
    activeIcon: HiClipboardDocumentList,
    path: '/report',
  },
  {
    id: 'profile',
    label: '프로필',
    icon: HiOutlineUser,
    activeIcon: HiUser,
    path: '/profile',
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 px-4 py-2 shadow-lg rounded-t-3xl z-50">
      <div className="flex justify-around items-center">
        {navigationItems.map((item) => {
          const isActive = pathname === item.path;
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