import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, Phone } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export const MapPlaceholder: React.FC = () => {
  const [mapType, setMapType] = useState<'standard' | 'clinical'>('standard');

  return (
    <div className="relative w-full h-[280px] rounded-2rem overflow-hidden border border-slate-100/80 shadow-xs group bg-[#f8fafc]">
      {/* Visual representation of a sterile street grid / medical complex blueprint */}
      <div className="absolute inset-0 opacity-40 select-none pointer-events-none">
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Main Beacon Street */}
        <div className="absolute top-[40%] left-0 right-0 h-16 bg-slate-200/60 rotate-[-4deg] flex items-center justify-center">
          <span className="text-[9px] font-bold text-slate-400 font-mono tracking-widest uppercase">Beacon St (782)</span>
        </div>
        
        {/* Cross street */}
        <div className="absolute top-0 bottom-0 left-[35%] w-12 bg-slate-200/50 rotate-[-4deg]">
          <span className="absolute bottom-6 left-2 text-[8px] font-bold text-slate-400 font-mono tracking-widest uppercase rotate-90">Carlton Ave</span>
        </div>

        {/* Outer medical blocks */}
        <div className="absolute top-[10%] left-[5%] w-24 h-16 bg-white/60 rounded-xl border border-dashed border-slate-350 flex items-center justify-center">
          <span className="text-[8px] font-mono font-bold text-slate-400">Vanguard Lot A</span>
        </div>
        <div className="absolute bottom-[10%] right-[10%] w-32 h-20 bg-white/65 rounded-xl border border-dashed border-slate-350 flex items-center justify-center">
          <span className="text-[8px] font-mono font-bold text-slate-400">Clinics East Wing</span>
        </div>
      </div>

      {/* Actual Medical Center Block Building */}
      <div className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        {/* Pulsing locator */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 bg-medical-blue rounded-full animate-ping opacity-15" />
          <div className="absolute w-8 h-8 bg-medical-blue rounded-full opacity-25" />
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-medical-blue to-teal-500 text-white flex items-center justify-center shadow-lg shadow-medical-blue/30 relative">
            <MapPin className="w-5.5 h-5.5" />
          </div>
        </div>

        <div className="mt-2.5 bg-white border border-slate-100 rounded-lg py-1 px-2.5 shadow-md flex items-center gap-1.5 leading-none">
          <span className="w-1.5 h-1.5 rounded-full bg-medical-teal" />
          <span className="text-[10px] font-extrabold text-medical-slate uppercase tracking-wider">Vanguard Suite 410</span>
        </div>
      </div>

      {/* Overlapping Map Controls Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs border border-slate-100/80 p-3 rounded-xl shadow-md flex items-center justify-between gap-3 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-medical-blue">
            <Navigation className="w-4.5 h-4.5" />
          </div>
          <div>
            <p className="text-xs font-bold text-medical-slate leading-tight">Vanguard Medical Plaza</p>
            <p className="text-[10px] text-medical-gray font-light mt-0.5">Complimentary parking valets available</p>
          </div>
        </div>

        {/* Map Actions */}
        <div className="flex gap-1.5">
          <a
            href="https://maps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-medical-blue text-white text-[10px] font-bold tracking-wider uppercase hover:bg-medical-blue-hover transition-colors flex items-center gap-1"
          >
            <Compass className="w-3 h-3" />
            Directions
          </a>
        </div>
      </div>

      {/* Styled top bar for Map Options */}
      <div className="absolute top-3 right-3 flex gap-1 z-10">
        <button
          onClick={() => setMapType('standard')}
          className={`px-2 py-1 rounded text-[9px] font-mono uppercase tracking-wider font-bold transition-all ${
            mapType === 'standard' ? 'bg-medical-slate text-white' : 'bg-white/80 text-medical-slate hover:bg-white'
          }`}
        >
          Blueprint Map
        </button>
      </div>
    </div>
  );
};
