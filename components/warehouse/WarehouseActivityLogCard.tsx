import { Card, CardHeader } from "@/components/ui/Card";
import { warehouseActivityLog } from "@/data/warehouse";
import { MoreHorizontal} from "lucide-react";
import PackageCheck from "@/assets/WarehouseIcon/CheckSquare.png";
import PackagePlus from "@/assets/WarehouseIcon/RowsPlusTop.png";
import PackageX from "@/assets/WarehouseIcon/Van.png";
import FileText from "@/assets/WarehouseIcon/FilePlus.png";
import Image from "next/image";

const activityIcons = { check: PackageCheck, add: PackagePlus, dispatch: PackageX, file: FileText };

// check & dispatch use the dark icon treatment; add & file use the brand-purple treatment
const activityIconStyles: Record<keyof typeof activityIcons, string> = {
  check: "bg-ink text-white",
  add: "bg-brand text-white",
  dispatch: "bg-ink text-white",
  file: "bg-brand text-white",
};

export function WarehouseActivityLogCard() {
  return (
    <Card>
      <CardHeader title="Warehouse Activity Log" action={<MoreHorizontal className="h-4 w-4 text-muted" />} />
      <ul className="space-y-5">
        {warehouseActivityLog.map((a, i) => {
          const Icon = activityIcons[a.icon];
          return (
            <li key={i} className="flex gap-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activityIconStyles[a.icon]}`}>
                <Image src={Icon} alt={`${a.icon} icon`} width={16} height={16} className="h-4 w-4" />
              </span>
              <div className={`border-b border-gray-300 pb-3 ${i === 3 ? "border-b-0" : ""}`}>
                <p className="text-sm text-ink">
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