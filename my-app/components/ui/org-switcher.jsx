"use client";
import { OrganizationSwitcher, useOrganization, useUser } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";

const OrgSwitcher=()=>{
  const {isLoaded}=useOrganization();
  const {isLoaded: isUserLoaded} = useUser();
  const pathname=usePathname();


  if(!isLoaded || !isUserLoaded){
    return null;
  }

  return <div>
    <SignedIn>
      <OrganizationSwitcher hidePersonal 
       afterCreateOrganizationUrl="/organization/:slug"
      afterSelectOrganizationUrl="/organization/:slug"
      createOrganizationMode={
        pathname==="/onboarding"?"navigation":"modal"
      }
      createOrganizationUrl="/onboarding"
      appearance={
        {
          elements:{
            // organizationSwitcher:"bg-white",
            organizationSwitcherTrigger:
            "border border-gray-300 rounded-md px-5 py-2 bg-white color-white ",
            organizationSwitcherTriggerIcon: "text-white ",
          
          }
        }
      }
      />
    </SignedIn>
  </div>;
}
export default OrgSwitcher;