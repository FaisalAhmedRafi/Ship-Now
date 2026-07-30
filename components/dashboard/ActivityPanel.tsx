import { Card, CardHeader } from "@/components/ui/Card";
import { recentActivity } from "@/data/dashboard";
import { MoreHorizontal, FileText, Tag, RotateCcw, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import fileIcon from "@/assets/file.png";
import tagIcon from "@/assets/tag.png";
import returnIcon from "@/assets/return.png";
import checkIcon from "@/assets/check.png";

const iconMap = {
  file: fileIcon,
  tag: tagIcon,
  return: returnIcon,
  check: checkIcon,
};

export function ActivityPanel() {
  return (
    <Card>
      <CardHeader title="Recent Activity" 
      action={
        <div className="flex items-center justify-center rounded-md bg-surface p-2">
            <MoreHorizontal className="h-4 w-4 text-muted" />
        </div>
      } />
      <ul className="space-y-5">
        {recentActivity.map((a, i) => {
          const Icon = iconMap[a.icon];
          return (
            <li key={i} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark">
                <Image
                  src={iconMap[a.icon]}
                  alt={`${a.icon} Icon`}
                  className="h-8.5 w-8.5"
                />
              </span>
              <div>
                <p className="text-sm text-ink">
                  <span className="text-muted">{a.who}</span>{" "}
                  <span className="font-semibold text-brand-dark">{a.user}</span> {a.action}
                </p>
                <p className="mt-0.5 text-xs text-muted">{a.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
