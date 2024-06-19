import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-container">
      <p className="text">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <button onClick={toggleExpand} className="text-yellow-500  hover:animate-pulse">
        {isExpanded ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  );
};

export default ExpandableText;
