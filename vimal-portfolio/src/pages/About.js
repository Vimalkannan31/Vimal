import React from 'react';
import myimg from '../assets/myimg.png';
import { Grid, Typography, Box } from '@mui/material';
import './style.css';

const About = () => {
  return (
    <div id='about'>
    <div className="flex items-center justify-center my-20">
  <div className="border-t-4 border-indigo-700 w-[30%]"></div>
  <img
    src={myimg}
    alt="myimage"
    className="w-12 h-12 rounded-full rotate-12 object-cover z-10 mx-4"
  />
  <div className="border-t-4 border-indigo-700 w-[30%]"></div>
</div>

      <div className="text-center my-16">
        <span className="sectionhead text-4xl">Know About me!</span>
        <div className="border-t-4 border-indigo-700 my-4 w-16 mx-auto"></div>
      </div>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={11} md={3} className="flex justify-center">
          <div className="relative w-60 h-60 bg-gradient-to-r from-pink-500 via-pink-600 to-cyan-400 rounded-full shadow-[0px_0px_30px_rgba(209,38,197,0.5)] transition-all duration-300 hover:shadow-[0px_0px_30px_rgba(209,38,197,1)] flex justify-center items-center">
            <div className="absolute w-[97%] h-[97%] bg-[#ffffff] rounded-full"></div>
            <img
              src={myimg}
              alt="myimage"
              className="relative w-52 h-52 rounded-full rotate-12 object-cover z-10"
            />
          </div>
        </Grid>

        <Grid
          item
          xs={11}
          md={5}
          className="p-5 mt-5 flex"
          style={{ justifyContent: 'center' }}
        >
          <div className="paragraph">
            <Typography
              variant="body1"
              className="mb-4"
              sx={{
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              Hi, This is Vimal. I’m a software engineer located in India. I specialize in front-end and back-end development, building innovative solutions to complex problems. Beyond coding, I love reading and watching crime cases and movies. I’m also a travel enthusiast.
            </Typography>
            <Typography
              variant="body1"
              className="mb-4"
              sx={{
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              I’m always interested in collaborating on projects and exploring innovative ideas. Let’s connect and create something amazing together!
            </Typography>

            {/* Responsive Button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'start' },
                mt: 5,
              }}
            >
              <button
  className="flex items-center bg-indigo-600 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
>
  Contact
  <svg
    className="w-5 h-5"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
</button>

            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
