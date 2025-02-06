import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { services } from "../../data";
import ServiceCard from "./Components/ServiceCard";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col  overflow-hidden">
        <Navbar />
        <div className="flex flex-col px-6 pt-1">
          <h5 className=" my-3 font-medium">
            Hello! Im Abdullah. I am currently pursuing B.Tech Degree(Final Year) in Computer
            Science Engineering from Academy of Technology. I have 3+ years of
            experience in Web Development and Im still on my learning journey.
          </h5>
        </div>
        <div
          className="p-4 mt-5 bg-gray-400 flex-grow"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h6 className="my-3 px-4 text-xl font-bold tracking-wide"> What I offer</h6>
          <div className="grid lg:grid-cols-2 gap-6 ">
            {services.map((service) => (
              <div className="lg:col-span-1 bg-gray-200 rounded-lg">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
