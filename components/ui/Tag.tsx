import { ReactNode } from "react";

export default function Tag({children}: {children: ReactNode}) {
  return (
    <div className="py-1 px-3 w-fit rounded-full bg-neutral-700 text-neutral-300">
      <p>{children}</p>
    </div>
  );
}