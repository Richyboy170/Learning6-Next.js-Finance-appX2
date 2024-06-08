"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Page() {
  const pathname = usePathname();
  return (
    <div>  
    <p>Dashboard Page</p>
    <Link href="/dashboard/customers"
    className={clsx( "text-blue-600" , { "text-green-600" : pathname === "/dashboard" }, )}>
      <p>customers page</p></Link>
    <Link href="/dashboard/invoices"><p>invoices page</p></Link>
    </div>
  );
}