"use client";

export default function Home() {

  return (
    <main>
      <div className="flex flex-col justify-center text-center my-12 w-11/12 lg:w-2/3 mx-auto">
        <div className='border border-indigo-500 rounded-lg m-4 p-4 md:p-8 lg:p-20 shadow-lg'>
          <span className="text-xl font-bold">The task assignment</span>
          <div className='flex flex-col justify-start'>
            <span className="text-lg font-semibold mt-5 mb-2 text-left">Introduction</span>
            <div className="text-lg text-left">
              You are given a simple REST API and asked to create a web application. The
              API is a simple REST API with two entities - user and animal. You need to
              create a web application to interact with these entities.
            </div>
            <span className="text-lg font-semibold mt-5 mb-2 text-left">Task</span>
            <div className="text-lg text-left">
              Create a web application using React and TypeScript. If you prefer to use
              Next.js, that’s fine too. You must communicate with a REST API to fetch and
              update data. For this application, we prefer client-side fetching over server-side.
            </div>
            <span className="text-lg font-semibold mt-5 mb-2 text-left">Seed</span>
            <div className="text-lg text-left">
              This endpoint is used to seed the database with some initial data. First it
              removes all the data from the database and then it inserts 20 people and 20
              animals.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
