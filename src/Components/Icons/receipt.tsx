import { SVGProps } from "react";

export const ReceiptIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="15"
            fill="none"
            viewBox="0 0 12 15"
            {...props}
        >
            <path
                fill="#137749"
                d="M1.05 14.462l1.753-1.314 1.269 1.268a.5.5 0 00.707 0L6 13.195l1.221 1.221a.5.5 0 00.707 0l1.269-1.268 1.753 1.315a.5.5 0 00.8-.4V.937a.5.5 0 00-.5-.5H.75a.5.5 0 00-.5.5v13.126a.5.5 0 00.8.4zm.2-13.024h9.5v11.624l-1.3-.974a.5.5 0 00-.654.046l-1.221 1.221-1.221-1.22a.498.498 0 00-.708 0l-1.221 1.22-1.221-1.22a.5.5 0 00-.654-.047l-1.3.975V1.437z"
            ></path>
            <path
                fill="#137749"
                d="M3.375 9.837h5.25a.5.5 0 000-1h-5.25a.5.5 0 000 1zM3.375 7.212h5.25a.5.5 0 000-1h-5.25a.5.5 0 000 1zM3.375 4.587h5.25a.5.5 0 000-1h-5.25a.5.5 0 000 1z"
            ></path>
        </svg>
    );
};