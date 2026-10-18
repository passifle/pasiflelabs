import Link from "next/link";
import Image from "next/image";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand ${inverse ? "brand--inverse" : ""}`} href="/" aria-label="Passifle Labs home">
      <Image className="brand__image" src="/passifle-labs-logo-mark.png" alt="" width={34} height={34} priority />
      <span className="brand__wordmark">passifle<span>labs</span></span>
    </Link>
  );
}
