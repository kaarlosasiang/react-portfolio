import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string; // e.g., "2024" or "Dec 2024"
};

type CertificatesListProps = {
  items: CertificateItem[];
};

export function CertificatesList({ items }: CertificatesListProps) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase size={16} />
          <span className="font-bold">Certificates</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-muted-foreground">{item.issuer}</p>
                <Badge variant={"outline"}>
                  <span className="text-[10px] text-gray-500 font-semibold">{item.date}</span>
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
