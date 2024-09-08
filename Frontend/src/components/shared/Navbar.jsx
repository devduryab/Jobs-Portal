import React from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { PopoverContent } from "@radix-ui/react-popover";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          {/* Logo on the left */}
          <div className="text-2xl font-bold">
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#F83002]">Portal</span>
            </h1>
          </div>

          {/* Navigation and avatar on the right */}
          <div className="flex items-center gap-12">
            <ul className="flex font-medium items-center gap-5">
              <li>Home</li>
              <li>Jobs</li>
              <li>Browse</li>
            </ul>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <h1>hello</h1>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
