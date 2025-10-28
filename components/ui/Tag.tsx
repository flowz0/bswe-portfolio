import { ReactNode } from "react";

export default function Tag({children}: {children: ReactNode}) {
  return (
    <div className="text-neutral-300 bg-neutral-900 text-sm py-1 px-3 rounded-full w-fit cursor-default">
      <p>{children}</p>
    </div>
  );
}