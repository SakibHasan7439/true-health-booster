import Button from "@/app/Shared/Button/Button";

const PaymentForm = () => {
    return (
        <div className="border rounded-md lg:rounded-2xl">
            <h2 style={{fontWeight: 100}} className="bg-[#F8F7F0] xl:text-[20px] flex items-center rounded-t-2xl text-left text-sm font-semibold text-primary-color p-4 xl:h-[70px]">
                Checkout
            </h2>
            <div className="p-2 lg:p-4">
                <form>
                    <label>Name on Card</label>
                    <input className="input-field" placeholder="Name on Card" type="text" name="name" id="" />
                    <label>Card Number</label>
                    <input className="input-field" placeholder="Card Number" type="text" name="name" id="" />
                    <div className="flex items-center gap-2 mb-5 lg:mb-7">
                        <div className="w-full">
                            <label>Expired Date</label>
                            <input className="input-field" type="date" name="name" id="" />
                        </div>
                        <div className="w-full">
                            <label>CVC</label>
                            <input className="input-field" placeholder="......" type="text" name="name" id="" />
                        </div>
                    </div>
                    <Button className={"w-full rounded-md"} text={"Make Payment"}/>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;