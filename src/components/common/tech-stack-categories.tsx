import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react";

type CategoryMap = Record<string, string[]>;

type TechStackCategoriesProps = {
  categories: CategoryMap;
  className?: string;
};

export function TechStackCategories({ categories, className }: TechStackCategoriesProps) {
  const entries = Object.entries(categories);
  return (
    <Card className={className ?? "col-span-12 md:col-span-8"}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 size={16} />
          <span className="font-bold">Tech Stack</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1  gap-4">
          {entries.map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h4 className="text-sm font-semibold">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-[10px] font-mono text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
