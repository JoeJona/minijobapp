import pool from "../config/database";

// Apply for Job
  export const applyJob = async (req, res) => {
    try {
        const {name, email, resume, coverLetter, jobId } = req.body;
        const application = await pool.query('Insert Into applicationtb (name, email, resume, cover_letter, jobId) Values ($1, $2, $3, $4, $5) Returning *', 
          [name, email, resume, coverLetter, jobId]);
        res.status(201).send({message: "Job Applied", data: application.rows});
      } catch (error) {
        res.status(500).send(error);
      }
  };

  // Get All Applications
  export const getApplications = async (req, res) => {
    try {
      const applications = await pool.query('Select * From applicationtb Order By id Desc');
      res.status(200).send({message: "All Application List", data: applications.rows});
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
