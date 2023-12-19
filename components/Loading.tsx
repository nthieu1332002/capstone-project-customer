import useLoading from "@/hooks/useLoading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/public/assets/loading.png";

const Loading = () => {
  const { isOpen, onClose } = useLoading();
  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="transition duration-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  bg-neutral-800/50">
      <div className={cn("h-[500px] w-full car-movement")}>
        <div className="relative w-32 h-20 car bg-transparent">
          <Image
            src={logo}
            alt="logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            quality={30}
          />
          <div className="absolute -left-5 bottom-3 rotate-180">💨</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
