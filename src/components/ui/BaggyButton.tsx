import { Button, ButtonProps } from "@/components/ui/button";
import React from 'react';

interface BaggyButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const BaggyButton: React.FC<BaggyButtonProps> = ({ children, className, ...props }) => (
  <Button 
    variant="outline" 
    className={`px-8 hover:bg-slate-200 hover:border-purple-400 hover:text-slate-950 ${className}`} 
    {...props}
  >
    {children}
  </Button>
);

export default BaggyButton;
