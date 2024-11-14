import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Calendar, ChevronRight, Layout } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import CompanyCarousel from "@/components/ui/comapny-carousel";
import faqs from "@/data/faqs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];
export default function Home() {
  

  return (
    <>
    <div className="min-h-screen">
      {/* Herosection */}
      <section className="container mx-auto py-20 text-center" >
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow
          <br />
          <span  className="flex mx-auto gap-3 sm:gap-4 items-center" >
            with{" "}
           SYNCLY
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-3-3xl mx-auto"> Empower your team with our intuitive project management solution.</p>

        <Link href="/onboarding">
        <Button size="lg" className="mr-2">
          Get Started 
          <ChevronRight size={18} className="ml-1"/>
          </Button>
        
        </Link>
        <Link href="#features">
        <Button size="lg" variant="outline">
          Learn More
          <ChevronRight size={18} className="ml-1"/>
          </Button>
        
        </Link>
      </section>



     <section id="features" className="bg-gray-900 py-20 px-5">
      <div className="container mx-auto">

        <h3  className="text-3xl font-bold mb-12 text-center">
          Key Features
        </h3>
       
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {
        features.map((feature,index)=>{
          return(
          <Card key={index} className="bg-gray-800">

  <CardContent className="pt-6">
    <feature.icon className="h-12 w-12 mb-4 text-blue-300"/>
    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
    <p className="text-gray-300">{feature.description}</p>
   
  </CardContent>
 
</Card>
          );
        })}
        </div>
      
      </div>
     </section>


    

     <section id="features" className="mt-20 mb-20">
      <div className="container mx-auto">

        <h3  className="text-3xl font-bold mb-12 text-center">
          Trusted By Industry Leaders
        </h3>
       
       <div >
     
         
 <CompanyCarousel></CompanyCarousel>

        
        </div>
      
      </div>
     </section>


     <section id="features" className="bg-gray-900 py-20 px-5">
      <div className="container mx-auto">

        <h3  className="text-3xl font-bold mb-12 text-center">
          Frequently asked questions?
        </h3>
        {faqs.map((faqs,index)=>{
          return( <Accordion type="single" className="width-full" collapsible key={index}>
            <AccordionItem value={`items-${faqs.index}`}>
              <AccordionTrigger>{faqs.question}</AccordionTrigger>
              <AccordionContent>
               {faqs.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          )
        })}
       
       
       <div >
     
 

        
        </div>
      
      </div>
     </section>



     <section id="features" className="py-20 text-center px-5">
      <div className="container mx-auto">

        <h3  className="text-3xl font-bold mb-12 text-center">
        Ready To Transform Your Workflow
      
        </h3>
        <p className="text-xl mb-12">
        join thousands of team already using SYNCLY to streamline their projects and boost productivity.</p>
        <Link href="/onboarding">
        <Button size="lg" className="animate-bounce">Start For Free
          <ArrowRight className="ml-2 h-5 w-5"/></Button></Link>
       
       <div >
     
         


        
        </div>
      
      </div>
     </section>

     </div>
    </>
  );
}
