"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/base_url";


const ComoanyJobPage = () => {

  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getBrandsCampaigns();
  }, []);

  const getBrandsCampaigns = async () => {
    await axios.get(`${BASE_URL}/jobs`)
          .then((response) => {
            setJobs(response.data.data);
          })
          .catch(error => console.log(error));
  }

    return (
      <div className="p-8">
        <Header />
        <div className="mt-8">
        <div className="place-self-end">
        <a href="/company/new" className="text-[#f5f5f5] bg-[#00ADEF] p-2 mb-4 rounded-md">Add New Job</a>
        </div>
        <h2 className="font-bold mb-2 bg-white text-center p-1">
          Job Listings
        </h2>
        {jobs.length == 0 ? (
            <div className="text-center mt-60">
                <p className="text-lg font-bold">No job posts yet</p>
            </div>
        ) : (
            <div className="flex flex-col gap-4 w-[65%] h-[75vh] place-self-center shadow-lg p-2 overflow-y-auto">
            {jobs.map((job: any, index: any) => (
                <section key={index} className="p-2 bg-white shadow-lg w-[98%]">
                    <p className="text-lg text-tertiary">Title - {job.title}</p>
                    <p className="text-lg text-tertiary">Description - {job.description}</p>
                    <p className="text-lg text-tertiary">Category - {job.category}</p>
                    <button className="bg-white text-black border border-black p-1 rounded float-right" 
                      onClick={() => router.push(`/company/job/${job.id}/applications`)}>
                      View Applicants
                    </button>
                </section>
            ))}
            </div> 
        )}
        </div>
      </div>
    );
  };
  
  export default ComoanyJobPage;
  