import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export function AboutCard() {
  return (
    <Card className="col-span-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase size={16} />
          <span className="font-bold">About</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6">
          Hello! I'm Kaarlo Sasiang, a passionate{" "}
          <Highlighter action="underline" color="#FF9800">
            Full Stack Web Developer
          </Highlighter>{" "}
          dedicated to crafting seamless and efficient web applications.
          With a strong foundation in both front-end and back-end technologies.
          <br />
          <br />
          I thrive on transforming ideas into functional and user-friendly
          digital experiences. My expertise lies in creating responsive designs,
          optimizing performance, and ensuring robust functionality across various platforms.
          <br />
          <br />I am committed to staying updated with the latest industry
          trends and continuously honing my skills to deliver innovative
          solutions that meet client needs.
        </p>
      </CardContent>
    </Card>
  );
}
