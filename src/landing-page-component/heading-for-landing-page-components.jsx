const HeadingForLandPageComp = ({ title, subtitle, isDark = false }) => {
  return (
    <>
      <h1
        className={` text-[30px] sm:text-[44px]  font-bold text-center pt-16  font-serif ${
          isDark ? "text-[#fffcfc]" : "text-[#141414]"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-center font-light mt-3 ${isDark ? "text-[#fffcfc]" : "text-[#141414]"}`}
      >
        {subtitle}
      </p>
    </>
  );
};
export default HeadingForLandPageComp;
