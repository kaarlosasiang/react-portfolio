import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToolCase } from "lucide-react";
import Link from "next/link";

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  inProgress?: boolean;
  slug: string;
};

type ProjectListProps = {
  projects: ProjectItem[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <Card className="col-span-12 md:col-span-8 md:-mt-7 lg:-mt-14">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ToolCase size={16} />
          <span className="font-bold">Projects</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((proj, i) => (
            <Link key={i} href={`/project/${proj.slug}`}>
              <div className="rounded-lg border bg-card text-card-foreground p-3 hover:border-primary/50 hover:bg-muted/50 transition-colors cursor-pointer h-full">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold">{proj.title}</h4>
                    {proj.inProgress && (
                      <Badge variant="outline" className="text-[10px]">
                        In Progress
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {proj.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md border text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
