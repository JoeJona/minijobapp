"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import { useParams, useRouter } from "next/navigation";
import { BASE_URL } from "@/base_url";


const JobApplyPage = () => {

  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const paramQuery = useParams();
  const {jobId} = paramQuery;  

  useEffect(() => {
      getJob();
    }, []);

  const getJob = async () => {
    await axios.get(`${BASE_URL}/jobs/${jobId}`)
          .then((response) => {
            setJobs(response.data.data);
          })
          .catch(error => console.log(error));
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");
    const [coverLetter, setCoverLetter] = useState("");

    const applyJob = async (e: any) => {

        e.preventDefault();

        if(name == "" || email == "" || resume == "" || coverLetter == "") {
            alert("All Fields are Required");
        } else {
            await axios.post(`${BASE_URL}/applications`, {
                name,
                email,
                resume,
                coverLetter,
                jobId
            }).then(res => {
                alert("Applied Successfully");
                router.push("/candidate/job");
            })
            .catch(error => console.log(error));
        }        
    }
  
    return (
      <div className="p-8">
              <Header />
              <div className="mt-8">
                  <div className="flex gap-4 flex-wrap w-full place-content-center">
                  {jobs.map((job: any, index: any) => (
                      <section key={index} className="p-2 bg-gray-200 shadow-md w-[60%]">
                          <h2 className="font-bold mb-2 bg-white text-center p-1">
                          Job Details
                          </h2>
                          <p className="text-lg text-tertiary">Title - {job.title}</p>
                          <p className="text-lg text-tertiary">Description - {job.description}</p>
                          <p className="text-lg text-tertiary">Category - {job.category}</p>
                      </section>
                  ))}
                  </div>
                  <div className="flex gap-10 flex-wrap mt-8 place-content-center">
                    <form className="bg-white p-6 rounded-lg shadow-md w-[60%]" onSubmit={applyJob}>
                        <label className="block mb-2">Full Name</label>
                        <input type="text" placeholder="Enter Full Name" 
                            onChange={e => setName(e.target.value)}
                            className="w-full p-2 border rounded mb-4"
                        />
                        <label className="block mb-2">Email</label>
                        <input type="text" placeholder="Enter Email" 
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-2 border rounded mb-4"
                        />
                        <label className="block mb-2">Job Resume Link</label>
                        <input type="text" placeholder="Enter Job Resume Link" 
                            onChange={e => setResume(e.target.value)}
                            className="w-full p-2 border rounded mb-4"
                        />
                        <label className="block mb-2">Job Category</label>
                        <input type="text" placeholder="Enter Job Cover Letter" 
                            onChange={e => setCoverLetter(e.target.value)}
                            className="w-full p-2 border rounded mb-4"
                        />
                        <button
                            className="bg-white text-black border border-black p-1 rounded float-right w-24"
                        >
                            Submit
                        </button>
                    </form>  
                </div>   
              </div>
            </div>
    );
  };
  
  export default JobApplyPage;
  