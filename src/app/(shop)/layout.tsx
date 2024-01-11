import { Footer, TopMenu } from "@/components";
import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-2 sm:px-7">{children}</div>
      <Footer />
    </main>
  );
}
