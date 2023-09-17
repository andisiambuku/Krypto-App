export default function Navbar(){
    return(
      <nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-[#f59e0b] focus:text-[#f59e0b]  lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <a
      className="ml-2 text-2xl text-[#f59e0b] "
      href="#"
      >KRYPTO APP</a>
    <div className="ml-5 flex w-[30%] items-center justify-between">
      <input
        type="search"
        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-[#f59e0b] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" />

    
      <span
        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-[#f59e0b]"
        id="basic-addon2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  </div>
</nav>
    )
}