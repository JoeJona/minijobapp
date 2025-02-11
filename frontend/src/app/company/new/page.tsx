"use client"

import { useState } from "react";
import axios from "axios";
import Header from "@/app/components/header";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/base_url";



const ComoanyNewJobPage = () => {
    
    const router = useRouter();  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const createJob = async (e: any) => {

        e.preventDefault();

        if(title == "" || description == "" || category == "") {
            alert("All Fields are Required");
        } else {
            await axios.post(`${BASE_URL}/jobs`, {
                title,
                description,
                category,
            }).then(res => {
                alert('Job Create Successfull')
                router.push("/company/job");
            })
            .catch(error => console.log(error));
        }        
    }

    return (
      <div className="p-8">
        <Header />
        <div className="">
            <div className="flex gap-10 flex-wrap mt-8 place-content-center ">
                <form className="bg-white p-6 rounded-lg shadow-md w-[60%]" onSubmit={createJob}>
                    <label className="block mb-2">Job Title</label>
                    <input type="text" placeholder="Enter Job Title" 
                        onChange={e => setTitle(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <label className="block mb-2">Job Description</label>
                    <input type="text" placeholder="Enter Job Title" 
                        onChange={e => setDescription(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <label className="block mb-2">Job Category</label>
                    <input type="text" placeholder="Enter Job Category" 
                        onChange={e => setCategory(e.target.value)}
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
  
  export default ComoanyNewJobPage;
  