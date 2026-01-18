'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, Loader2 } from 'lucide-react';
import { callGeminiFlash } from '@/lib/gemini';
import { marked } from 'marked';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}



export function RecoveryCompass() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi. I'm your Recovery Compass. I'm here to listen without judgment, help you navigate urges, or just chat if things feel heavy. How are you feeling right now?",
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMsg]);
    setUserInput('');
    setIsLoading(true);

    try {
      // Construct prompt context
      const context = `You are the "Recovery Compass", an empathetic, specialized AI recovery assistant.
      Your tone: Warm, non-judgmental, grounded, encouraging, but realistic.
      Your goal: Help users manage cravings, process emotions, and find motivation.
      Guidelines:
      - Keep responses concise (under 3-4 sentences usually) unless asked for deeper explanation.
      - Use "we" logic only when appropriate (building alignment).
      - If user mentions immediate self-harm, gently give them crisis resources immediately.
      - Never be preachy.

      User history:
      ${messages.slice(-3).map(m => `${m.role}: ${m.content}`).join('\n')}
      User: ${userInput}`;

      const responseText = await callGeminiFlash(context);

      if (responseText) {
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responseText,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMsg]);
      }
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };



  return (
    <div className="flex flex-col h-[600px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
      {/* Header */}
      <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
            <RefreshCw className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="font-outfit font-bold text-white">Recovery Compass</h3>
            <p className="text-xs text-cyan-400 font-mono">AI-POWERED SUPPORT</p>
          </div>
        </div>
        <button
          onClick={() => setMessages([messages[0]])}
          className="text-slate-500 hover:text-white transition-colors"
          title="Reset Chat"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 ${
                msg.role === 'user'
                  ? 'bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-tr-sm'
                  : 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700'
              }`}
            >
              <div
                className="prose prose-invert prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) as string }}
              />

            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-2xl rounded-tl-sm p-4 border border-slate-700 flex items-center space-x-2">
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="text-slate-400 text-sm animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-950 border-t border-slate-800">
        <div className="relative flex items-center space-x-2">


          <div className="flex-1 relative">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="w-full bg-slate-800 border-none rounded-xl py-3 pl-4 pr-10 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 resize-none h-[50px] scrollbar-hide"
            />
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!userInput.trim() || isLoading}
            className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-600 mt-2 font-mono">
          AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}
