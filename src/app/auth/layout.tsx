import localFont from "next/font/local";

// Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: "../../staticfont/Mona-Sans.woff2",
//   display: "swap",
// });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <aside>{children}</aside>;
}
