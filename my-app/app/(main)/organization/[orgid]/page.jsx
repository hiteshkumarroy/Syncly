import { getOrganization } from "@/actions/organization";
import OrgSwitcher from "@/components/ui/org-switcher";
import { OrganizationList, useOrganization } from "@clerk/nextjs";
import React from "react";
const Organization=async({params})=>{

 
  const {orgid}=  params;
  const organization= await getOrganization(orgid);
  if(!organization){
    return <div>Organization not found!</div>
  }
  return <div className="container mx-auto">
   
   <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
    <h1 className="text-5xl font-bold gradient-title p-2">{organization.name}&rsquo;s Projects</h1>

<OrgSwitcher/>


   </div>
<div className="mb-4">
  Show org projects

</div>
<div className="mt-8">
  Show user assigned and reported issues here

</div>

  </div>
}
export default Organization;