'use client';

import { useEffect, useRef } from 'react';
import { HiCalendarDays } from 'react-icons/hi2';

export default function ReportPage() {
  const proVideoElementRef = useRef<HTMLVideoElement>(null);
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const alcarazVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 프로 참고 영상 Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && proVideoElementRef.current) {
            proVideoElementRef.current.play();
          }
        });
      },
      { threshold: 0.5 } // 50% 보일 때 재생
    );

    if (proVideoElementRef.current) {
      observer.observe(proVideoElementRef.current);
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (proVideoElementRef.current) {
        observer.unobserve(proVideoElementRef.current);
      }
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-3 py-8 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 font-inter">분석 결과</h1>
        <p className="text-gray-600 font-inter">AI가 분석한 스윙 결과입니다</p>
      </div>

      {/* Video Comparison */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">스윙 비교</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="w-full bg-gray-100 rounded-md overflow-hidden" style={{aspectRatio: '9/16'}}>
              <video 
                ref={userVideoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/analyzed/user-trajectory-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div>
            <div className="w-full bg-gray-100 rounded-md overflow-hidden" style={{aspectRatio: '9/16'}}>
              <video 
                ref={alcarazVideoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/pro/alcaraz.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* AI Feedback */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">AI 피드백</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4 bg-white rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">테이크백</h3>
            <p className="text-gray-600 text-sm">라켓을 더 높이 들어올리면 파워가 향상됩니다. 선수 영상과 비교해 15도 더 높게 올려보세요.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 bg-white rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">스탠스</h3>
            <p className="text-gray-600 text-sm">발 위치가 좋습니다! 무게중심이 안정적이며 균형감이 뛰어납니다.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 bg-white rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">임팩트</h3>
            <p className="text-gray-600 text-sm">임팩트 순간 팔꿈치를 약간 더 펼치면 정확도가 높아질 것 같습니다.</p>
          </div>
        </div>
      </div>

      {/* Pro Reference Video */}
      <div className="mb-6">
        <div className="w-full bg-gray-100 rounded-md overflow-hidden" style={{aspectRatio: '1/1'}}>
          <video 
            ref={proVideoElementRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          >
            <source src="/videos/pro/alcaraz-side.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Training Routine */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-4">
          <HiCalendarDays className="h-5 w-5 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-900">맞춤 훈련 루틴</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <h3 className="font-semibold text-gray-900">1일차</h3>
            </div>
            <p className="text-gray-700 text-sm">벽 앞에서 라켓 없이 테이크백 동작 20회 반복. 높이 의식하며 천천히 연습하세요.</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <h3 className="font-semibold text-gray-900">2일차</h3>
            </div>
            <p className="text-gray-700 text-sm">거울 앞에서 스윙 폼 체크. 팔꿈치 각도를 의식하며 슬로 모션으로 10회 연습하세요.</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <h3 className="font-semibold text-gray-900">3일차</h3>
            </div>
            <p className="text-gray-700 text-sm">벽치기 혹은 랠리로 실전 연습. 개선점을 의식하며 라켓과 공의 접촉점에 집중해보세요.</p>
          </div>
        </div>


      </div>
    </div>
  );
} 