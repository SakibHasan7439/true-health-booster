import Button from "@/app/Shared/Button/Button";
import Input from "../../contact-page/contact-form-section/Input";

const CheckoutForm = () => {
  return (
    <div>
      <h2 className="bg-[#F8F7F0] rounded-t-2xl text-left text-sm font-semibold text-primary-color p-4">
        Checkout
      </h2>
      <div>
        <form className="border p-4 lg:p-6">
          {/* First Name */}
          <div className="flex flex-col gap-2 md:flex-row w-full mb-3 lg:mb-6">
            <div className="w-full">
              <label className="mb-1 text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="First name"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>

            <div className="w-full">
              <label className="mb-1 text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>
            
          </div>

          <div className="flex flex-col gap-2 md:flex-row w-full mb-3 lg:mb-6">
            <div className="w-full">
              <label className="mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>
            <div className="w-full">
              <label className="mb-1 text-sm font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="+880"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>
          </div>
          
          {/* Shipping Address */}
          <div className="flex flex-col w-full mb-3 lg:mb-6">
            <label className="mb-1 text-sm font-medium">Shipping Address</label>
            <input
              type="text"
              className="border w-full p-2 lg:p-4 rounded-md"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2 md:flex-row w-full mb-3 lg:mb-6">
            <div className="w-full">
              <label className="mb-1 text-sm font-medium">Country</label>
              <select
                className="border w-full p-2 lg:p-4 xl:p-4 rounded-md"
                defaultValue=""
              >
                <option defaultValue={"United State"}>
                  United State
                </option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <div className="w-full">
              <label className="mb-1 text-sm font-medium">State</label>
              <input
                type="text"
                placeholder="State"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>
          </div>


          {/* City */}
          <div className="flex flex-col gap-2 md:flex-row w-full mb-3 lg:mb-6">
            <div className="w-full">
              <label className="mb-1 text-sm font-medium">Town/City</label>
              <input
                type="text"
                placeholder="City"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>
            <div className="w-full">
              <label className="mb-1 text-sm font-medium">Zip Code</label>
              <input
                type="text"
                placeholder="Zip Code"
                className="border w-full p-2 lg:p-4 rounded-md"
              />
            </div>
          </div>
          <Button text={"Place Order"} className={"!w-full !rounded-md"}/>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
