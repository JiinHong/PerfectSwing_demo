import Navigation from '@/components/Navigation';

export default function KoreanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen pb-20">
        {children}
      </div>
      <Navigation />
    </>
  );
} 