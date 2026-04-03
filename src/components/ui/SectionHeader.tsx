type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-main text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          {label}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-subtext text-lg leading-relaxed ${
            center ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
