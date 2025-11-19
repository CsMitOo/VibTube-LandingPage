import React from "react";

interface PaymentLayoutProps {
  children: React.ReactNode;
}

export function PaymentLayout({ children }: PaymentLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Effects - Copied from Hero section */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl z-0" />
      <div className="absolute top-60 right-1/4 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent z-0" />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {children}
      </div>
    </div>
  );
}