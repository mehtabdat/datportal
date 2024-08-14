import { SVGProps } from "react";

export const ReloadIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="21"
            fill="none"
            viewBox="0 0 15 21"
            {...props}
        >
            <path
                fill="#6B778C"
                fillRule="evenodd"
                d="M6.837.28a.926.926 0 011.326 0l2.812 2.863a.967.967 0 010 1.35L8.163 7.357a.926.926 0 01-1.326 0 .967.967 0 010-1.35L8.05 4.773H7.5c-3.107 0-5.625 2.564-5.625 5.727 0 .735.135 1.435.381 2.078a.96.96 0 01-.533 1.236.932.932 0 01-1.214-.543A7.743 7.743 0 010 10.5c0-4.217 3.358-7.636 7.5-7.636h.55L6.836 1.63a.967.967 0 010-1.35zm6.44 6.906a.932.932 0 011.214.543c.329.86.509 1.795.509 2.771 0 4.217-3.358 7.636-7.5 7.636h-.55l1.213 1.235a.967.967 0 010 1.35.926.926 0 01-1.326 0l-2.812-2.864a.967.967 0 010-1.35l2.812-2.864a.926.926 0 011.326 0 .967.967 0 010 1.35L6.95 16.227H7.5c3.107 0 5.625-2.564 5.625-5.727 0-.735-.136-1.435-.382-2.078a.96.96 0 01.534-1.236z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};