import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  chidlren?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
}

const MeetingModel = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
}: MeetingModelProps) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        
        <DialogContent>
          <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-6 text-white">

      
            <div className="flex flex-col gap-6">
            {image && (
                <div className="flex justify-center">
                    <Image src={image} alt='image' width={72} height={72} />
                </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px]' , className)}>{title}</h1>
            {children}
            <Button className="bg-blue-1 focus-visible:ring-offset-0" onClick={handleClick}>
                {buttonIcon && (
                    <Image src={image} alt="button icon"  width={13} height={13} />
                )} &nbsp;
                {buttonText || 'Schedule Meeting'}

            </Button>

            </div>

          </DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MeetingModel;
