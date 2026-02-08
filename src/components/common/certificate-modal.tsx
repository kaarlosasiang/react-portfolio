"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

type CertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
};

export function CertificateModal({
  isOpen,
  onClose,
  title,
  imageUrl,
}: CertificateModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full">
          <div className="relative w-full aspect-video sm:aspect-4/3">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
