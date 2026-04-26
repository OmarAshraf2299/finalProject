"use client"

import React, {useContext} from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import logo from "@/images/Freshcart-logo.png"
import { CiHeart } from "react-icons/ci"
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cartContext } from "../_context/CartContextProvider"


export default function Navbar() {

  const { numberOfCartItems } = useContext( cartContext)

  const session = useSession()

 console.log(session ,"session in navbar");

  function handelLogout(){
    signOut({ redirect : true , callbackUrl : "/login" })




    console.log("logout");
  }







  return (
    <NavigationMenu className=" bg-gray-50 max-w-none py-3 justify-between px-20">
      
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt="Logo" />
      </div>

      <div className="w-1/2">
        <input type="text" placeholder="Search for products, brands and more......" className=" border-2 rounded-2xl py-3 px-5 " />  
      </div>


      <NavigationMenuList className="text-lg">

        
        <NavigationMenuItem >
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/shop">shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-96">
                    <ListItem href="/docs" title="Introduction">
                        Re-usable components built with Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                    </ListItem>
                    </ul>
                </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/brands">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/wishlist"><CiHeart /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent relative hover:bg-transparent" href="/shop">
            <span className="bg-green-500 text-white text-xs p-1 rounded-xl absolute top-1 right-0 ">{numberOfCartItems}</span>

            <FaShoppingCart /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/userprofile"><FaUserCircle /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>




  {/* /////////////////////////////////////////////////////////////////////////// */}

      {

        session.data ?

      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Button className="bg-green-500 hover:bg-green-600" onClick={handelLogout}>logout</Button>
          </NavigationMenuLink>
        </NavigationMenuItem> :
        <>
        
  

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/login">login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/singup">signup</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        
        
        
        </>












      }



        









      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
