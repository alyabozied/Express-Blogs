"use client"
import HorizontalDivider  from "./HorizontalDivider";
import { Bounded } from "./Bounded";


export default function Footer() {
  return (
    <Bounded Comp="footer">
      <div className="grid grid-cols-1 justify-items-center gap-24">
        <HorizontalDivider />
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
          Made by Ali Abozied
        </div>
      </div>
    </Bounded>
  );
}
