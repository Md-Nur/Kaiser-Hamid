import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full my-10 p-5">
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <div className="avatar w-3/4">
          <div className="rounded-full">
            <img src="/Kaiser_2.jpg" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Kaiser Hamid</h1>
          <h2 className="text-xl font-bold">Incoming PhD student</h2>
          <a
            href="https://www.ttu.edu/"
            target="_blank"
            className="link link-secondary text-lg"
          >
            Texas Tech University
          </a>
        </div>
        <div className="flex gap-5 justify-center w-full">
          <a
            href="https://www.linkedin.com/in/kaiser-hamid/"
            target="_blank"
            className="link link-secondary text-lg"
          >
            <IoMdMail className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/KaiserHamid"
            target="_blank"
            className="link link-secondary text-lg"
          >
            <FaGooglePlus className="w-10 h-10" />
          </a>
          <a
            href="mailto:<EMAIL>"
            target="_blank"
            className="link link-secondary text-lg"
          >
            <AiFillGoogleCircle className="w-10 h-10" />
          </a>
          <a
            href="mailto:<EMAIL>"
            target="_blank"
            className="link link-secondary text-lg"
          >
            <FaGithub className="w-10 h-10" />
          </a>
          <a
            href="mailto:<EMAIL>"
            target="_blank"
            className="link link-secondary text-lg"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
        </div>
      </div>
      <div className="md:col-span-2 text-lg space-y-2">
        <h2 className="my-3 text-4xl font-bold">About Me</h2>
        <p>
          Shovito Barua Soumma is a Ph.D. student at Arizona State University,
          hailing from Bangladesh. Currently he is working as a Graduate
          Research Associate at Embedded Machine Intelligence Lab (EMIL) led by
          Dr. Hassan Ghasemzadeh.
        </p>
        <p>
          His research primarily focuses on deep learning, mHealth, health
          monitoring system development, human behavior modeling using wearable
          sensors and Human-Computer Interaction. Shovito is driven by a passion
          for developing systems that enhance human interaction and address
          everyday challenges.
        </p>
        <p>
          Prior to his current endeavors, Shovito gained valuable experience as
          a Software Engineer at IQVIA, a Clinical Research Industry based in
          North Carolina. He also contributed as an Adjunct Lecturer at East
          Delta University. He received his Bachelor’s (B.Sc.) in Computer
          Science and Engineering from Bangladesh University of Engineering &
          Technology (BUET) in May 2022.
        </p>
        <p>
          Outside the realm of academia, Shovito is an avid outdoor enthusiast.
          In his leisure time, he enjoys socializing with friends and family,
          and he is always eager to try new culinary delights. Name
          Pronunciation (He/Him/His): Sho-vee-tow (Shovito) Bo-ruu-aa (Barua)
          Showmmo (Soumma). Shovito means embellished in Bangla. Click the audio
          player below to listen to the pronunciation of my name.
        </p>
      </div>
    </section>
  );
}
