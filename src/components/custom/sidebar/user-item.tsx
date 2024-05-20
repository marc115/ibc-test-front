import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLoginStore } from "@/modules/login/store/login.store";
import { LogOut } from "lucide-react";

export default function UserItem() {
    const user = useLoginStore((state) => state.user)
    const logout = useLoginStore((state) => state.logout)

    return <div className="bg-white shadow flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <Avatar>
            <AvatarImage src="https://github.com/marc115.png" alt="@shadcn" />
            <AvatarFallback className="bg-orange-300">
                {`${Array.from(user?.names ?? '')[0]}`}
                {`${Array.from(user?.lastName ?? '')[0]}`}
            </AvatarFallback>
        </Avatar>
        <div className="">
            <p className="md:text-[15px] font-bold text-sm line-clamp-2">{`${user?.names} ${user?.lastName}`}</p>
            <p className="text-[12px] text-neutral-500">{`${user?.email}`}</p>
        </div>

        <div className="cursor-pointer" onClick={() => logout()}>
            <LogOut className="hover:text-red-500" />
        </div>
    </div>;
}