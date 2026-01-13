import {
  getProjectBySlug,
  getRelatedProjects,
  projectsData,
} from "@/lib/projects-data";
import { RelatedProjects } from "@/components/common/related-projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const project = getProjectBySlug(title);
  const relatedProjects = project ? getRelatedProjects(project.id) : [];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <div className="lg:hidden bg-muted/50 border-b sticky top-0 z-50">
        <div className="flex items-center px-4 py-3">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop header with back button */}
      <div className="hidden lg:block bg-muted/50 border-b sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <article className="max-w-3xl mx-auto px-4 py-8 lg:py-12">
        {/* Hero section */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            {project.description}
          </p>

          {/* Featured Image */}
          {project.image && (
            <div className="relative max-h-64 sm:max-h-80 aspect-video w-full rounded-lg overflow-hidden mb-6 bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLink size={16} />
                  View Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github size={16} />
                  View Code
                </Button>
              </a>
            )}
            {project.inProgress && (
              <Badge className="h-10 px-4 flex items-center">In Progress</Badge>
            )}
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Overview section */}
        <section className="mb-12" id="overview">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </section>

        {/* Challenge section */}
        <section className="mb-12" id="challenge">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.challenge}
          </p>
        </section>

        {/* Solution section */}
        <section className="mb-12" id="solution">
          <h2 className="text-2xl font-bold mb-4">The Solution</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.solution}
          </p>
        </section>

        {/* Features section */}
        <section className="mb-12" id="features">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="text-primary font-bold mt-1 flex-shrink-0">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies section */}
        <section className="mb-12" id="technologies">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Results section */}
        {/* {project.results && (
          <section className="mb-12" id="results">
            <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="text-base leading-relaxed">{project.results}</p>
            </div>
          </section>
        )} */}

        {/* Related Projects */}
        <RelatedProjects projects={relatedProjects} />

        <Separator className="my-12" />

        {/* Footer with navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </Link>

          {(project.demoUrl || project.githubUrl) && (
            <div className="flex gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={14} />
                    Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github size={14} />
                    Code
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ title: project.slug }));
}
