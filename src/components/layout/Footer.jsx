import SocialLinks from "../common/SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-base-200/60 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Abdul Ahad — All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
