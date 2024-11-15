// app/insights/page.tsx
"use client";

import React from 'react';
import NavBar from '../components/navBar';
import ViewsPerDay from '../components/ViewsPerDay';
import EngagementByTime from '../components/EngagementByTime';
import FollowersByCountry from '../components/FollowersByCountry';
import Impressions from '../components/Impressions';

export default function Insights() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="mt-4 max-w-7xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">Insights</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ViewsPerDay />
          <EngagementByTime />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FollowersByCountry />
          <Impressions />
        </div>
      </main>
    </div>
  );
}