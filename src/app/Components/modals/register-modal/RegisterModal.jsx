import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { poppins } from "@/app/layout";
import Button from "@/app/Shared/Button/Button";

export default function RegisterModal({children}) {
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
          <DialogTitle className={`text-xl lg:text-2xl xl:text-[30px] font-semibold text-center ${poppins.className}`}>Get Started With TrueMed</DialogTitle>
        </DialogHeader>
        <form>
            <div className="">
            <div className="mb-4">
              <Label htmlFor="name" className="text-right mb-3">
                Name
              </Label>
              <Input id="name" placeholder="Your name" className="h-14" />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="text-right mb-3">
                Email
              </Label>
              <Input id="email" type="email" placeholder="example@mail.com" className="h-14" />
            </div>

            <div className="mb-4">
              <Label htmlFor="number" className="text-right mb-3">
                Phone Number
              </Label>
              <Input id="number" type="number" placeholder="+880" className="h-14" />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="text-right mb-3">
                Password
              </Label>
              <Input id="password" type="password" placeholder="********" className="h-14" />
            </div>

            <div className="mb-5 lg:mb-7 xl:mb-10">
              <Label htmlFor="confirm password" className="text-right mb-3">
                Confirm Password
              </Label>
              <Input id="password" type="password" placeholder="********" className="h-14" />
            </div>
            <Button text={"Sign Up"} className={"w-full rounded-md mb-3 lg:mb-4 xl:mb-6"} />
            <div className="text-center mb-3 lg:mb-4 xl:mb-6  text-[12px] lg:text-[16px]">Or register with</div>
            <button className="cursor-pointer xl:h-[52px] px-8 py-3 text-[12px] lg:text-[16px] w-full flex justify-center gap-2 items-center text-black bg-[#E0E0E0] rounded-md font-medium mb-3 lg:mb-4 xl:mb-8">
              <Image 
                width={24}
                height={24}
                src={"/images/google.png"}
                alt="google icon"
              />
              <p>Sign up With Google</p>
            </button>
            <p className="text-center text-[12px] lg:text-[16px]">Do not have and account? <span className="text-[#32BADE] font-medium">Sign Up</span></p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
