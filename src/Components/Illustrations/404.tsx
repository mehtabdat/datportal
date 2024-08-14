import { SVGProps } from "react";

export const Illustation404 = (props: SVGProps<SVGSVGElement>) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 742 245"
            width={width > 768 ? 400 : 200}
            height={height > 768 ? 200 : 100}
            className={`${width > 768 ? 'mt-10' : "mt-5"}`}
            {...props}
        >
            <path
                fill="#137749"
                d="M0 195.599v-41.34c0-.296.09-.585.26-.828L106.869.618A1.444 1.444 0 01108.053 0h57.07a1.447 1.447 0 011.443 1.446v147.508a1.446 1.446 0 001.444 1.447h30.547a1.441 1.441 0 011.443 1.446v43.756a1.448 1.448 0 01-1.443 1.446H168.01a1.444 1.444 0 00-1.444 1.447v45.058a1.446 1.446 0 01-1.443 1.446h-45.949a1.446 1.446 0 01-1.443-1.446v-45.062a1.443 1.443 0 00-1.444-1.446H1.443A1.443 1.443 0 010 195.599zM115.519 67.984l-52.91 80.171a1.447 1.447 0 001.206 2.246h52.924a1.442 1.442 0 001.443-1.447v-80.17a1.446 1.446 0 00-1.949-1.381c-.295.11-.546.314-.714.581z"
            ></path>
            <path
                fill="#F499AA"
                d="M371 243.5c66.826 0 121-54.174 121-121 0-66.827-54.174-121-121-121s-121 54.173-121 121c0 66.826 54.174 121 121 121z"
            ></path>
            <path
                fill="#fff"
                d="M371.5 33.5l40.306 40.526V61.15H424.4V86.7l34.6 34.778h-21.091L371.5 54.706l-66.409 66.772H284L371.5 33.5z"
            ></path>
            <path
                fill="#fff"
                d="M406.334 160.855l-.043-46.927 9.709 7.13v39.797h-9.666zM336.666 160.855l.043-46.927-9.709 7.13v39.797h9.666zM390.03 112.529L347.462 155.8l13.122-.038 36.075-36.721-6.629-6.512z"
            ></path>
            <path
                fill="#fff"
                d="M353.97 112.529l42.097 43.728-13.12-.18-35.676-37.108 6.699-6.44z"
            ></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M459 188.5l-175-.054 20.5-11.946H438l21 12z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#137749"
                d="M542 195.599v-41.34c.001-.296.093-.586.263-.828L648.873.618a1.44 1.44 0 011.18-.618h57.07a1.447 1.447 0 011.443 1.446v147.508a1.446 1.446 0 001.444 1.447h30.547a1.441 1.441 0 011.443 1.446v43.756a1.448 1.448 0 01-1.443 1.446H710.01a1.444 1.444 0 00-1.444 1.447v45.058a1.446 1.446 0 01-1.443 1.446h-45.945a1.44 1.44 0 01-1.443-1.446v-45.062a1.443 1.443 0 00-1.444-1.446H543.443a1.442 1.442 0 01-1.443-1.447zM657.519 67.984l-52.913 80.171a1.45 1.45 0 00.461 2.04c.224.134.48.205.74.206h52.917a1.444 1.444 0 001.444-1.447v-80.17a1.443 1.443 0 00-2.649-.8z"
            ></path>
        </svg>
    );
};