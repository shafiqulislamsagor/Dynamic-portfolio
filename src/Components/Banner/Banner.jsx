import mizan from "../../assets/mizan.jpg";
import fiver from "../../assets/fiver.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import upwork from "../../assets/upwork.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
const Banner = () => {

  return (
    <div className="flex flex-col-reverse md:flex-row items-center my-16">
      <div className="w-full md:w-1/2 space-y-1">
        <h1 className="text-2xl font-medium text-green-500">
          Hi , I am <br />{" "}
          <span className="text-5xl font-bold text-gray-600">
            Mizanur Rahman
          </span>
        </h1>
        <h3 className="text-xl text-gray-700 font-medium">
          I am a Digital Marketer
        </h3>
        <h4 className="text-base text-gray-500 font-medium">
          A Creative Designer From{" "}
          <span className="font-semibold text-green-500">Bangladesh</span>
        </h4>
        <p className="text-base text-gray-500 font-light">
          I’m creative designer based in United States, and I’m very passionate
          and dedicated to my work
        </p>
      </div>
      <div className="flex-1">
        <div className="relative">
          <div className="h-72 w-72 md:h-80 md:w-80 mx-auto rounded-full border-green-400 border-2">
            <img className="h-full w-full rounded-full" src={mizan} alt="" />
            <div className="absolute top-0">
              <div className=" relative h-72 w-72 md:h-80 md:w-80 mx-auto rounded-full hover:">
                <div className="absolute -top-2">
                  <img className="w-16" src={fiver} alt="" />
                </div>
                <div className="absolute -right-5">
                  <img className="w-16" src={linkedin} alt="" />
                </div>
                <div className="absolute top-[40%] -left-16">
                  <img className="w-16" src={facebook} alt="" />
                </div>
                <div className="absolute top-[45%] -right-[70px]">
                  <img className="w-16" src={youtube} alt="" />
                </div>
                <div className="absolute bottom-0 right-0">
                  <img className="w-16" src={upwork} alt="" />
                </div>
                <div className="absolute -bottom-6">
                  <img className="w-16" src={whatsapp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
