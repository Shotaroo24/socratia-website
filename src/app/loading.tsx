export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div
        className="w-10 h-10 rounded-full border-2 border-border border-t-main animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
