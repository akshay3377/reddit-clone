import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  
  import { LogOut, User } from "lucide-react";
//   import { signOut } from "next-auth/react";
  import Link from "next/link";
  
  export default function Profile() {

  
    return (
      <div className="flex items-center gap-12">
        {/* <>user role: {user && user.email}</>/ */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Avatar className="h-8 w-8">
              <AvatarImage src={'/image.jpg'} alt="Profile Picture" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-5 mt-2">
            <DropdownMenuLabel>{'Username'}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/profile" passHref>
                <DropdownMenuItem>
                  <User className="mr-1 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            //   onClick={() => {
            //     signOut({ callbackUrl: "/" }); // Sign out and redirect to homepage
            //   }}
            >
              <LogOut className="mr-1 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  