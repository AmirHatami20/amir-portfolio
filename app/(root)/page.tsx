import Button from "@/components/ui/Button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/sections/home/Social";
import Photo from "@/components/sections/home/Photo";
import ArrowNav from "@/components/layout/ArrowNav";

const Home = () => {
  return (
    <section className="container h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:pt-6 lg:pb-14 relative">
        {/* Image  */}
        <div className="flex items-center justify-center w-full mb-6 lg:mb-0 lg:order-2">
          <Photo />
        </div>
        {/* Text */}
        <div className="text-center lg:text-left lg:order-1">
          <span className="text-xl">Software Engineer</span>
          <h1 className="hidden lg:block mb-3 lg:mb-6">
            I&apos;m
            <span className="text-accent"> Amirreza Hatami</span>
            <br />
            A Full-Stack Software Engineer
            <br />
          </h1>
          {/* Mobile */}
          <h1 className="lg:hidden mb-3 text-4xl text-accent">
            Amirreza Hatami
          </h1>
          {/* Desktop */}
          <p className="hidden lg:block w-full max-w-[550px] mb-6 lg:mb-9 text-white/80">
            A seasoned Full-Stack Software Engineer with a proven ability to
            build secure and safe sites, as well as robust desktop and mobile
            applications. I specialize in modern web technologies like React and
            Next.js for the frontend, ensuring dynamic and interactive user
            experiences. On the backend, I leverage Node.js and MongoDB to
            create scalable and secure architectures.
          </p>
          {/* Mobile */}
          <p className="block lg:hidden w-full mb-3 lg:mb-5 text-white/80">
            Full-Stack Software Engineer building secure web, desktop, and
            mobile applications. Expertise in React, Next.js, Node.js, and
            MongoDB.
          </p>

          {/* Btn and socials */}
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
            <a href="/amir-hatami.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <FiDownload className="text-xl" />
                <span>Resume</span>
              </Button>
            </a>

            <div className="mb-8 lg:mb-0">
              <Social
                containerStyle="flex items-center justify-center gap-3 lg:gap-5"
                iconStyle="w-9 h-9 border border-accent/80 rounded-full flex justify-center items-center text-accent text-base hover:text-primary hover:bg-accent/90 hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <ArrowNav prevPath="/contact" nextPath="/resume" />
    </section>
  );
};

export default Home;
