import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToolCase } from "lucide-react";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  inProgress?: boolean;
};

type ProjectListProps = {
  projects: ProjectItem[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <Card className="col-span-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ToolCase size={16} />
          <span className="font-bold">Projects</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((proj, i) => (
            <div key={i} className="rounded-lg border bg-card text-card-foreground p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold">{proj.title}</h4>
                  {proj.inProgress && (
                    <Badge variant="outline" className="text-[10px]">
                      In Progress
                    </Badge>
                  )}
                </div>
                {proj.href && !proj.inProgress && (
                  <a href={proj.href} className="text-xs text-muted-foreground hover:text-foreground">
                    View
                  </a>
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{proj.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded-md border text-[10px] text-muted-foreground">
                    {tag}
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
