import { CustomDock } from "@/components/common/custom-dock";
import { HeaderSection } from "@/components/common/header-section";
import { AboutCard } from "@/components/common/about-card";
import { CertificatesList } from "@/components/common/certificates-list";
import { ExperienceTimeline } from "@/components/common/experience-timeline";
import { TechStackCategories } from "@/components/common/tech-stack-categories";
import { ProjectList } from "@/components/common/project-list";
import { getProjectsList } from "@/lib/projects-data";
import {
  certificates,
  experienceItems,
  techCategories,
} from "@/lib/portfolio-data";

const projects = getProjectsList();

export default function Home() {
  return (
    <div className={`h-full max-w-4xl mx-auto py-5 space-y-5 px-5 lg:px-0 pb-20 relative`}>
      <HeaderSection
        name="Kaarlo Sasiang"
        location="Lupon, Davao Oriental, Philippines"
        title="Full Stack Web Developer"
      />
      <div className="grid sm:grid-cols-12 gap-3 items-start">
        <AboutCard />

        <ExperienceTimeline items={experienceItems} />

        <TechStackCategories categories={techCategories} />
        <CertificatesList items={certificates} />

        <ProjectList projects={projects} />
      </div>
      <CustomDock />
    </div>
  );
}
