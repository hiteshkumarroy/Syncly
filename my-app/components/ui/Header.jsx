import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Header=()=>{
  return(
    <>
    <SignedOut>
<SignInButton/>
    </SignedOut>
    <SignedIn>
     <UserButton/>
    </SignedIn>
    </>
  )
}
export default Header