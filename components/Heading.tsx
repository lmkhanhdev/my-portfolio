import React, { ReactNode } from "react";

const Heading = ({
  label,
  title,
  className,
}: {
  label: ReactNode;
  title: ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">{label}</h1>
      <span className="text-sm text-muted-foreground">{title}</span>
    </div>
  );
};

export default Heading;
