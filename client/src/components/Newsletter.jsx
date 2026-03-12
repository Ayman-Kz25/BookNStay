import { MoveRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Newsletter = () => {
  return (
    <div class="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-[var(--primary)] text-white">

      <SectionTitle
        title="Stay Inspired"
        subtitle="Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration."
      />

      <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <input
          type="text"
          class="bg-[var(--secondary)]/20 px-4 py-2.5 border-2 border-[var(--secondary)]/80 text-[var(--text-primary)] rounded-lg outline-none max-w-66 w-full placeholder:text-white/70"
          placeholder="Enter your email"
        />
        <button class="flex items-center justify-center gap-2 group bg-[var(--secondary)] text-[var(--primary)] px-4 md:px-7 py-2.5 rounded-lg active:scale-95 transition-all cursor-pointer">
          Subscribe
          <MoveRight size={16} className=" group-hover:translate-x-1 transition-all" />
        </button>
      </div>
      <p class="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </div>
  );
};
export default Newsletter;
