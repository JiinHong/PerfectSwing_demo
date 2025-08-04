'use client';

import { HiPlay, HiChartBar, HiTrophy, HiClock } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();


  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 to-teal-50 px-3 py-8 flex flex-col justify-center">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <img src="/logo.png" alt="Perfect Swing Logo" className="h-12 w-12" />
          <h1 className="text-3xl font-bold text-gray-900 font-inter">Perfect Swing</h1>
        </div>
        <p className="text-gray-600 font-inter ml-2">Perfect Tennis Swing with AI</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <HiChartBar className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Practice Days</p>
              <p className="text-xl font-semibold text-gray-900">18 days</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <HiTrophy className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Streak</p>
              <p className="text-xl font-semibold text-gray-900">7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Action */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="text-center">
          <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <HiPlay className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Start Swing Analysis</h2>
          <p className="text-gray-600 mb-6">Record your tennis swing and<br />get AI analysis</p>
          <button 
            onClick={() => router.push('/en/analyze')}
            className="w-full bg-emerald-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-emerald-600 transition-all duration-200"
          >
            Start Analysis
          </button>
        </div>
      </div>

      {/* Recent Analysis */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Practice</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <HiClock className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Forehand Practice</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-emerald-600">15x</p>
              <p className="text-xs text-gray-500">Swing Analysis</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <HiClock className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Backhand Practice</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-600">12x</p>
              <p className="text-xs text-gray-500">Swing Analysis</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <HiClock className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Serve Practice</p>
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-orange-600">8x</p>
              <p className="text-xs text-gray-500">Swing Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 