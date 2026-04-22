const PolicyPage = ({ sections, title }) => {
  return (
    <>
      <div className="md:w-[40%] w-full px-3 mx-auto mb-20">
        <h1 className="text-[55px] font-serif font-bold text-[#141414] pt-45">
          {title}
        </h1>
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-[#141414] font-bold text-[30px] pt-20">
              {section.heading}
            </h2>
            {section.paragraphs.map((para, i) => (
              <p
                key={i}
                className="font-light text-[15px] text-[#141414] pt-10"
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default PolicyPage;
