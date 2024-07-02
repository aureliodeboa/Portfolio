import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode, useEffect } from "react";

type Props = {
    children: ReactNode;
};

export const Container = ({ children }: Props) => {
    const themeCtx = useTheme();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full h-dvh overflow-y-scroll flex flex-col justify-around bg-[#FFFFFF] text-black dark:bg-[#09090B] dark:text-white relative">
        
            {children}
        </div>
    );
};
