import { SVGProps } from "react";

export const CalenderIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            fill="none"
            viewBox="0 0 16 17"
            {...props}
        >
            <path
                fill="#6B778C"
                d="M12.91 1.733h-.596v-.604a.625.625 0 10-1.25 0v.604H4.936v-.604a.625.625 0 10-1.25 0v.604H3.09A3.093 3.093 0 000 4.822v8.586a3.093 3.093 0 003.09 3.089h9.82a3.093 3.093 0 003.09-3.09V4.823a3.093 3.093 0 00-3.09-3.09zM3.09 2.982h.596V4.2a.625.625 0 101.25 0V2.982h6.129V4.2a.625.625 0 101.25 0V2.982h.596c1.014 0 1.84.825 1.84 1.84v.596H1.249v-.596c0-1.015.826-1.84 1.84-1.84zm9.82 12.265H3.09a1.842 1.842 0 01-1.84-1.84v-6.74h13.5v6.74c0 1.015-.825 1.84-1.84 1.84zM5.55 9.125c0 .345-.28.625-.625.625H3.696a.625.625 0 110-1.25h1.229c.345 0 .625.28.625.625zm7.378 0c0 .345-.28.625-.624.625h-1.229a.625.625 0 010-1.25h1.229c.345 0 .624.28.624.625zm-3.693 0c0 .345-.28.625-.624.625H7.382a.625.625 0 110-1.25h1.229c.345 0 .624.28.624.625zM5.55 12.811c0 .345-.28.625-.625.625H3.696a.625.625 0 110-1.25h1.229c.345 0 .625.28.625.625zm7.378 0c0 .345-.28.625-.624.625h-1.229a.625.625 0 110-1.25h1.229c.345 0 .624.28.624.625zm-3.693 0c0 .345-.28.625-.624.625H7.382a.625.625 0 110-1.25h1.229c.345 0 .624.28.624.625z"
            ></path>
        </svg>
    );
};