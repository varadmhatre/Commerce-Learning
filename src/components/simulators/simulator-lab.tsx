"use client";

import { useMemo, useState } from "react";
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from "recharts";
import { Calculator, Landmark, PiggyBank, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { compoundMonthly, formatCurrency } from "@/lib/utils";

export function SimulatorLab() {
  const [monthly, setMonthly] = useState(250);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(20);
  const [income, setIncome] = useState(3000);
  const [needs, setNeeds] = useState(50);
  const [wants, setWants] = useState(30);
  const sip = useMemo(() => compoundMonthly(0, monthly, rate, years), [monthly, rate, years]);
  const budget = [
    { name: "Needs", value: Math.round(income * needs / 100) },
    { name: "Wants", value: Math.round(income * wants / 100) },
    { name: "Invest", value: Math.round(income * (100 - needs - wants) / 100) }
  ];

  return (
    <main className="container py-10">
      <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-200">Simulator lab</p>
      <h1 className="mt-3 text-5xl font-black text-gradient">Practice money decisions safely.</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="mb-5 flex items-center gap-3"><Calculator className="text-cyan-200" /><h2 className="text-2xl font-black">SIP & wealth projection</h2></div>
          <div className="grid gap-4 md:grid-cols-3">
            <label className="text-sm">Monthly<input type="range" min="50" max="2000" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full" /><b>{formatCurrency(monthly)}</b></label>
            <label className="text-sm">Return %<input type="range" min="1" max="18" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full" /><b>{rate}%</b></label>
            <label className="text-sm">Years<input type="range" min="1" max="40" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full" /><b>{years}</b></label>
          </div>
          <p className="mt-5 text-3xl font-black">Projected: {formatCurrency(sip.balance)}</p>
          <div className="mt-6 h-72"><ResponsiveContainer><LineChart data={sip.points}><CartesianGrid stroke="rgba(255,255,255,.08)" /><XAxis dataKey="year" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }} /><Line dataKey="value" stroke="#22d3ee" strokeWidth={3} dot={false} /><Line dataKey="invested" stroke="#a78bfa" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6">
          <div className="mb-5 flex items-center gap-3"><PiggyBank className="text-emerald-200" /><h2 className="text-2xl font-black">Budgeting simulator</h2></div>
          <label className="text-sm">Monthly income<input type="range" min="1000" max="12000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full" /><b>{formatCurrency(income)}</b></label>
          <label className="mt-4 block text-sm">Needs %<input type="range" min="30" max="70" value={needs} onChange={(e) => setNeeds(Number(e.target.value))} className="w-full" /><b>{needs}%</b></label>
          <label className="mt-4 block text-sm">Wants %<input type="range" min="10" max="50" value={wants} onChange={(e) => setWants(Number(e.target.value))} className="w-full" /><b>{wants}%</b></label>
          <div className="mt-6 h-72"><ResponsiveContainer><BarChart data={budget}><CartesianGrid stroke="rgba(255,255,255,.08)" /><XAxis dataKey="name" stroke="#94a3b8" /><YAxis stroke="#94a3b8" /><Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16 }} /><Bar dataKey="value" fill="#34d399" radius={[12, 12, 0, 0]} /></BarChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-3"><TrendingUp className="text-fuchsia-200" /><h2 className="text-2xl font-black">Stock market practice desk</h2></div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Diversified index", "Quality business", "Speculative hype"].map((asset, index) => <div key={asset} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"><Landmark className="mb-4 text-cyan-200" /><h3 className="font-black">{asset}</h3><p className="mt-2 text-sm text-muted-foreground">Risk score {index + 2}/5 · Practice allocation, observe drawdowns, and write your investment thesis before buying.</p></div>)}
          </div>
        </Card>
      </div>
    </main>
  );
}
