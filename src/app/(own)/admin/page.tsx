import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Admin = () => {

   
    return (
        <div>
            <h1>Admin Page</h1>
            <Link href={'/'}><Button>Click me</Button></Link>
            
        </div>
    );
};

export default Admin;
