import React from 'react'
import { cn } from "@/lib/utils";

type Props = {
    text: string;
    className?: string;
  };

const NoteText = ({text, className }: Props) => {
  return (
    <div className={cn(
        "font-medium p-3 my-2 rounded-md text-primary-color bg-primary-color/10",
        className
      )}>{text}</div>
  )
}

export default NoteText