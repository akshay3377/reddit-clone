// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Sidebarlayout from "@/components/sidebarlayout";
// import { cn } from "@/lib/utils";

// // import { ThemeProvider } from "@/components/theme-provider";

// // import { Toaster } from "@/components/ui/toaster";
// // import { NavigationMenuUi } from "@/components/navbar";
// // import Navbar1 from "@/components/navbar1";
// // import { Footer } from "@/components/footer";
// // import Sidebarlayout from "@/module/layout/sidebar";
// // import { NavigationMenuUi } from "@/components/navbar";

// // const roboto = Roboto({
// //   subsets : ['latin'],
// //   weight :["400" , '700']
// // })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   // weight :["400" , '700']
// });
// // const geistSans = localFont({
// //   src: "./fonts/GeistVF.woff",
// //   variable: "--font-geist-sans",
// //   weight: "100 900",
// // });
// // const geistMono = localFont({
// //   src: "./fonts/GeistMonoVF.woff",
// //   variable: "--font-geist-mono",
// //   weight: "100 900",
// // });

// export const metadata: Metadata = {
//   title: "CheckIn",
//   description: "Generated",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       {/* <body className={`${inter.variable} font-sans`}> */}
//       {/* <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange
//         > */}

//       {/* <Sidebarlayout>{children}</Sidebarlayout> */}
//       {/* </ThemeProvider>
//         <Toaster /> */}

//       {/* <Toaster /> */}
//       {/* </body> */}

//       <body
//         className={cn(" ", inter.className, {
//           "debug-screens": process.env.NODE_ENV === "development",
//         })}
//       >
//         <Sidebarlayout>
//           <main className=" container  h-full  w-full overflow-auto  py-24 ">
//             {children}
//             {/* w-full max-w-7xl mx-auto  h-[calc(100%-64px)] flex  */}
//           </main>
//         </Sidebarlayout>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebarlayout from "@/components/sidebarlayout";
import { cn } from "@/lib/utils";
// import Navbar from "@/components/navbar";
// import { ThemeProvider } from "@/components/theme-provider";

// import { Toaster } from "@/components/ui/toaster";
// import { NavigationMenuUi } from "@/components/navbar";
// import Navbar1 from "@/components/navbar1";
// import { Footer } from "@/components/footer";
// import Sidebarlayout from "@/module/layout/sidebar";
// import { NavigationMenuUi } from "@/components/navbar";

// const roboto = Roboto({
//   subsets : ['latin'],
//   weight :["400" , '700']
// })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // weight :["400" , '700']
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "CheckIn",
  description: "Generated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${inter.variable} font-sans`}> */}
      {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}

      {/* <Sidebarlayout>{children}</Sidebarlayout> */}
      {/* </ThemeProvider>
        <Toaster /> */}

      {/* <Toaster /> */}
      {/* </body> */}

      <body className={cn("", inter.className)}>
        <Sidebarlayout>
          <main className=" container  w-full  h-screen  ">{children}</main>
        </Sidebarlayout>
      </body>
    </html>
  );
}
