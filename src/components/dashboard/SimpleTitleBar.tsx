import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface SimpleTitleBarProps {
  title: string;
  subtitle?: string;
  onBack: () => void;
  icon?: React.ReactNode;
  right?: React.ReactNode;
}

const SimpleTitleBar = ({
  title,
  subtitle,
  onBack,
  icon,
  right,
}: SimpleTitleBarProps) => {
  return (
    <Card>
      <CardHeader className="px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              {icon ? <span className="shrink-0 text-primary">{icon}</span> : null}
              <span className="truncate">{title}</span>
            </CardTitle>
            {subtitle ? (
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{subtitle}</p>
            ) : null}
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full md:w-auto">
            {right ? right : null}
            <Button
              variant="outline"
              size="sm"
              onClick={onBack}
              className="h-8 w-full md:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SimpleTitleBar;
