import { useState } from 'react';


function TextExpander({
    collapsedNumWords = 10,
    expandButtonText = "Show more",
    collapseButtonText = "Show less",
    buttonColor = "#1f09cd",
    expanded = false,
    className, 
    children 
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const text = children;
    const words = text.split(' ');

    const displayText = isExpanded 
    ? text 
    : words.slice(0, collapsedNumWords).join(' ') + '...';

  return (
    <div>
      <span className={className}
      >
        {displayText}
        <button 
         style={{color: buttonColor}} 
         onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? collapseButtonText : expandButtonText}
            </button>

      </span>
    </div>
  );
}

export default TextExpander;
