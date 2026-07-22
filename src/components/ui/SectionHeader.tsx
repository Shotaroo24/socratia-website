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
        <span className="inline-block text-label uppercase mb-4" style={{ color: 'var(--color-main-accessible)' }}>
          {label}
        </span>
      )}
      <h2 className="font-heading text-display-section text-ink font-bold">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-subtext text-body-lg ${
            center ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
