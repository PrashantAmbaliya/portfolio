type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mt-3 mb-3 sm:mt-6 sm:mb-6 text-center text-4xl font-semibold uppercase">
      {children}
    </h2>
  );
}
