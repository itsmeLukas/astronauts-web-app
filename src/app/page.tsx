"use client";

export default function Home() {

  return (
    <main>
      <div className="flex flex-col justify-center text-center my-12 w-11/12 lg:w-2/3 mx-auto">
        <div className='border border-indigo-500 rounded-lg m-4 p-4 md:p-8 lg:p-20 shadow-lg'>
          <span className="text-xl font-bold">Information about the project</span>
          <div className='flex flex-col justify-start'>
            <span className="text-lg font-semibold mt-5 mb-2 text-left">App's Backend</span>
            <div className="text-lg text-left">
              ASP.NET Core Web API (.NET 8) with Entity Framework Core hosted on Azure with Azure SQL Database.
            </div>
            <span className="text-lg font-semibold mt-5 mb-2 text-left">App's Frontend</span>
            <div className="text-lg text-left">
              Next.js 14 with TailwindCSS hosted on Vercel.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
