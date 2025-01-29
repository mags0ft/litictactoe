import { createClient } from "@/utils/supabase/server";
import { Flex } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Start a new game
      </p>
    </div>
  );
}
