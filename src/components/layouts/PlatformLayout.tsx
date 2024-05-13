import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { useState } from "react";
import { User } from "@nextui-org/user";

interface Props {
    children: React.ReactNode
}

export const PlatformLayout = ({ children }: Props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <>
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                // className="bg-blue-400 text-white"
            >
                <NavbarContent className="sm:hidden text-white" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        {/* <AcmeLogo /> */}
                        <img src="src/images/logo.png" className="w-72 h-36 my-10 m-auto" alt="Descriptive alt text" />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        {/* <AcmeLogo /> */}
                        <img src="src/images/logo.png" className="w-10 h-10 my-10 m-auto" alt="Descriptive alt text" />
                    </NavbarBrand>
                    <NavbarItem>
                        <a color="foreground" href="#">
                            Features
                        </a>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <a href="#" aria-current="page">
                            Customers
                        </a>
                    </NavbarItem>
                    <NavbarItem>
                        <a color="foreground" href="#">
                            Integrations
                        </a>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <User
                            name="Jane Doe"
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                isBordered: true
                            }}
                        />
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <a
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                            // size="lg"
                            >
                                {item}
                            </a>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div className="p-5">
                {children}

            </div>
        </>
    )
}
