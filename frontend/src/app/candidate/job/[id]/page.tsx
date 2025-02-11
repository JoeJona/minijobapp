"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import { useParams, useRouter } from "next/navigation";
import { BASE_URL } from "@/base_url";


const JobDetailPage = () => {

  const [jobs, setJobs] = useState([]);
  const router = useRouter()
  const paramQuery = useParams();
  const {id} = paramQuery;

  useEffect(() => {
      getJob();
    }, []);

  const getJob = async () => {
    await axios.get(`${BASE_URL}/jobs/${id}`)
          .then((response) => {
            setJobs(response.data.data);
          })
          .catch(error => console.log(error));
    }
  
    return (
      <div className="p-8">
              <Header />
              <div className="mt-8">
                  <div className="flex gap-4 flex-wrap w-full place-content-center">
                  {jobs.map((job: any, index: any) => (
                      <section key={index} className="p-2 bg-white shadow-lg w-[50%]">
                          <h2 className="font-bold mb-2 bg-white text-center p-1">
                          Job Details
                          </h2>
                          <p className="text-lg text-tertiary">Title - {job.title}</p>
                          <p className="text-lg text-tertiary">Description - {job.description}</p>
                          <p className="text-lg text-tertiary">Category - {job.category}</p>
                          <button className="bg-white text-black border border-black p-1 rounded float-right w-24" 
                          onClick={() => router.push(`/candidate/apply/${job.id}`)}>Apply</button>
                      </section>
                  ))}
                  </div>
              </div>
            </div>
    );
  };
  
  export default JobDetailPage;
  