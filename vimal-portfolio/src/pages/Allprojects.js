import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProjectCard from "../cardcomponents/ProjectCard";
import supportticket from "../assets/supportticket.png";
import hari from '../assets/hari.jpg';
import vimal from '../assets/Vimal.png';
import tourism from '../assets/tourism website.png'
import '../pages/style.css';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AllProjects({projectsOpen,setProjectsOpen}) {
    
    const handleProjectsClose = () => {
        setProjectsOpen(false)
    }

  return (
    <>
      
      <Dialog
        fullScreen
        open={projectsOpen}
        onClose={setProjectsOpen}
        TransitionComponent={Transition}
        
      >
        <AppBar sx={{ position: 'sticky',backgroundColor:'#4338ca' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleProjectsClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" align="center">
            My Creations
          </Typography>
          
          </Toolbar>
        </AppBar>

        <div className="flex justify-center">
        <div className="w-full px-4 md:w-3/4 lg:w-2/3">
          <ProjectCard
            image={supportticket}
            title={"Support Ticket System"}
            description={
              "This project provides users with a platform to raise their problems and queries through a support ticket system. Users can submit tickets detailing their issues, and the support team will respond within 24 hours. Submitted tickets can be tracked with essential details such as Ticket ID, Status, and Created Date, ensuring streamlined issue management and resolution."
            }
            technologies={["Reactjs","React-Bootstrap","Mui","React-hook-form","Flask","Python","PostgreSQL"]}
            developerImages={[vimal,hari]}
          />
           <ProjectCard
            image={tourism}
            title={"tourism website"}
            description={
              "Explore exciting adventure activities like bungee jumping, zip-lining, and canoeing. Discover amazing travel packages to destinations like Himachal, Darjeeling, Goa, and more. Find the perfect adventure for you!"
            }
            technologies={["Html","Css","Js","React-Bootstrap"]}
            developerImages={[vimal]}
          />
        </div>

      </div>

      </Dialog>
    </>
  );
}