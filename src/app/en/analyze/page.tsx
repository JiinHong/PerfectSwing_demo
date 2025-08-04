'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiCloudArrowUp, HiCog6Tooth } from 'react-icons/hi2';

export default function AnalyzePage() {
  const [currentStep, setCurrentStep] = useState<'upload' | 'analyzing'>('upload');
  const router = useRouter();

  useEffect(() => {
    if (currentStep === 'analyzing') {
      // 4초 후 자동으로 결과 페이지로 이동
      const timer = setTimeout(() => {
        router.push('/en/report');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, router]);



  if (currentStep === 'analyzing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-6 py-8 flex flex-col items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center max-w-sm w-full">
          {/* Demo Video with Loading Overlay */}
          <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden mb-6" style={{aspectRatio: '1/1'}}>
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/demo/demo.mp4" type="video/mp4" />
            </video>
            {/* Loading Spinner Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full drop-shadow-2xl"></div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">AI Analyzing...</h2>
          <p className="text-gray-600 mb-4">Analyzing swing trajectory</p>
          <div className="text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <HiCog6Tooth className="h-4 w-4 animate-spin" />
              <span>Motion Pattern Analysis</span>
            </div>
            <div className="text-emerald-600">Average analysis time: Under 1 minute</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 px-6 py-8 flex flex-col items-center justify-center">
      {/* Upload Screen */}
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center max-w-sm w-full">
        <HiCloudArrowUp className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Upload Swing Video</h2>
        <p className="text-gray-600 mb-6">
          Please upload your tennis swing video.<br />
          AI will analyze your form.
        </p>
        <button
          onClick={() => setCurrentStep('analyzing')}
          className="w-full bg-emerald-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
        >
          Upload Video
        </button>
      </div>
    </div>
  );
} 