import ClientLayout from "@/core/components/custom/ui/wrapper/ClientLayout";
import ContainerDashboard from "@/core/components/custom/ui/wrapper/ContainerDashboard";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientLayout>
      <ContainerDashboard>{children}</ContainerDashboard>
    </ClientLayout>
  );
}
