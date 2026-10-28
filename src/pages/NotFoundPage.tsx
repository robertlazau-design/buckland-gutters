import { Link } from 'react-router-dom';
import { BUSINESS } from '../data/business';

export function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-20 text-center bg-white">
      <div className="max-w-md space-y-5">
        <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-[#0A0A0A]">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-neutral-600">
          That page doesn’t exist. It may have moved.
        </p>
        <div className="flex flex-col gap-3 pt-2">
          <Link
            to="/"
            className="px-7 py-3.5 min-h-[46px] text-sm font-semibold text-white bg-[#0A0A0A] hover:bg-[#EC5B0E] rounded-full transition-colors duration-150"
          >
            Go to the Home Page
          </Link>
          <p className="text-sm text-neutral-600">
            Or call us at <span className="font-mono text-[#0A0A0A]">{BUSINESS.phone}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
