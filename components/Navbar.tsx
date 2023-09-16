export default function Navbar(){
    return(
        <nav
    className="relative flex w-full flex-wrap items-center justify-between bg-[#f59e0b] py-2 text-white shadow-lg hover:text-white focus:text-white lg:py-4">
    <div className="flex w-full flex-wrap items-center justify-between px-3">
    <a
      className="ml-2 text-xl text-white"
      href="#"
      >KRYPTO APP</a>
      <div className="ml-5 flex w-[30%] items-center justify-between">

      {/* Search icon */}

      <span
        className="input-group-text flex items-right whitespace-nowrap rounded px-5 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
        id="basic-addon2">
        <a
        className="ml-5 text-xl text-white"
        href="#"
        >About</a>

        <a
        className="ml-5 text-xl text-white"
        href="#"
        >Learn</a>

        <a
        className="ml-5 text-xl text-white"
        href="#"
        >NFTs</a>

        <a
        className="ml-5 text-xl text-white"
        href="#"
        >Exchanges</a>
      </span>
    </div>
  </div>
</nav>
    )
}