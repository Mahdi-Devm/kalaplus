import Footer from "@/core/components/custom/blook/footer/Footer";
import Header from "@/core/components/custom/blook/header/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
