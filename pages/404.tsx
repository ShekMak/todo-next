import { Player } from "@lottiefiles/react-lottie-player"
import { NextPage } from "next"
import Link from "next/link"

const NotFound: NextPage = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center md:w-1/2 md:m-auto'>
            <Player 
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_kcsr6fcp.json"
                style={{ height: '300px', width: '300px' }}
                ></Player>
            <p className='align-middle text-center mt-4 mb-6 px-6'>It seems that you are lost, get back to the tasks.</p>
            <Link href="/todo">
                <a className='h-12 w-52 flex items-center justify-center bg-black text-white rounded-md'>
                <i className='bi bi-arrow-left mr-2'></i>
                <span className='capitalize'>All Tasks</span>
                </a>
            </Link>
        </div>
    )
}

export default NotFound