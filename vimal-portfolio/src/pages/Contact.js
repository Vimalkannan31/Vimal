import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import email from "../assets/email.gif";
import linkedin from "../assets/linkedin.gif";
import github from "../assets/github.gif";
import CustomInput from "../components/CustomInput.jsx";
import axios from "axios";
import ThankYouPopup from "../popup/thankyou.js";

const Contact = () => {

  const [open,setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {

    axios
    .post("https://vimal12.onrender.com/info/", data)
    .then((response) => {
      if(response.success){
        setOpen(true);
      }
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="my-10" id="contact">
      <div className="text-center mb-16">
        <span className="sectionhead text-4xl">Let’s Connect!</span>
        <div className="border-t-4 border-indigo-700 my-4 w-16 mx-auto"></div>
        <p className="paragraph text-center text-base md:text-lg">
          Got an idea or opportunities? Let’s connect and make it happen!
        </p>
      </div>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Side: Heading and Description */}
        <Grid item xs={11} sm={5} md={5}>
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Connect With Me
          </h2>
          <div className="border-t-4 border-indigo-700 my-3 w-24 mx-auto md:mx-0"></div>
          <p className="text-base md:text-lg text-center md:text-left">
            I'm always open to new connections and opportunities. If you have a
            question or an idea to share, just say{" "}
            <span className="text-indigo-500 text-md font-medium">Hi</span> and
            I'll get back to you soon. Please feel free to use my contact form
            to reach out. I look forward to connecting with you!
          </p>
          <div className="mt-8">
            {/* Email Link */}
            <div className="flex flex-col items-center my-5 space-y-3 sm:flex-row sm:space-x-7 sm:space-y-0">
              <img src={email} alt="email" className="rounded-lg w-8 h-8" />
              <a href="mailto:thevimalkannan@gmail.com" className="mt-1">
                <p className="hover:text-pink-500 transition-colors">
                  thevimalkannan@gmail.com
                </p>
              </a>
            </div>

            {/* LinkedIn Link */}
            <div className="flex flex-col items-center my-5 space-y-3 sm:flex-row sm:space-x-7 sm:space-y-0">
              <img src={linkedin} alt="linkedin" className="w-10" />
              <a
                href="https://www.linkedin.com/in/vimalkannan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="mt-1 hover:text-pink-500 transition-colors">
                  Vimal Kannan
                </p>
              </a>
            </div>

            {/* GitHub Link */}
            <div className="flex flex-col items-center my-5 space-y-3 sm:flex-row sm:space-x-7 sm:space-y-0">
              <img src={github} alt="Github" className="w-10" />
              <a
                href="https://github.com/Vimalkannan31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="mt-1 hover:text-pink-500 transition-colors">
                  Vimalkannan31
                </p>
              </a>
            </div>
          </div>
        </Grid>

        {/* Right Side: Contact Form */}
        <Grid item xs={12} sm={5} md={5}>
          <div className="rounded-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-md mx-auto p-4"
            >
              <CustomInput
                name="name"
                required
                placeholder="Enter Your Name"
                register={register}
                errors={errors}
              />
              <CustomInput
                name="email"
                required
                placeholder="Enter Your Email"
                type="email"
                register={register}
                errors={errors}
              />
              <CustomInput
                name="subject"
                required
                placeholder="Enter Subject"
                register={register}
                errors={errors}
              />
              <CustomInput
                name="description"
                placeholder="What's on Your Mind?"
                multiline
                rows="5"
                register={register}
                errors={errors}
              />
              <div className="flex justify-center md:justify-start mt-4">
                <button className="group relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                  <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none dark:bg-black dark:text-white text-white">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
      <ThankYouPopup open={open} setOpen={setOpen} />
    </div>
    
  );
};

export default Contact;
