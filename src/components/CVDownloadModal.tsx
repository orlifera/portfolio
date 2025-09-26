"use client";

import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface CVDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
    if (!isOpen) return null;

    const handleDownload = (language: 'it' | 'en') => {
        const cvPaths = {
            it: "/CV-Ferazzani.pdf",
            en: "/CV_ENG.pdf"
        };

        window.open(cvPaths[language], "_blank");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-foreground">
                        CV Language
                    </h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 text-center">
                    Choose your preferred language to download my CV.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <Button
                        onClick={() => handleDownload('it')}
                        variant="default"
                        className="w-full h-12 text-base gap-3"
                    >
                        <span className="text-2xl">🇮🇹</span>
                        Curriculum Vitae - Italiano
                        <Download className="h-4 w-4" />
                    </Button>

                    <Button
                        onClick={() => handleDownload('en')}
                        variant="outline"
                        className="w-full h-12 text-base gap-3"
                    >
                        <span className="text-2xl">🇬🇧</span>
                        Curriculum Vitae - English
                        <Download className="h-4 w-4" />
                    </Button>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}