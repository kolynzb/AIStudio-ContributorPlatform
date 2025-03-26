import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative max-h-screen overflow-hidden bg-card-venta">
      <div className="relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-32 lg:py-56 xl:py-96">
        <div className="text-left sm:text-center">
          <p className="bg-gradient-to-r from-vanta-100 via-vanta-300 to-vanta-500 bg-clip-text pb-2 font-display font-medium text-3xl text-transparent tracking-tight sm:text-5xl">
            Oops! Error 404 <span className="lg:block">Page Not Found</span>
          </p>
          <p className="mx-auto mt-4 max-w-md text-vanta-300">
            The page you&apos;re looking for might have been moved, deleted, or never existed in the
            first place. Double-check the URL or return to the homepage to continue exploring.
          </p>

          <div className="relative mx-auto mt-12 flex max-w-xl flex-col justify-center gap-2 sm:flex-row">
            <a
              href=""
              className="flex h-10 items-center justify-center rounded-lg bg-gradient-to-b from-vanta-300 via-vanta-400 to-vanta-500 px-4 py-2 text-sm text-white transition-all hover:to-vanta-600"
            >
              Join Now
            </a>
            <Link
              href="/"
              className="flex h-10 items-center justify-center rounded-lg bg-gradient-to-b from-white/[.105] to-white/[.15] px-4 py-2 text-sm text-white ring-1 ring-white/10 ring-inset transition-all hover:to-white/[.25]"
            >
              Back Home
            </Link>
          </div>
        </div>
        <Image
          className="absolute inset-x-0 left-0 mx-auto mt-12 h-96 w-96 blur-3xl"
          src="/avatars/avatar1.svg"
          alt="light reflection"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default NotFound;
