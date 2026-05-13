export default function Loading() {
  return (
    <div className="p-6 md:p-8 space-y-4 animate-pulse">
      <div className="w-8 h-8 bg-foreground/10 rounded" />
      <div className="h-8 bg-foreground/10 rounded w-3/4" />
      <div className="h-4 bg-foreground/10 rounded w-1/2" />
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="h-16 bg-foreground/10 rounded" />
        <div className="h-16 bg-foreground/10 rounded" />
        <div className="h-16 bg-foreground/10 rounded" />
        <div className="h-16 bg-foreground/10 rounded" />
      </div>
      <div className="h-[1px] bg-foreground/10 my-6" />
      <div className="space-y-3">
        <div className="h-4 bg-foreground/10 rounded w-2/3" />
        <div className="h-4 bg-foreground/10 rounded w-full" />
        <div className="h-4 bg-foreground/10 rounded w-5/6" />
      </div>
    </div>
  );
}
