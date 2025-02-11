import Header from "./components/header";

export default function Home() {
  return (
    <div className="p-8 overflow-hidden">
        <Header />
        <div className="mt-60">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-black bg-clip-text">
              Find your dream Job or Employee here
            </h2>
            <div className="mt-4">
            <p className="text-lg text-tertiary">
              Candiates 
              <a href="/candidate/job" className="text-[#00ADEF] hover:underline">
              <span className="font-semibold"> Find Jobs</span>
              </a>
            </p>
            <p className="text-lg text-tertiary">
              Companies 
              <a href="/company/job" className="text-[#00ADEF] hover:underline">
              <span className="font-semibold"> List Jobs</span>
              </a>
            </p>
            </div>
          </section>
        </div>
      </div>
  );
}
