import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  const NavLinks = () => (
    <div className="flex items-center gap-4 flex-1">
      <div className="flex items-center gap-4 ml-8">
        <Button asChild variant="ghost" size="sm">
          <Link href="/about">About Us</Link>
        </Button>
        <div className="h-6 w-px bg-border/50 mx-2" />
        <Button asChild variant="ghost" size="sm">
          <Link href="/media">Media</Link>
        </Button>
        <div className="h-6 w-px bg-border/50 mx-2" />
        <Button asChild variant="ghost" size="sm">
          <Link href="/community">Community</Link>
        </Button>
        <div className="h-6 w-px bg-border/50 mx-2" />
        <Button asChild variant="ghost" size="sm">
          <Link href="/shop">Shop</Link>
        </Button>
        <div className="h-6 w-px bg-border/50 mx-2" />
        <Button asChild variant="ghost" size="sm">
          <Link href="/playground">Playground</Link>
        </Button>
        
        {/* Members Only Section */}
        {user && (
          <>
            <div className="h-6 w-px bg-border/50 mx-2" />
            <span className="text-xs text-muted-foreground">Members:</span>
            <Button asChild variant="ghost" size="sm">
              <Link href="/members/dashboard">Dashboard</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/members/requests">Requests</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <nav className="flex items-center justify-between w-full gap-8">
      <NavLinks />
      {user ? (
        <div className="flex items-center gap-4">
          Hey, {user.email}!
          <form action={signOutAction}>
            <Button type="submit" variant="outline">
              Sign out
            </Button>
          </form>
          <Button asChild variant="default">
            <Link href="/profile">Profile</Link>
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild size="sm" variant="default">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
