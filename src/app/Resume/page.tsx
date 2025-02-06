import { languages, tools } from "../../../data"
import Bar from "../Components/Bar"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

const page = () => {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col">
      <Navbar />
      <div>
      <div className='px-6 py-2'>
         {/* //! Education & Experience */}
         <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Computer Science Engineering
                  </h5>
                  <p className='font-semibold'>
                     Academy of Technology (2017-2021)
                  </p>
                  <p className='my-3'>
                     I am currently pursuing B.tech in Computer Science
                     Engineering from Academy of Technology
                  </p>
               </div>
            </div>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Software Developer Jr.
                  </h5>
                  <p className='font-semibold'>Sigma Security Services</p>
                  <p className='my-3'>Love this Job , Good opportunity to earn early</p>
               </div>
            </div>
         </div>

         {/*Languages & Tools */}
         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page
