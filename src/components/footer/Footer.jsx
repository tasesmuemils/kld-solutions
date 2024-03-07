import Link from "next/link";

export default function Footer() {
  return (
    <footer className="m-4" data-aos="fade-up">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              kld solutions
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link href="/contact" className="hover:underline me-4 md:me-6">
                Sazinies ar Mums
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}
          <Link href="/" className="hover:underline">
            {" "}
            kld solutions™
          </Link>
        </span>
      </div>
    </footer>
  );
}
