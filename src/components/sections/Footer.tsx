import { useTranslation } from "react-i18next";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();
    return (
        <div className="py-4 mt-8">
            <hr className="border-gray-700 mb-4" />
            <div className="text-center">
                <p>
                {t("footer.rights")} | 
                    <a href="https://github.com/aureliodeboa" target="_blank" rel="noopener noreferrer" className="mx-1 dark:text-white text-black font-bold hover:underline">
                        Aurelio Ribeiro 
                    </a>
                    | Copyright  &copy; {currentYear} 
                   
                </p>
                <p></p>
            </div>
        </div>
    );
};
