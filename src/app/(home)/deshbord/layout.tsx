import Link from "next/link";

export default function deshbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {name: 'Cart', route: '/deshbord/cart'},
    {name: 'User', route: '/deshbord/user'},
    {name: 'Add-Product', route: '/'},
     {name: 'Admin', route: '/admin'}
    ]
  return (
    
        <div className="w-full h-screen flex gap-10">
         <div>
          <h1 className="text-2xl font-semibold">Deshbord </h1>
          {links.map((link) => <div key={link.name}><Link href={link.route}>{link.name}</Link></div>)}
         </div>
         <div>
         {children}
         </div>
        
        </div>
       
       

  );
}
