import { Topbar } from "@/components/layout/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-muted/10">
      <Topbar />
      <div className="flex flex-1">
        <main className="flex-1 p-6 md:p-10 max-w-screen-2xl mx-auto w-full relative">
          {/* subtle ambient background effect */}
          <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20 -z-10" />
          {children}
        </main>
      </div>
    </div>
  );
}
