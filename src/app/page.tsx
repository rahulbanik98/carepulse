import Image from "next/image";
import fullLogo from "../../public/assets/icons/logo-full.svg";
import onBoardingImg from "../../public/assets/images/onboarding-img.png";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen max-h-screen">
        {/* todo: otp verification */}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image
              src={fullLogo}
              alt=""
              width={1000}
              height={1000}
              className="mb-10 h-10 w-fit"
            />
            <PatientForm />
            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 Rahul Banik
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
        <Image
          src={onBoardingImg}
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[50%]"
        />
      </div>
    </>
  );
}
