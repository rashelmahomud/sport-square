import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image
              className="bg-white rounded"
              width={90}
              height={0}
              alt="logo"
              src={"/logo.png"}
            />
          </Link>
          <p className="text-gray-400 mb-4">
            We craft scalable and robust web solutions tailored for your needs.
          </p>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-500">
            Contact Us
          </Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect with Us
          </h3>
          <p className="text-gray-400">Email: rashelmahmudraj1998@gmail.com</p>
          <p className="text-gray-400 mb-4">Phone: +8801835199061</p>
          <div className="w-20 grid grid-cols-3 gap-3">
           <a href="#" > <FontAwesomeIcon icon={faTwitter} /> </a>
           <Link href={'/'}> <FontAwesomeIcon icon={faGithub} /></Link>
           <Link href={'/'}> <FontAwesomeIcon icon={faLinkedinIn} /></Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        © 2024 RashelMahomud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
