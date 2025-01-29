import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Game({ params }: { params: { id: string } }) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }

    const { id } = params;

    return (
        <>
            <main className="flex-1 flex flex-col gap-6 px-4">

            </main>
        </>
    );
}
