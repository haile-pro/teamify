"use client"

import dynamic from 'next/dynamic'

const DashboardContent = dynamic(() => import('@/components/dashboard-content'), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </main>
  ),
})

export default function DashboardLoader() {
  return <DashboardContent />
} 