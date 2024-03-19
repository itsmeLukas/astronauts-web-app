"use client"
const LoaderCircle = () => {
    return (
        <div className="flex items-center justify-center my-10">
            <div className='mx-1 h-5 w-5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='mx-1 h-5 w-5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='mx-1 h-5 w-5 bg-indigo-500 rounded-full animate-bounce'></div>
        </div>
    );
};
export default LoaderCircle;
