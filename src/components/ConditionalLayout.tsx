"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLessonsPage = pathname.startsWith("/dashboard/lessons");
  const isDashboard = pathname.startsWith("/dashboard");

  if (isLessonsPage) {
    return <>{children}</>;
  }

  if (isDashboard) {
    return (
      <>
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}
