// "use client";

// import { useSearchParams, usePathname, useRouter } from "next/navigation";
// // import { useDebouncedCallback } from "use-debounce";
// import { Search } from "lucide-react";

// const SearchInput = () => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

// //   const handleSearch = useDebouncedCallback((term) => {
// //     const params = new URLSearchParams(searchParams);
// //     params.set("page", "1");
// //     if (term) {
// //       params.set("type", term);
// //     } else {
// //       params.delete("type");
// //     }
// //     replace(`${pathname}?${params.toString()}`);
// //   }, 300);

//   return (
//     <div className="flex items-center px-2 py-1   max-w-[350px] rounded-md border border-[#e2e8f0]  ">
//       <input
//         type="text"
//         // value={search}
//         // onChange={(e) => handleSearch(e.target.value)}
//         placeholder="Search..."
//         className="w-full text-sm p-1 bg-transparent font-normal placeholder:text-[#6F6F6F] outline-none  "
//       />
//       <Search className="text-gray-400 h-5 w-5" />
//     </div>
//   );
// };

// export default SearchInput;
