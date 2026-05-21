import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type DataTableProps = {
  caption?: string;
  columns: string[];
  rows: (string | number)[][];
  note?: string;
};

export function DataTable({ caption, columns, rows, note }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
      {caption && (
        <div className="px-5 py-3 border-b border-border/60 bg-secondary/40">
          <p className="text-sm font-medium">{caption}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((c, i) => (
                <TableHead key={i} className="font-medium">{c}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, ri) => (
              <TableRow key={ri}>
                {row.map((cell, ci) => (
                  <TableCell key={ci} className={ci === 0 ? "font-medium" : ""}>
                    {cell === "" || cell === null || cell === undefined ? (
                      <span className="italic text-muted-foreground/70">Add data</span>
                    ) : (
                      cell
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {note && (
        <div className="px-5 py-3 border-t border-border/60 bg-secondary/30 text-xs text-muted-foreground">
          {note}
        </div>
      )}
    </div>
  );
}
