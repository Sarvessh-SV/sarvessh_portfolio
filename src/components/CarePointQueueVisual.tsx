'use client';

import React, { useState } from 'react';
import { UserCheck, Clock, QrCode, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function CarePointQueueVisual() {
  const [activeToken, setActiveToken] = useState('CP-104');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const queueList = [
    { token: 'CP-102', patient: 'Patient #102', estWait: 'Called', status: 'In Consultation', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { token: 'CP-103', patient: 'Patient #103', estWait: '2 mins', status: 'Next Up', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { token: 'CP-104', patient: 'You (Token #104)', estWait: '8 mins', status: 'Waiting', color: 'bg-slate-900 text-white border-slate-800 font-semibold' },
    { token: 'CP-105', patient: 'Patient #105', estWait: '15 mins', status: 'Queued', color: 'bg-slate-50 text-slate-600 border-slate-200' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-800 font-sans select-none">
      {/* Clinic App Header Bar */}
      <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-sm">
            CP
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              CarePoint Clinic Queue
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                LIVE
              </span>
            </h4>
            <p className="text-[11px] text-slate-400">Dr. Mehta &bull; General Cardiology</p>
          </div>
        </div>
        <button 
          onClick={handleRefresh}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          title="Refresh Queue State"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
        </button>
      </div>

      {/* Main Interface Content */}
      <div className="p-5 space-y-5 bg-slate-50/50">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-slate-700" /> Serving Now
            </span>
            <span className="text-lg font-extrabold text-slate-900 mt-1">CP-102</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-amber-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400/10 rounded-bl-xl" />
            <span className="text-[11px] font-medium text-amber-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" /> Est. Wait Time
            </span>
            <span className="text-lg font-extrabold text-amber-600 mt-1">~8 mins</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5 text-slate-700" /> QR Entry
            </span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified
            </span>
          </div>
        </div>

        {/* Live Patient Queue Status */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Waiting Line</span>
            <span className="text-xs font-semibold text-slate-700">4 Patients Active</span>
          </div>

          <div className="space-y-2">
            {queueList.map((item) => (
              <div 
                key={item.token}
                onClick={() => setActiveToken(item.token)}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all cursor-pointer ${
                  activeToken === item.token 
                    ? 'ring-2 ring-amber-500/50 shadow-sm ' + item.color
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                    {item.token}
                  </span>
                  <span className="font-medium">{item.patient}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] opacity-75">{item.estWait}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-white/50">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Hackathon Note Banner */}
        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-950">Queue Cure '26 Finalist Project</span>
            <p className="text-[11px] text-amber-800/90 mt-0.5">
              Organized by Wooble Software Pvt. Ltd. Engineered for instant clinic QR check-in & WebSocket sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
