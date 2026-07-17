import Image from "next/image";

export default function Loading() {
  return (
    <div className="texture-forest fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6">
      <Image
        src="/logo.svg"
        alt="Dom Tempero"
        width={110}
        height={110}
        className="animate-pulse"
        priority
      />
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" />
      </div>
    </div>
  );
}
