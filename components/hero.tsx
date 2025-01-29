import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">litictactoe</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Free Tic-Tac-Toe for only the most advanced players in history, forever.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <Button type="submit" variant={"outline"} size={"lg"}>
        <Link href="/sign-up">Join for free, today</Link>
      </Button>
    </div>
  );
}
