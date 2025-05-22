import { Loader } from "@/components/common/preloader";

export default function Loading() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Loader />
        </div>
    )
}