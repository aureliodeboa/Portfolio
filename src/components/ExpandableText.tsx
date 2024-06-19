import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ExpandableTextProps {
  text: string;
  maxLength: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
    let currentLanguage;
    t("current-language.locale")=="pt"?currentLanguage={"see_less":"Ver menos","see_more":"Ver Mais"}:currentLanguage={"see_less":"See less","see_more":"See more"};
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-container">
      <p className="text-justify text-sm sm:text-base md:text-lg">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <button onClick={toggleExpand} className="text-yellow-500  hover:animate-pulse">
        {isExpanded ? currentLanguage.see_less : currentLanguage.see_more}
      </button>
    </div>
  );
};

export default ExpandableText;
