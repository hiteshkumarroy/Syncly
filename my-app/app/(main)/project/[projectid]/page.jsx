import { getProject } from "@/actions/project";
import { notFound } from "next/navigation";
import React from "react";
import SprintCreationForm from "../_components/create-sprint";

const ProjectPage = async ({ params }) => {
  const { projectId } = params;


  const project = await getProject(projectId);
  if (!project) {

   notFound();
  }

  return( <div  className="container mx-auto">
    
    {/* spring creation */}
<SprintCreationForm
projectTitle={project.name}
projectId={projectId}
projectKey={project.key}
sprintKey={project.sprints?.length+1}
/>




    {/* spring board */}
    {project.sprints.length>0?(
      <></>
    ):(
      <div> Create Sprint from button above</div>
    )}
    </div>)
  
};
export default ProjectPage;
