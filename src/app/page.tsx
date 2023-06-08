"use client";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import fetchActivity, { ActivityResponse } from "./api/utils";

export default function Home() {
  const [activity, setActivity] = useState<ActivityResponse>({
    activity: "",
    participants: 0,
    type: ""
  });

  const [loading, setLoading] = useState<boolean>(true);

  const fetch = () => {
    setLoading(true);

    fetchActivity()
      .then((res) => {
        setActivity(res);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between md:justify-evenly md:p-24 p-14'>
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className='md:text-5xl text-2xl font-black '>BOREDOM APP</h1>
        <p className='text-red-600 text-xs text-center'>
          Don&lsquo;t know what to do? you came at the right place !
        </p>
      </div>

      <div className='flex flex-col items-center justify-center gap-4'>
        {loading ? (
          <h1 className='animate-pulse text-4xl font-black text-center'>
            Thinking ..
          </h1>
        ) : (
          <>
            <h1 className='text-4xl font-black text-center'>
              {activity.activity}
            </h1>
            <h3 className='uppercase'>{activity.type}</h3>
            <h2>You should invite {activity.participants} more person.</h2>
          </>
        )}
      </div>

      <div className='relative flex'>
        <Button loading={loading} onClick={fetch}>
          Doesn&lsquo;t suit you? Click here..
        </Button>
      </div>

      <h1 className='font-black'>Made by Edwin Fernaldy &copy;2023</h1>
    </main>
  );
}
