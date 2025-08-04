'use client';

import { HiUser, HiTrophy, HiCalendarDays, HiCog6Tooth } from 'react-icons/hi2';

export default function ProfilePage() {


  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 px-6 py-8 flex flex-col justify-center">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 font-inter">프로필</h1>
        <p className="text-gray-600 font-inter">내 테니스 분석 현황</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-emerald-100 p-4 rounded-full">
            <HiUser className="h-8 w-8 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">테니스 러버</h2>
            <p className="text-gray-600">Perfect Swing 사용자</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-600">156</div>
            <div className="text-sm text-gray-500">총 스윙</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">18일</div>
            <div className="text-sm text-gray-500">연습 일수</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">7일</div>
            <div className="text-sm text-gray-500">연속 연습</div>
          </div>
        </div>
      </div>

      {/* Recent Achievement */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 성취</h3>
        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
          <HiTrophy className="h-6 w-6 text-emerald-600" />
          <div>
            <p className="font-semibold text-gray-900">꾸준한 연습자</p>
            <p className="text-sm text-gray-600">7일 연속 연습 달성</p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-20">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">설정</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <HiCalendarDays className="h-5 w-5 text-gray-500" />
              <span className="text-gray-900">분석 알림</span>
            </div>
            <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <HiCog6Tooth className="h-5 w-5 text-gray-500" />
              <span className="text-gray-900">고급 분석</span>
            </div>
            <div className="w-12 h-6 bg-gray-300 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 