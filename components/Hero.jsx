export default function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded md:scale-75" alt="hero" src="./images/daniel2.jpg" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Daniel Lancheros
        <br className="hidden lg:inline-block" /> Software Engineer
      </h1>
      <p className="mb-8 leading-relaxed">Top-notch software engineer with a mindset geared towards creative solutions. Daniel has transitioned from a successful salesperson and logistics analyst to pursue his passion for technology with a new challenge. He is embarking on a journey into the intricate world of technical coding.</p>
      <div className="flex justify-center">
        <a href="https://github.com/DanielLancheros" target="underscore_blank"> <img className=" max-w-[80px] bg-yellow-300 rounded-[35%] py-3 " src="./images/github-transparent.png"></img></a>
        <a href="https://linkedin.com/in/daniel-lancheros" target="underscore_blank"> <img className=" max-w-[80px] bg-yellow-300 rounded-[35%] m-2 py-3" src="./images/linkedin-logo-transparent.png"></img></a>
        <a href="https://linkedin.com/in/daniel-lancheros" target="underscore_blank"> <img className=" max-w-[80px] bg-yellow-300 rounded-[35%]" src="./images/resume-logo.png"></img></a>
      </div>
    </div>
  </div>
</section>
  )
}