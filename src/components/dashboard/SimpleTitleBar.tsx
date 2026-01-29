import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SimpleTitleBarProps {
  title: string;
  subtitle?: string;
  onBack: () => void;
}

const SimpleTitleBar = ({ title, subtitle, onBack }: SimpleTitleBarProps) => {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <Button variant="outline" size="sm" onClick={onBack} className="shrink-0">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>

        <div className="min-w-0">
          <h1 className="text-xl font-bold tracking-tight dashboard-text-primary">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-sm dashboard-text-muted">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default SimpleTitleBar;
