import pool from "../config/database";

// Create job
export const createJob = async (req, res) => {
  try {
    const {title, description, category,} = req.body;
    const job = await pool.query('Insert Into jobtb (title, description, category) Values ($1, $2, $3) Returning *', [title, description, category]);
        res.status(201).send({message: "Job Created", data: job.rows});
      } catch (error) {
        res.status(500).send(error);
      }
  };

  // Get All Jobs
  export const getJobs = async (req, res) => {
      try {
        const jobs = await pool.query('Select * From jobtb  Order By id Desc');
        res.status(200).send({message: "All Jobs List", data: jobs.rows});
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    };

  // Get job Info
  export const getJob = async (req, res) => {
    try {
        const id = req.params.id;
        const job = await pool.query('Select * From jobtb Where id = $1', [id]);
        if(job.rowCount != 0) {
            res.status(200).send({message: "Job Detail Info", data: job.rows});
        } else {
            res.status(404).send({message: "Job not Found"});
        }
      } catch (error) {
        res.status(500).send(error);
      }
  };
