import { EnhancedMnkyMusikDashboard } from '@/components/enhanced-mnky-musik-dashboard'

export default function MediaPage() {
  return (
    <div className="h-[calc(100vh-7rem)] w-full flex items-center justify-center px-4">
      <div className="w-full max-w-[1800px] h-full rounded-xl overflow-hidden">
        <EnhancedMnkyMusikDashboard />
      </div>
    </div>
  );
}