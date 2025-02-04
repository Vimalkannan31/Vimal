import React from "react";
import Grid from "@mui/material/Grid";

const ProjectCard = ({ image, title, description,technologies,developerImages }) => {
  return (
    <div className="project-card border rounded-lg shadow-2xl p-4 bg-transparant mb-10">
      <Grid container spacing={2} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} sm={4} md={5}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} sm={8} md={7}>
        <Grid item xs={12}>
          <div className="developer-images-container ml-2 py-2 flex justify-start">
            {developerImages && developerImages.map((devImage, index) => (
              <img
                key={index}
                src={devImage}
                alt={`Developer ${index + 1}`}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600 mx-1"
              />
            ))}
          </div>
        </Grid>

          <div className="content pl-4">
            <h2 className="title text-lg font-bold  mb-2">{title}</h2>
            <p className="description text-sm ">{description}</p>
          </div> 
          <div className="technologies mt-4 mx-2">
              {technologies && technologies.map((tech, index) => (
                <div
                  key={index}
                  className="collaborator bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full px-3 py-1 mb-2 mx-1 inline-block"
                >
                  {tech}
                </div>
              ))}
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;
