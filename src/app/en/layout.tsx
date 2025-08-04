import NavigationEN from '@/components/NavigationEN';

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen pb-20">
        {children}
      </div>
      <NavigationEN />
    </>
  );
} 