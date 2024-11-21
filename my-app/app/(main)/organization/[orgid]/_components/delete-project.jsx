"use client"
import { CreateProject, deleteProject } from "@/actions/project";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { useOrganization } from "@clerk/nextjs";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";
const DeleteProject=({projectId})=>{
  const {membership}=useOrganization();

  const router=useRouter();

  const {
    data:deleted,
    loading:isDeleting,
    error,
    fn:deleteProjectFn,}=useFetch(deleteProject);

const handleDelete=()=>{
  if(window.confirm("Are you sure to delete this project?")){
    deleteProjectFn(projectId);
  }

}

useEffect(()=>{
 
  
  if(deleted === true){
    toast.success("Project Deleted")

    router.refresh();

  }

},[deleted])
 


  return(
    <>
    <Button onClick={handleDelete} disabled={isDeleting} variant="ghost" size="sm" className={` bg-red-900 ${isDeleting?"animated-pulse":""} `}>
<Trash2 className="h-2 w-2 text-white"/>
    </Button>
    {/* {error && 
        (<div className="text-red-500 text-sm mt-1">{error.message}</div>)} */}
    </>
  )

}
export default DeleteProject;
