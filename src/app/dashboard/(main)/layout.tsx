import Nav from "@/components/Nav";

export default function DashboardMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">{children}</main>
    </>
  );
}
