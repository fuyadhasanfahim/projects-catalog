import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rect' | 'circle' | 'card' | 'stat';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', variant = 'text' }) => {
  if (variant === 'circle') {
    return <div className={`rounded-full shimmer ${className}`} style={{ minWidth: '100%' }} />;
  }
  if (variant === 'rect') {
    return <div className={`rounded-lg shimmer ${className}`} />;
  }
  if (variant === 'card') {
    return (
      <div className={`p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl shimmer" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-1/2 rounded shimmer" />
            <div className="h-3 w-1/4 rounded shimmer" />
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <div className="h-3 w-full rounded shimmer" />
          <div className="h-3 w-5/6 rounded shimmer" />
          <div className="h-3 w-4/6 rounded shimmer" />
        </div>
      </div>
    );
  }
  if (variant === 'stat') {
    return (
      <div className={`p-6 bg-white border border-slate-50 rounded-2xl shadow-[0_2px_8px_rgba(44,123,229,0.02)] text-center space-y-3 flex flex-col items-center justify-center ${className}`}>
        <div className="w-8 h-8 rounded-full shimmer" />
        <div className="h-8 w-2/3 rounded shimmer" />
        <div className="h-3 w-1/2 rounded shimmer" />
      </div>
    );
  }
  
  // default text skeleton
  return <div className={`h-4 bg-slate-100 rounded shimmer ${className}`} />;
};

export const DoctorPortfolioSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-[#FBFCFD] py-12 px-6 lg:px-12 space-y-16 animate-pulse">
      {/* Skeleton Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-slate-100 pb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full shimmer" />
          <div className="h-5 w-36 rounded shimmer" />
        </div>
        <div className="hidden md:flex gap-6">
          <div className="h-4 w-16 rounded shimmer" />
          <div className="h-4 w-16 rounded shimmer" />
          <div className="h-4 w-20 rounded shimmer" />
          <div className="h-4 w-16 rounded shimmer" />
        </div>
        <div className="h-10 w-36 rounded-full shimmer" />
      </div>

      {/* Skeleton Hero */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="h-3 w-32 rounded shimmer" />
          <div className="h-12 w-4/5 rounded shimmer" />
          <div className="h-12 w-3/5 rounded shimmer" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded shimmer" />
            <div className="h-4 w-5/6 rounded shimmer" />
            <div className="h-4 w-4/5 rounded shimmer" />
          </div>
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 rounded-full shimmer" />
            <div className="h-12 w-40 rounded-full shimmer" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm aspect-[4/5] rounded-3xl shimmer" />
        </div>
      </div>
    </div>
  );
};
