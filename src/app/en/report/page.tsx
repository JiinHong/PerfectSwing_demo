'use client';

import { useEffect, useRef } from 'react';
import { HiCalendarDays } from 'react-icons/hi2';

export default function ReportPage() {
  const proVideoElementRef = useRef<HTMLVideoElement>(null);
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const alcarazVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Pro reference video Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && proVideoElementRef.current) {
            proVideoElementRef.current.play();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    if (proVideoElementRef.current) {
      observer.observe(proVideoElementRef.current);
    }

    // Cleanup on component unmount
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2 font-inter">Analysis Results</h1>
        <p className="text-gray-600 font-inter">AI analysis results of your swing</p>
      </div>

      {/* Video Comparison */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Swing Comparison</h2>
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
        <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Feedback</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4 bg-white rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">Takeback</h3>
            <p className="text-gray-600 text-sm">Raising your racket higher will improve power. Try lifting it 15 degrees higher compared to the pro video.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 bg-white rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">Stance</h3>
            <p className="text-gray-600 text-sm">Great foot positioning! Your center of gravity is stable with excellent balance.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 bg-white rounded-lg p-3">
            <h3 className="font-semibold text-gray-900">Impact</h3>
            <p className="text-gray-600 text-sm">Extending your elbow slightly more at impact should improve accuracy.</p>
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
          <h2 className="text-lg font-semibold text-gray-900">Customized Training Routine</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <h3 className="font-semibold text-gray-900">Day 1</h3>
            </div>
            <p className="text-gray-700 text-sm">Practice takeback motion 20 times without racket in front of a wall. Focus on height and practice slowly.</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <h3 className="font-semibold text-gray-900">Day 2</h3>
            </div>
            <p className="text-gray-700 text-sm">Check swing form in front of a mirror. Practice 10 times in slow motion focusing on elbow angle.</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <h3 className="font-semibold text-gray-900">Day 3</h3>
            </div>
            <p className="text-gray-700 text-sm">Practice with wall hits or rallies. Focus on contact point between racket and ball while being conscious of improvements.</p>
          </div>
        </div>


      </div>
    </div>
  );
} 