// "use client"
// import OrgSwitcher from "@/components/ui/org-switcher";
// import { useOrganization, useOrganizationList, useUser } from "@clerk/nextjs";
// import React, { useEffect, useState } from "react";
//  const CreateProjectPage=()=>{
//   const {isLoaded:isOrgLoaded,membership}=useOrganization();
//   const {isLoaded:isUserLoaded}=useUser;
//   const {isAdmin,setIsAdmin} =useState(false);

//   useEffect(()=>{
//     if(isOrgLoaded  && isUserLoaded && membership){
//       setIsAdmin(membership.role==="org:admin");
//     }

//   },[isOrgLoaded,isUserLoaded,membership]);

//   if(!isOrgLoaded || !isUserLoaded){
//     return null;
//   }
//   // <span> oops! only admins can create projects.</span>

//   if(!isAdmin){
//     return (
//       <div>
//         <span> oops! only admins can create projects.</span>
//         <OrgSwitcher></OrgSwitcher>
//       </div>
//     )
//   }

//   return(
//     <div>CreateProjectPage</div>
//   )

//  }
//  export default CreateProjectPage;