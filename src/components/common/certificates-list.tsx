"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CertificateModal } from "./certificate-modal";
import { Briefcase, Eye } from "lucide-react";

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
};

type CertificatesListProps = {
  items: CertificateItem[];
};

export function CertificatesList({ items }: CertificatesListProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <>
      <Card className="col-span-12 md:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase size={16} />
            <span className="font-bold">Certificates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="relative pb-4 border-b last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm flex-1">{item.title}</h3>
                  {item.imageUrl && (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                      title="View Certificate"
                    >
                      <Eye size={16} />
                    </button>
                  )}
                </div>
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

      {selectedCert?.imageUrl && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          imageUrl={selectedCert.imageUrl}
        />
      )}
    </>
  );
}
