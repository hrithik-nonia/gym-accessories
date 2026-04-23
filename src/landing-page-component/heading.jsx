import { Link } from "react-scroll";
const Heading = () => {
  return (
    <>
      <div className=" bg-[#a9977b]">
        <p className="text-center text-[#141414] font-thin py-2 text-sm">
          <Link
            to="formSection" // 👈 yaha change
            smooth={true}
            duration={2500}
            className="mr-1 underline decoration-1 cursor-pointer"
          >
            Subscribe
          </Link>
          to Our Newsletter and Get 10% Off Your Next Purchase
        </p>
      </div>
    </>
  );
};
export default Heading;
