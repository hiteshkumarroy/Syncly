import { getProjects } from "@/actions/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import DeleteProject from "./delete-project";

export default async function ProjectList({orgId}){
  const projects = await getProjects(orgId);
  if(projects.length ===0){
    return(
      <p>No projects found {" "}
      <Link 
      href="/project/create"
      className="underline underline-offset-2 text-blue-200"
      >Create new</Link>
      </p>
    )
  }

return( <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {projects.map((project)=>{
    return(
  <Card key={project.id}>
  <CardHeader>
    <CardTitle className="flex justify-between items-center">{project.name}</CardTitle>
  <DeleteProject projectId={project.id} />
  </CardHeader>
  <CardContent>
  <p className="text-sm text-gray-500 mb-4">{project.description || 'No description available'}</p>
<Link href={`/project/${project.id}`} className="text-blue-500 hover:underline">view project </Link>
  </CardContent>
 
</Card>
    );

})}
</div>
);
}