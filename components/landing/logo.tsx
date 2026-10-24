export function Logo() {
  return (
    <span className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
      <span aria-hidden="true" className="flex h-6 w-6 items-end gap-[3px] rounded-md bg-accent p-1">
        <span className="h-1.5 w-1 rounded-sm bg-accent-foreground" />
        <span className="h-2.5 w-1 rounded-sm bg-accent-foreground" />
        <span className="h-3.5 w-1 rounded-sm bg-accent-foreground" />
      </span>
      Dealflow
    </span>
  );
}
