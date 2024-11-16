import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { PenBox } from "lucide-react"
import UserMenu from "./user-menu"
import { checkUser } from "@/lib/checkUser"
const Header=async()=>{
  await checkUser();
  return(
    <>
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
        <Image src={"/synclylogo.png"} alt="syncly logo" width={200} height={56} 
        className="h-10 w-auto object-contain"></Image></Link>
    
   <div className="flex items-center gap-4">
    <Link href='/project/create'>
   <Button variant="destructive" className=" items-center gap-2">
    <PenBox size={18}/>
    <span>create project</span>
   </Button>
    </Link>

    <SignedOut>
<SignInButton >

<Button variant="outline">Login</Button>
</SignInButton>
    </SignedOut>
    <SignedIn>
   <UserMenu/>
    </SignedIn>
    </div>
</nav>

    </header>
    
    </>
  )
}
export default Header