import { useLoginStore } from "@/modules/login/store/login.store";
import { LogOut } from "lucide-react";

export default function UserItem() {
    const user = useLoginStore((state) => state.user)
    const logout = useLoginStore((state) => state.logout)

    return <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>GD</p>
        </div>
        <div className="grow">
            <p className="text-[16px] font-bold">{`${user?.names} ${user?.lastName}`}</p>
            <p className="text-[12px] text-neutral-500">{`${user?.email}`}</p>
        </div>

        <div className="cursor-pointer" onClick={() => logout()}>
            <LogOut className="hover:text-red-500" />
        </div>
    </div>;
}