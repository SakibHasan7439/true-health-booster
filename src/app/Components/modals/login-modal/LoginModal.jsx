import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { poppins } from "@/app/layout";
import Button from "@/app/Shared/Button/Button";
import { Eye } from "lucide-react";

export default function LoginModal({children}) {
  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-lg lg:!py-14 px-6 lg:px-[50px] my-4 lg:my-10 max-h-screen overflow-y-auto rounded-2xl">
        <DialogHeader className={"mb-4 lg:mb-7 xl:mb-10"}>
          <Image 
            width={256}
            height={56}
            src={"/images/website_logo.png"}
            className="mx-auto mb-3 lg:mb-5 xl:mb-6"
            alt="website logo"
          />
          <DialogTitle className={`text-xl lg:text-2xl xl:text-[30px] mb-4 font-semibold text-center ${poppins.className}`}>Welcome back!</DialogTitle>
          <p className="text-center">Please enter your details</p>
        </DialogHeader>
        <form>
            <div className="">
            <div className="mb-8">
              {/* <Label htmlFor="email" className="text-right">
                Email
              </Label> */}
              <input id="email" type="email" placeholder="Email" className="h-8 border-b pb-1 w-full outline-0 placeholder:text-black" />
            </div>
            <div className="mb-4 lg:mb-7 xl:mb-10 relative">
              <input id="password" type="password" placeholder="Password" className="h-8 mb-4 border-b pb-1 w-full outline-0 placeholder:text-black" />
              <Eye className="absolute right-4 top-0"/>
                <p className="text-red-500 text-right">Forget Password</p>
            </div>
            <Button text={"Log in"} className={"w-full rounded-md mb-3 lg:mb-4 xl:mb-6"} />
            <div className="text-center mb-3 lg:mb-4 xl:mb-6  text-[12px] lg:text-[16px]">Or register with</div>
            <button className="cursor-pointer xl:h-[52px] px-8 py-3 text-[12px] lg:text-[16px] w-full flex justify-center gap-2 items-center text-black bg-[#E0E0E0] rounded-md font-medium mb-3 lg:mb-4 xl:mb-8">
              <Image 
                width={24}
                height={24}
                src={"/images/google.png"}
                alt="google icon"
              />
              <p>log in with google</p>
            </button>
            <p className="text-center text-[12px] lg:text-[16px]">Do not have and account? <span className="text-[#32BADE] font-medium">Sign Up</span></p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
