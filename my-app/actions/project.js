"use server"
import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function CreateProject(data){
  const {userId,orgId}=auth();
  if(!userId){
    throw new Error("Unauthorized");
  }
if(!orgId){
  throw new Error("Organization not found");
  
}

const {data:membership} = await clerkClient().organizations.getOrganizationMembershipList({
  organizationId:orgId});
  

  const userMembership=membership.find((member)=>member.publicUserData.userId===userId);
  
if(!userMembership || userMembership.role !== "org:admin"){
  throw new Error("only admins can createprojects");
}

try{
  const project= await db.project.create({
data:{
  name:data.name,
  key:data.key,
  description:data.description,
  organizationId: orgId,
},
  });

  return project;
}catch(error){

  throw new Error("Error creating project: "+ error.message);
}
}


export async function getProjects(orgId){
  const {userId}=auth();
  if(!userId){
    throw new Error("Unauthorized");
  }
  const user=await db.user.findUnique({
    where:{clerkUserId:userId},
  })
  if(!user){
    throw new Error("User not found");
  }
  const projects=await db.project.findMany({
    where:{organizationId:orgId},
    orderBy:{createdAt:"desc"},
  });
  return projects;
}

export async function deleteProject(projectId){

  const {userId,orgId,orgRole}=auth();

  if(!userId || !orgId){
    throw new Error("Unauthorized!");
    
  }
  
  if(orgRole !== "org:admin"){
    throw new Error("Unauthorized! only admins can delete projects");


  }
  const project=await db.project.findUnique({
    where:{id: projectId},
  });

  if(!project || project.organizationId !== orgId){
    throw new Error( "project not found or you don't have permission to delete it");
  }
  await db.project.delete({
    where:{id:projectId},

  });
  return true;
}




export async function getProject(projectId) {
  const {userId,orgId}=auth();
  if(!userId || !orgId){
    throw new Error("unauthorized");
  }
  const user=await db.user.findUnique({
    where:{clerkUserId:userId},
  })
  if(!user){
    throw new Error("user not found");
  }


  const project=await db.project.findUnique({
    where:{id: projectId},
  
    include:{
      sprints:{
        orderBy:{createdAt:"desc"},

      },
    },
  });
  
  if(!project){
    return null;
  }

  if(project.organizationId !==orgId){
    return null;
  }
  return project;
}