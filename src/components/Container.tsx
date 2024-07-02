import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const Container = ({ children }: Props) => {
    const themeCtx = useTheme();
    return (
        <div className="w-full h-dvh overflow-y-scroll flex flex-col justify-around bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white relative">
            {/* Background Circles for Dark Mode */}
            <div className="hidden dark:block absolute top-1/4 left-1/3 w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-30"></div>
            <div className="hidden dark:block absolute top-1/2 right-1/4 w-64 h-64 bg-green-600 rounded-full blur-2xl opacity-30"></div>
            <div className="hidden dark:block absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-700 rounded-full blur-2xl opacity-30"></div>
            {children}
        </div>
    );
};
