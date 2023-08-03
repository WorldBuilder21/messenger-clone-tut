export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
