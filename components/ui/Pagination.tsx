"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
}: {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visible = pages.length <= 5
    ? pages
    : page <= 3
      ? [...pages.slice(0, 3), "…", pages[pages.length - 1]]
      : page >= totalPages - 2
        ? [pages[0], "…", ...pages.slice(-3)]
        : [pages[0], "…", page, "…", pages[pages.length - 1]];

  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm">
      <div className="flex items-center gap-2 text-muted">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="rounded-lg border border-border bg-white px-2 py-1 text-ink"
        >
          {[8, 12, 20].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span>of {total} results</span>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {visible.map((p, i) =>
          typeof p === "number" ? (
            <button
              key={i}
              onClick={() => onPageChange(p)}
              className={`h-8 w-8 rounded-lg text-sm font-medium ${
                p === page ? "bg-brand text-white" : "text-ink hover:bg-surface"
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={i} className="px-1 text-muted">{p}</span>
          )
        )}
        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border disabled:opacity-40"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
