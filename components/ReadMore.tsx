'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ReadMoreProps {
  text: string; 
  maxLength?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 800 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <Button
        onClick={toggleReadMore}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ReadMore;
