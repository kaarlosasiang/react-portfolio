import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
};

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase size={16} />
          <span className="font-bold">Experience</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Separator orientation="vertical" className="absolute left-1.5 top-3 h-[calc(100%-1.5rem)]" />
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="relative pl-6">
                <div className="border-2 bg-white hover:bg-foreground absolute left-0 top-1 flex size-3 items-center justify-center rounded-full transition-colors" />
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-muted-foreground">{item.company}</p>
                  <Badge variant={"outline"}>
                    <span className="text-[10px] text-gray-500 font-semibold">{item.period}</span>
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
