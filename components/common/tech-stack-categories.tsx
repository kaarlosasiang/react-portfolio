import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToolCase } from "lucide-react";

type CategoryMap = Record<string, string[]>;

type TechStackCategoriesProps = {
  categories: CategoryMap;
  className?: string;
};

export function TechStackCategories({ categories, className }: TechStackCategoriesProps) {
  const entries = Object.entries(categories);
  return (
    <Card className={className ?? "col-span-12 md:col-span-8 md:-mt-12"}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ToolCase size={16} />
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
                  <Badge key={item} variant="outline" className="text-[10px]">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
