'use client'
export default function About() {

    return (
        <section className="bg-gray-50 dark:bg-transparent flex-grow h-screen-3/4">
        <div className="flex flex-col items-center container justify-center mt-200 mx-auto  overflow-y-auto">
            <div className="p-4 w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div
                    className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img className=" rounded-xl object-cover" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="about Us image" />
                    </div>
                    <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://media.istockphoto.com/id/1461537129/photo/close-up-woman-hand-writing-on-notebook.jpg?s=612x612&w=0&k=20&c=1UPcoOpmYSCzeHAyOB92X4tgSIybR6p7m-yUqIjAlaA="
                        alt="about Us image" />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-gray-900 text-4xl font-bold font-manrope leading-normal dark:text-white lg:text-start text-center">
                                Empowering Each Other to Succeed</h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            Hi, I&apos;m Sarah, the writer behind &quot;The Wanderlust Kitchen.&quot; Ever since I was a child, I&apos;ve been fascinated by the world of flavors.
                             I remember spending hours in the kitchen with my grandmother, learning the secrets of her delicious Italian recipes.
                              This blog is a reflection of my passion for cooking, travel, and the unique culinary experiences that connect us all.
                               Here, you&apos;ll find recipes from around the globe, travel tips for food lovers, and stories from my own culinary adventures. I believe in the power of food to bring people together and create lasting memories. You can find me on Instagram (@sarahseats) and subscribe to my newsletter for exclusive recipes and travel updates.</p>
                        </div>
                        
                    </div>
                    <button
                        className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    )
}