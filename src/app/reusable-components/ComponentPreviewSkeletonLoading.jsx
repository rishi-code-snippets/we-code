import { componentPreview } from '@/app/reusable-components/ComponentPreview.module.css';

const ComponentPreviewSkeletonLoading = () => {
    return (
        <div className={`${componentPreview} relative flex items-center justify-center`}>
            <div className="w-20 h-full absolute right-0 flex flex-col justify-between items-center py-6 animate-pulse">
                <span className="w-9 h-9 rounded-full bg-blue-100/50 shadow-md"></span>
                <ul className="flex flex-col gap-3">
                    <li className="w-7 h-7 rounded-full bg-blue-100/50 shadow-md"></li>
                    <li className="w-7 h-7 rounded-full bg-blue-100/50 shadow-md"></li>
                    <li className="w-7 h-7 rounded-full bg-blue-100/50 shadow-md"></li>
                </ul>
                <span className="w-9 h-9 rounded-full bg-blue-100/50 shadow-md"></span>
            </div>
            <div className="w-full h-4 absolute bottom-8 left-5">
                <span className="bg-blue-100/50 animate-pulse w-[60%] h-full inline-block rounded-full"></span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <path d="M20 7h-2.151C17.35 7 17 6.498 17 6a3 3 0 1 0-6 0c0 .498-.351 1-.849 1H8a1 1 0 0 0-1 1v2.151C7 10.65 6.498 11 6 11a3 3 0 1 0 0 6c.498 0 1 .351 1 .849V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.151c0-.498-.503-.849-1-.849a3 3 0 1 1 0-6c.497 0 1-.351 1-.849V8a1 1 0 0 0-1-1Z" fill="#dbeafe87" stroke="#dbeafe" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                <animate attributeName="stroke-dasharray" from="0, 68.1767349243164" to="68.1767349243164, 0" dur="2s" repeatCount="indefinite" />
                </path>
            </svg>
        </div>
    )
}

export default ComponentPreviewSkeletonLoading;