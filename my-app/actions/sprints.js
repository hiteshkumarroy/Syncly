"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createSprint(projectId,data){
  const {userId,orgId}=auth();
  if(!userId || !orgId){
    throw new Error("unauthorized");
  }

  const project=await db.project.findUnique({
    where:{id: projectId},
  });

  if(!project || project.organizationId !==orgId){
    return new Error("Project not found");
  }
const Sprint=await db.sprint.create({
  data:{
    name:data.name,
    startDate:data.startDate,
    endDate:data.endDate,
    status:"PLANNED",
    projectId:projectId,
  }
})
return Sprint;
}