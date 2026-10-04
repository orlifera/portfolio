"use client";

import { Dialog } from "radix-ui";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface CVDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const cvPaths = {
    it: "/CV-Ferazzani.pdf",
    en: "/CV_Eng.pdf",
};

export default function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
    const handleDownload = (language: keyof typeof cvPaths) => {
        window.open(cvPaths[language], "_blank");
        onClose();
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-modal bg-[oklch(0.1_0.03_267/0.65)] duration-300 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-modal w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-popover p-6 text-popover-foreground shadow-2xl duration-300 ease-out-expo data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-4">
                    <div className="flex items-center justify-between gap-4">
                        <Dialog.Title className="text-xl font-bold">CV Language</Dialog.Title>
                        <Dialog.Close asChild>
                            <Button variant="ghost" size="icon" aria-label="Close">
                                <X />
                            </Button>
                        </Dialog.Close>
                    </div>

                    <Dialog.Description className="mt-2 text-muted-foreground">
                        Choose your preferred language to download my CV.
                    </Dialog.Description>

                    <div className="mt-6 flex flex-col gap-3">
                        <Button onClick={() => handleDownload('it')} size="lg" className="w-full justify-between">
                            <span className="flex items-center gap-3">
                                <span className="text-2xl" aria-hidden>🇮🇹</span>
                                Curriculum Vitae - Italiano
                            </span>
                            <Download />
                        </Button>

                        <Button onClick={() => handleDownload('en')} variant="outline" size="lg" className="w-full justify-between">
                            <span className="flex items-center gap-3">
                                <span className="text-2xl" aria-hidden>🇬🇧</span>
                                Curriculum Vitae - English
                            </span>
                            <Download />
                        </Button>
                    </div>

                    <div className="mt-4 text-center">
                        <Dialog.Close asChild>
                            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                                Cancel
                            </Button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
