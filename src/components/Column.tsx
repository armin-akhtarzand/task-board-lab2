import type { ReactNode } from "react";

type ColumnProps = {
  title: string;
  children: ReactNode;
};

const Column = ({ title, children }: ColumnProps) => {
  return (
    <section className="text-center">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default Column;
