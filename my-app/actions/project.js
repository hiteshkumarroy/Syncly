import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function CreateProject(data){
  const {userId,orgId}=auth();
  if(!userId){
    throw new Error("Unauthorized");
  }
if(!orgId){
  throw new Error("Organization not found");
  
}

const {data:membership} = await clerkClient().organizations.getOrganizationMembershipList({
  organizationId:organization.id});
  

  const userMembership=membership.find((member)=>member.publicUserData.userId===userId);
  
if(!userMembership || userMembershilp.role !== "org:admin"){
  throw new Error("only admins can createprojects");
}

try{
  const project= await db.project.create.create({
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
export  default CreateProject;