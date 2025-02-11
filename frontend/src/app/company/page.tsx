"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import { BASE_URL } from "@/base_url";


const CompanyPage = () => {

  
const [jobs, setJobs] = useState([]);

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
      <div className="p-8 overflow-hidden">
        <Header />
        <div className="">
        <div className="flex gap-10 flex-wrap mt-8">
          {jobs.map((job: any, index: any) => (
            <section key={index} className="p-2 bg-gray-200 w-[20%]">
                <h2 className="font-bold mb-2 bg-white text-center p-1">
                Job Details
                </h2>
                <p className="text-lg text-tertiary">Title - {job.title}</p>
                <p className="text-lg text-tertiary">Description - {job.description}</p>
                <p className="text-lg text-tertiary">Category - {job.category}</p>
            </section>
          ))}
          </div> 
        </div>
      </div>
    );
  };
  
  export default CompanyPage;
  