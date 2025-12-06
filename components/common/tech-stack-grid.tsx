import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToolCase } from "lucide-react";
import Image from "next/image";

type TechStackGridProps = {
  images: string[];
  className?: string;
};

export function TechStackGrid({ images, className }: TechStackGridProps) {
  return (
    <Card className={className ?? "col-span-8 -mt-8.5"}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ToolCase size={16} />
          <span className="font-bold">Tech Stack</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {images.map((src, index) => (
            <div key={index} className="relative w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
              <Image src={src} alt={images[index]} width={24} unoptimized height={24} className="object-contain" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
