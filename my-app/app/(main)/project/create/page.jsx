"use client"
import OrgSwitcher from "@/components/ui/org-switcher";
import { useOrganization, useOrganizationList, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";


 const CreateProjectPage=()=>{
  const {isLoaded:isOrgLoaded,membership}=useOrganization();
  const {isLoaded:isUserLoaded}=useUser();
  const [isAdmin,setIsAdmin] =useState(false);
 

  useEffect(()=>{
    if(isOrgLoaded  && isUserLoaded && membership){
      setIsAdmin(membership.role=== "org:admin");
    }

  },[isOrgLoaded,isUserLoaded,membership]);

  if(!isOrgLoaded || !isUserLoaded){
    return null;
  }
  // <span> oops! only admins can create projects.</span>

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
    </div>
  )

 }
 export default CreateProjectPage;