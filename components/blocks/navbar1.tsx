"use client";

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login?: {
      text: string;
      url: string;
    };
    signup?: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
  mobileExtraLinks = [
    { name: "Press", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Imprint", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  const pathname = usePathname();

  const renderMenuItem = (item: MenuItem) => {
    const isActive = pathname === item.url;
    
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title} className="text-muted-foreground">
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80 p-3 bg-background rounded-lg shadow-lg border border-border">
              <NavigationMenuLink>
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <a
                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                      href={subItem.url}
                    >
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <a
        key={item.title}
        className={cn(
          "group relative inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all",
          isActive 
            ? "text-foreground" 
            : "text-muted-foreground hover:text-foreground"
        )}
        href={item.url}
      >
        {item.title}
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute inset-0 rounded-full bg-secondary"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </a>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    const isActive = pathname === item.url;
    
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <a
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                href={subItem.url}
              >
                {subItem.icon}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <a 
        key={item.title} 
        href={item.url} 
        className={cn(
          "font-semibold transition-colors",
          isActive ? "text-brand" : "text-foreground"
        )}
      >
        {item.title}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-b border-border/50" />
      <div className="relative py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-10">
              <a href={logo.url} className="flex items-center group">
                <img 
                  src={logo.src} 
                  className="w-36 transition-transform group-hover:scale-105" 
                  alt={logo.alt} 
                />
              </a>
              <div className="flex items-center">
                <NavigationMenu>
                  <NavigationMenuList className="gap-1">
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {auth.login && (
                <Button asChild variant="ghost" size="sm" className="rounded-full">
                  <a href={auth.login.url}>{auth.login.text}</a>
                </Button>
              )}
              {auth.signup && (
                <Button asChild size="sm" className="rounded-full bg-brand hover:bg-brand/90 text-brand-foreground shadow-sm">
                  <a href={auth.signup.url}>{auth.signup.text}</a>
                </Button>
              )}
            </div>
          </nav>
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <a href={logo.url} className="flex items-center">
                <img src={logo.src} className="w-28" alt={logo.alt} />
              </a>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center">
                        <img src={logo.src} className="w-28" alt={logo.alt} />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                    className="my-6 flex flex-col gap-6"
                  >
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => (
                        <motion.div
                          key={item.title}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          {renderMobileMenuItem(item)}
                        </motion.div>
                      ))}
                    </Accordion>
                    {mobileExtraLinks.length > 0 && (
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="border-t py-4"
                      >
                        <div className="grid grid-cols-2 justify-start">
                          {mobileExtraLinks.map((link, idx) => (
                            <a
                              key={idx}
                              className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                              href={link.url}
                            >
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="flex flex-col gap-3"
                    >
                      {auth.login && (
                        <Button asChild variant="outline" className="rounded-full">
                          <a href={auth.login.url}>{auth.login.text}</a>
                        </Button>
                      )}
                      {auth.signup && (
                        <Button asChild className="rounded-full bg-brand hover:bg-brand/90">
                          <a href={auth.signup.url}>{auth.signup.text}</a>
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Navbar1 };
