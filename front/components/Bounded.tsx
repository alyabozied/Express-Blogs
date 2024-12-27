import clsx from "clsx";

export function Bounded({
  Comp = "div",
  size = "base",
  children,
}:{
    Comp?:React.ElementType,
    size?:string,
    children: React.ReactNode,
}) {
  return (
    <Comp className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl",
        )}
      >
        {children}
      </div>
    </Comp>
  );
}