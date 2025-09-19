'use client';

import { useState } from 'react';
import { Users, BookOpen, Newspaper, Play, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'partners', label: 'Partners', icon: Users },
  { id: 'resources', label: 'Resources', icon: BookOpen },
  { id: 'content', label: 'Content', icon: Newspaper },
  { id: 'media', label: 'Media', icon: Play },
  { id: 'profile', label: 'Profile', icon: User },
];

export function AppShell({ children, activeTab, onTabChange }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface shadow-card border-b border-gray-200">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-heading text-gray-900">LinguaCzech</h1>
              <p className="text-sm text-gray-600">Speak Czech with confidence</p>
            </div>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">LC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-5 gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex flex-col items-center justify-center py-2 px-1 transition-colors duration-200',
                  isActive
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}
