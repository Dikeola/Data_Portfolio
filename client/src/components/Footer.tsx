import ADHDTag from "./ADHDTag";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <span className="text-sm font-medium">Portfolio</span>
            <ADHDTag text="toldyouiwasgood" />
          </div>
          
          <p className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Dikeola Abdulmuqiit Ogunmola. Created with 
            <span className="text-[#FF6B6B]"> ❤</span> and data-driven precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
