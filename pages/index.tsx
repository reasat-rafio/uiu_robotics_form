import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Form } from "../components/form";

const Home: NextPage = () => {
  const singInWithGoogleAction = (): void => {
    // GOOGLE LOGIN ACTION
  };

  const singInWithFacebookAction = (): void => {
    // FACEBOOK LOGIN ACTION
  };

  return (
    <section className="w-full bg-blue-500 min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        className="container w-full bg-gray-50 rounded-lg grid grid-cols-12 "
      >
        <div className="lg:col-span-6 col-span-12 col-s xl:col-span-5 lg:px-14 px-4  py-5 ">
          <Link href="/">
            <a className="cursor-pointer flex w-full">
              <img className="w-28 mx-auto" src="/logo_club.png" alt="logo" />
            </a>
          </Link>
          <h2 className="text-center text-smTitle md:text-3xl font-bold font-title py-5">
            Sign Up
          </h2>

          {/* SOCIAL LOGIN BLOCK */}
          <div
            className="flex flex-col gap-3 my-4"
            onClick={singInWithGoogleAction}
          >
            <button className="social_button">
              <img className="w-10" src="/google.png" alt="google logo" />
              <span> Sign In With Google</span>
            </button>

            <button
              className="social_button"
              onClick={singInWithFacebookAction}
            >
              <img className="w-10" src="/facebook.svg" alt="facebook logo" />
              <span className="">Sign In with Facebook</span>
            </button>
          </div>
          <div className="divide-solid flex justify-center items-center gap-2 my-6">
            <span className="bg-gray-200 flex-1  h-0.5" />
            <span className="flex-3 text-gray-500 text-sm">
              Or Sign in With your e-mail
            </span>
            <span className="bg-gray-200 flex-1  h-0.5" />
          </div>

          {/* FORM COMPONENT */}
          <Form />

          {/* AGREE CHECKBOX */}
          <div className="flex items-center justify-center py-5">
            <input type="checkbox" className="rounded" />
            <label className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <Link href="/terms-and-conditions">
                <a className="text-indigo-600 hover:text-indigo-500 ">Terms</a>
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy">
                <a className="text-indigo-600 hover:text-indigo-500 ">
                  Privecy policy
                </a>
              </Link>
            </label>
          </div>
        </div>

        {/* SVG */}
        <div className="lg:col-span-6 xl:col-span-7 justify-center items-center hidden  lg:flex rounded">
          <img src="/people.svg" alt="Image" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
