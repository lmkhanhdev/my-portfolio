// MobileNav.tsx
import { AlignJustify } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Navbar from "./Navbar";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
