export function LoadingIndicator() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-800/50 backdrop-blur-[2px]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-600 border-t-white" />
    </div>
  );
} 