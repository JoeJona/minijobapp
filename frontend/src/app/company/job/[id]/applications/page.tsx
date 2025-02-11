"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/base_url";


const CompanyJobPage = () => {

  
    const [applications, setApplications] = useState([]);
    const paramQuery = useParams();
    const {id} = paramQuery;  

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async () => {
    await axios.get(`${BASE_URL}/applications`)
          .then((response) => {
            const allApplicants: [] = response.data.data;
            const jobApplicants = allApplicants.filter((application: any) => application.jobid == id)
            setApplications(jobApplicants);
          })
          .catch(error => console.log(error));
    }

  

    return (
      <div className="p-8">
        <Header />
        <div className="mt-8">
        {applications.length == 0 ? (
            <div className="text-center mt-60">
                <p className="text-lg font-bold">No Applicants Yet</p>
            </div>
        ) : (
            <div className="flex gap-4 flex-wrap w-full place-content-center">
            {applications.map((application: any, index: any) => (
                <section key={index} className="p-2 bg-white shadow-md w-[60%]">
                    <h2 className="font-bold mb-2 bg-white text-center p-1">
                    Applicant Information
                    </h2>
                    <p className="text-lg text-tertiary">Title - {application.name}</p>
                    <p className="text-lg text-tertiary">Email - {application.email}</p>
                    <p className="text-lg text-tertiary">Resume - {application.resume}</p>
                    <p className="text-lg text-tertiary">Cover Letter - {application.cover_letter}</p>
                </section>
            ))}
            </div> 
        )}
        </div>
      </div>
    );
  };
  
  export default CompanyJobPage;
  