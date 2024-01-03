import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-[#f59e0b] focus:text-[#f59e0b]  lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <a className="ml-2 text-2xl text-[#f59e0b] " href="/">
          KRYPTO APP
        </a>
        <SearchBar />
      </div>
    </nav>
  );
}
