import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import about from "../../public/about.png"
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to HealthCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
       {/*=========FAQ SECTION=========== */}
       <section>
        <div className="qasim">
          <div className="flex justify-between gap-[5opx] lg:gap-0">
            <div className="w-1/2 hidden md:block">
            <img src={about} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently asked question</h2>
              {/*=========RENDRING FaqList from COMPONENT/FAQ  FOLDER=========== */}
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*=========FAQ SECTION END=========== */}
      <MessageForm />
    </>
  );
};

export default Home;
