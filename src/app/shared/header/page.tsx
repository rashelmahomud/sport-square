import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/core/UserProfile";

export default function HeaderPage() {

    const links = [
        {title: 'Home', href:'/'},
        {title: 'About', href:'/about'},
        {title: 'Services', href:'/Services'},
        {title: 'contact', href:'/contact'},
    ]
   
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
          <FontAwesomeIcon icon={faBars} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <SheetTitle>Menu</SheetTitle>
           <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="grid gap-2 py-6">
            {
                links?.map((link) => <div key={link.title}><Link href={link.href} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                {link.title}
              </Link></div>)
            }
            <UserProfile />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <Image width={90} height={0} alt="logo" src={'/logo.png'} />
      </Link>

      <nav className="ml-auto hidden lg:flex gap-6">
        {
            links.map((link) => <div key={link.title}>      <Link
            href={link.href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            {link.title}
          </Link></div>)
        }
      <UserProfile />
      </nav>
    </header>
  )
}
