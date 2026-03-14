const SectionTitle = ({ title, subtitle, align, font }) => {
  const alignmentClass =
    align === "left" ? "section-title-left" : "section-title-center";

  return (
    <div className={`section-title ${alignmentClass}`}>
      <h1 className={`section-title-heading ${font || "font-playfair"}`}>
        {title}
      </h1>
      <p className="section-title-subtitle">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;