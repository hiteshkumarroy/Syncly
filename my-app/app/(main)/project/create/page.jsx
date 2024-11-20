"use client"
import { projectSchema } from "@/app/lib/validators";
import OrgSwitcher from "@/components/ui/org-switcher";
import { useOrganization, useOrganizationList, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CreateProject } from "@/actions/project";


 const CreateProjectPage=()=>{
  const {isLoaded:isOrgLoaded,membership}=useOrganization();
  const {isLoaded:isUserLoaded}=useUser();
  const [isAdmin,setIsAdmin] =useState(false);
  const router=useRouter()
 
const{register,handleSubmit,formState:{errors}}=useForm({
  resolver:zodResolver(projectSchema),
});
  useEffect(()=>{
    if(isOrgLoaded  && isUserLoaded && membership){
      setIsAdmin(membership.role=== "org:admin");
    }

  },[isOrgLoaded,isUserLoaded,membership]);

  const{data:project,loading,error,fn:createProjectfn,}=useFetch(CreateProject);

  const onSubmit=async(data)=>{
    createProjectfn(data);
  }

  useEffect(()=>{
    if(project){
      toast.success("project created successfully");
      router.push(`/project/${project.id}`);
    }

  },[loading])


  if(!isOrgLoaded || !isUserLoaded){
    return null;
  }
 

  if(!isAdmin){
    return (
      <div className="flex flex-col gap-2 items-center">
        <span className="text-2xl gradient-title"> oops! only admins can create projects.</span>
        <OrgSwitcher></OrgSwitcher>
      </div>
    )
  }

  return(
    <div className="container mx-auto py-1">

      <h1 className="text-6xl text-center font-bold mb-8 gradient-title">
        Create New Project
      </h1>

      <form className="flex flex-col space-y-4 " onSubmit={handleSubmit(onSubmit)}>
        <Input
        id="name"
        className="bg-slate-950"
        placeholder="Project name"
        {...register("name")}
        />


        {errors.name && 
        (<div className="text-red-500 text-sm mt-1">{errors.name.message}</div>)}
        <Input
        id="key"
        className="bg-slate-950"
        placeholder="Project Key (Ex:RCYT)"
        {...register("key")}
        />


        {errors.key && 
        (<div className="text-red-500 text-sm mt-1">{errors.key.message}</div>)}
        
        <Textarea
        id="description"
        className="bg-slate-950 h-28"
        placeholder="Project Description"
        {...register("description")}

        />
        {errors.description && 
        (<div className="text-red-500 text-sm mt-1">{errors.description.message}</div>)}


        <Button disabled={loading} 
        type="submit"
         size="lg"
          className="bg-blue-500 text-white">
            {loading?"Creating...":"Create Project"}
            </Button>

        {error && 
        (<div className="text-red-500 text-sm mt-1">{error.message}</div>)}


      </form>
      
    </div>
  )

 }
 export default CreateProjectPage;