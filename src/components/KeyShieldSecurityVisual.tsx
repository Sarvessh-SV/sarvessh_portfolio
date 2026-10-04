'use client';

import React, { useState } from 'react';
import { ShieldCheck, Activity, AlertTriangle, Eye, Terminal, Lock, CheckCircle } from 'lucide-react';

export default function KeyShieldSecurityVisual() {
  const [selectedTab, setSelectedTab] = useState<'monitor' | 'processes' | 'logs'>('monitor');
  const [scanActive, setScanActive] = useState(false);

  const triggerScan = () => {
    setScanActive(true);
    setTimeout(() => setScanActive(false), 1200);
  };

  const processLogs = [
    { pid: '4192', name: 'chrome.exe', hook: 'Standard Window API', risk: 'Low', status: 'Clean' },
    { pid: '8910', name: 'electron_app.exe', hook: 'Electron IPC', risk: 'Low', status: 'Verified' },
    { pid: '1204', name: 'svchost_hook.exe', hook: 'SetWindowsHookEx', risk: 'Flagged', status: 'Monitored' },
    { pid: '3341', name: 'code.exe', hook: 'Keyboard Input Event', risk: 'Low', status: 'Clean' },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-slate-800 font-sans select-none">
      {/* KeyShield App Bar */}
      <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold">
            <Lock className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              KeyShield Security Monitor
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ACTIVE SHIELD
              </span>
            </h4>
            <p className="text-[11px] text-slate-400">Keystroke & Hook Anomaly Detector v1.2</p>
          </div>
        </div>

        <button 
          onClick={triggerScan}
          disabled={scanActive}
          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Activity className={`w-3.5 h-3.5 ${scanActive ? 'animate-spin' : ''}`} />
          {scanActive ? 'Scanning Hooks...' : 'Run Quick Scan'}
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-100/80 px-5 py-2 border-b border-slate-200 flex items-center gap-4 text-xs font-medium text-slate-600">
        <button 
          onClick={() => setSelectedTab('monitor')}
          className={`pb-1 transition-colors ${selectedTab === 'monitor' ? 'text-slate-900 font-bold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
        >
          Real-Time Protection
        </button>
        <button 
          onClick={() => setSelectedTab('processes')}
          className={`pb-1 transition-colors ${selectedTab === 'processes' ? 'text-slate-900 font-bold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
        >
          Process Inspector
        </button>
        <button 
          onClick={() => setSelectedTab('logs')}
          className={`pb-1 transition-colors ${selectedTab === 'logs' ? 'text-slate-900 font-bold border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
        >
          Detection Logs
        </button>
      </div>

      {/* Main App Content Area */}
      <div className="p-5 space-y-4 bg-slate-50/50">
        {/* Security Status Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">System Defense</span>
              <span className="text-sm font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-4 h-4" /> Protected
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Hooks Scanned</span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">142 Processes</span>
            </div>
            <Eye className="w-4 h-4 text-slate-400" />
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Active Threats</span>
              <span className="text-sm font-bold text-amber-600 mt-0.5">0 Detected</span>
            </div>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
        </div>

        {/* Process Monitor Log */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-slate-600" />
              Live Process & Key Hook Telemetry
            </span>
            <span className="text-[10px] font-mono text-slate-400">SCAN FREQ: 500ms</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {processLogs.map((p) => (
              <div 
                key={p.pid}
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/80 flex items-center justify-between hover:bg-slate-100/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold">
                    PID {p.pid}
                  </span>
                  <span className="font-semibold text-slate-900">{p.name}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-500 hidden sm:inline">{p.hook}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 ${
                    p.risk === 'Flagged' 
                      ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    {p.risk === 'Flagged' ? <AlertTriangle className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Feature Summary */}
        <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span className="font-medium text-slate-800">
            Engineered with Python, Flask, React & Electron for Cross-Platform Process Inspection
          </span>
          <span className="text-[11px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
            Cybersecurity Project
          </span>
        </div>
      </div>
    </div>
  );
}
