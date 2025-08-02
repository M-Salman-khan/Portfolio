import React from 'react'


const Contact:React.FC = () => {
  return (
    <div id="contact" className="pb-[90px] flex flex-col items-center w-full mx-auto gap-2  pt-[70px]">
        <div className="w-[140px] text-white font-extrabold p-2 text-4xl">Contact</div>
        <div className="text-center w-[70%]">Let's bring your ideas to life! I'm always available for collaborations, discussions,
            or even a quick hello — just drop a message.</div>
        <div className="flex p-10 items-center w-4/5 gap-2 max-md:flex-col-reverse max-md:w-[90%] max-md:gap-10 max-md:p-2 max-md:mt-12">
            <aside className="w-1/2 max-md:w-full">
                <div className="flex items-center p-4">
                    <div className="icon mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                            fill="#fff">
                            <path
                                d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
                        </svg>
                    </div>
                    <div className="pl-2">
                        <div className="text-[#0091ff] text-lg font-semibold">Address</div>
                        <p className="m-0 mt-1">M Salman Khan  <br/>123 Main Street, Sector 45, Saharanpur, Uttar Pardesh - 247001, India</p>
                    </div>
                </div>
                <div className="flex items-center p-4">
                    <div className="icon mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                            fill="#fff">
                            <path
                                d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" />
                        </svg>
                    </div>
                    <div className="pl-2">
                        <div className="text-[#0091ff] text-lg font-semibold">Phone</div>
                        <p className="m-0 mt-1">+91 561-456-2321</p>
                    </div>
                </div>
                <div className="flex items-center p-4">
                    <div className="icon mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                            fill="#fff">
                            <path
                                d="M440-535.33 106.67-746.67v440h466.66V-240H108.67Q81-240 60.5-260.17 40-280.33 40-306.67v-506.66q0-26.34 19.83-46.5Q79.67-880 106.67-880h666.66q26.34 0 46.5 20.17Q840-839.67 840-813.33v226.66h-66.67v-160L440-535.33Zm0-69.34 333.33-208.66H106.67L440-604.67ZM781.33-80Q722-80 681-122.33 640-164.67 640-224v-209.33q0-36 25.33-61.34 25.34-25.33 62-25.33 36 0 61 25.33 25 25.34 25 61.34V-220h-66.66v-215.33q0-10-5-17.67-5-7.67-14.34-7.67-9.33 0-15 7.67-5.66 7.67-5.66 17.67v212.66q0 33 21.16 57.5 21.17 24.5 53.5 24.5 31 0 51.5-23.5t20.5-55.83v-184.67H920V-220q0 58-40.33 99-40.34 41-98.34 41ZM106.67-746.67v-66.66V-306.67v-440Z" />
                        </svg>
                    </div>
                    <div className="pl-2">
                        <div className="text-[#0091ff] text-lg font-semibold">Email</div>
                        <p className="m-0 mt-1">thesalmankhan2021@gmail.com</p>
                    </div>
                </div>
            </aside>
            <section className="w-1/2 max-md:w-full">
                <div className="flex flex-col justify-around p-5 border-2 border-[#0091ff] rounded-lg gap-5 w-full">
                    <h1 className="my-2">Send Message</h1>
                    <input type="text" placeholder="Full name..." className="w-[98%] py-4 border-b-2 border-white bg-transparent focus:outline-none focus:border-[#0091ff]"/>
                    <input type="text" placeholder="Email..." className="w-[98%] py-4 border-b-2 border-white bg-transparent focus:outline-none focus:border-[#0091ff]"/>
                    <textarea name="" placeholder="Type your message..." id="" rows={3} className="w-[98%] py-4 border-b-2 border-white bg-transparent focus:outline-none focus:border-[#0091ff]" />
                    <button className="px-[18px] py-2 text-[15px] border-2 border-white bg-transparent rounded hover:text-[#0091ff] hover:border-[#0091ff] cursor-pointer transition-colors">Send</button>
                </div>
            </section>
        </div>

    </div>
  )
}

export default Contact