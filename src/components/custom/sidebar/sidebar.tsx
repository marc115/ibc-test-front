import UserItem from "./user-item"
import { ScrollArea } from "../../ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { SideBarItem } from "./sidebar-item"
import { SideBarItemCollapsible } from "./sidebar-item-collapsible"
import { navbarItems } from "@/constants/navbar-menu"

export const SideBar = () => {

  return (

    <aside className=" hidden xl:flex flex-col gap-y-4 p-8 w-1/4 max-w-[20%] h-screen border-r bg-gray-100/40">
      <div className="w-full px-3">
        <AspectRatio ratio={16 / 9}>
          <img src="src/images/logo.png" alt="logo" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <UserItem />
      <ScrollArea >
        <div className="flex flex-col gap-y-2 font-semibold">
          {
            navbarItems.map((item) => (
              item.children
              ? <SideBarItemCollapsible key={item.name} name={item.name} path={item.path} children={item.children} />
              : <SideBarItem key={item.name} name={item.name} path={item.name} />
            ))
          }
        </div>
      </ScrollArea>
    </aside >

  )
}

