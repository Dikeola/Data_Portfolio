import { Link } from "wouter";
import ADHDTag from "@/components/ADHDTag";

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-[#2E282A] text-[#F7FFF7] z-50 flex flex-col items-center justify-center p-4">
      <div className="text-9xl font-display font-black text-[#FF6B6B] mb-4">404</div>
      <div className="mb-8">
        <ADHDTag text="I told you I was good at breaking things! 😭" color="#FF6B6B" />
      </div>
      <p className="text-xl mb-8 max-w-md text-center">
        The page you're looking for ran away with my attention span. They'll both be back any minute... probably.
      </p>
      <Link href="/">
        <a className="bg-[#4ECDC4] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:rotate-3">
          Go Home
        </a>
      </Link>
    </div>
  );
}
