export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-bone-100/[0.04] px-2.5 py-1 font-mono text-xs text-bone-400">
      <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60" />
      {label}
    </span>
  )
}
