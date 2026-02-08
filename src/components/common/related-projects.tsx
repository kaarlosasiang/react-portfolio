import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProjectDetail } from "@/lib/projects-data";

type RelatedProjectsProps = {
  projects: ProjectDetail[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="my-16 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a key={project.id} href={`/project/${project.slug}`}>
            <Card className="overflow-hidden hover:border-primary/50 transition-colors h-full cursor-pointer pt-0">
              {project.image && (
                <div className="relative h-32 w-full overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="pt-4">
                <h3 className="font-semibold text-base mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-[10px]">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
