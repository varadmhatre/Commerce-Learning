"use client";

import { useState } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const suggestions = ["Explain inflation like I am 12", "How should a beginner start investing?", "What is the difference between profit and cash flow?"];

export function MentorChat() {
  const [messages, setMessages] = useState([
    { role: "mentor", text: "Welcome to Finverse. Ask me anything about commerce, economics, banking, investing, or money psychology. I will answer with simple analogies and a practical next step." }
  ]);
  const [input, setInput] = useState("");

  function answer(question: string) {
    const text = question.toLowerCase();
    if (text.includes("inflation")) return "Inflation is like your money backpack getting slightly smaller while prices climb uphill. If many everyday things cost more over time, the same cash buys less. Next step: compare the price of one grocery item over three months.";
    if (text.includes("invest")) return "Start with safety, then consistency: emergency fund, high-interest debt control, goals, diversified low-cost funds, and automated contributions. Next step: use the SIP simulator and test three time horizons.";
    if (text.includes("cash")) return "Profit is the score on paper; cash flow is oxygen. A company can report profit but struggle if customers pay late and bills are due now. Next step: map money-in and money-out for a small business.";
    return "Great question. Break it into: what is being exchanged, who takes risk, how money moves, what incentives exist, and what can go wrong. Next step: write one real-world example and I will help decode it.";
  }

  function send(text = input) {
    if (!text.trim()) return;
    setMessages((current) => [...current, { role: "user", text }, { role: "mentor", text: answer(text) }]);
    setInput("");
  }

  return (
    <main className="container py-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[.3em] text-cyan-200">AI mentor</p>
        <h1 className="mt-3 text-5xl font-black text-gradient">A patient finance guide for complete beginners.</h1>
        <Card className="mt-8 overflow-hidden">
          <div className="border-b border-white/10 p-5 flex items-center gap-3"><div className="grid size-11 place-items-center rounded-2xl bg-cyan-300 text-slate-950"><Bot /></div><div><h2 className="font-black">Mentor mode</h2><p className="text-sm text-muted-foreground">Prototype-ready interface; connect the API route to your preferred LLM in production.</p></div></div>
          <div className="max-h-[52vh] space-y-4 overflow-y-auto p-5">
            {messages.map((message, index) => <div key={index} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}><div className={`flex max-w-[80%] gap-3 rounded-3xl p-4 ${message.role === "user" ? "bg-cyan-300 text-slate-950" : "bg-white/[0.06]"}`}>{message.role === "user" ? <User className="size-5 shrink-0" /> : <Sparkles className="size-5 shrink-0 text-cyan-200" />}<p className="leading-7">{message.text}</p></div></div>)}
          </div>
          <div className="border-t border-white/10 p-5">
            <div className="mb-4 flex flex-wrap gap-2">{suggestions.map((item) => <button key={item} onClick={() => send(item)} className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/15">{item}</button>)}</div>
            <div className="flex gap-3"><input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} className="flex-1 rounded-full border border-white/10 bg-slate-950/70 px-5 outline-none focus:ring-2 focus:ring-cyan-300" placeholder="Ask your mentor..." /><Button onClick={() => send()}><Send className="size-4" /> Send</Button></div>
          </div>
        </Card>
      </div>
    </main>
  );
}
