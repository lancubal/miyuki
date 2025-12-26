export function Main({
  fullscreen,
  children
}: { fullscreen?: boolean, children: React.ReactNode }) {
  return (
    <div className={`max-w-6xl mx-auto p-6 ${fullscreen ? "fixed inset-0 bg-white z-50 overflow-auto" : ""}`}>
      {children}
    </div>)
}