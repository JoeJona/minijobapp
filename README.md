##Steps to follow for Backend
1. Clone the repository
2. Run npm install - to install all dependencies
3. Change the Database Config with your's data -> config/database.js or
4. Create .env file and create a varable 'DATABASE_URL' assign with postgress connection string
5. Create all the necessary Database/Tables - jobtb, applicationtb

# N.B - here query sample
CREATE TABLE IF NOT EXISTS jobtb
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    category text COLLATE pg_catalog."default"
)

CREATE TABLE IF NOT EXISTS applicationtb
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    resume text COLLATE pg_catalog."default",
    cover_letter text COLLATE pg_catalog."default",
    jobId integer NOT NULL
)

## Steps to follow for Frontend
1. Clone the repository
2. Run npm install - to install all dependencies
3. Run npm run dev
4. app runs at http://localhost:3000/
