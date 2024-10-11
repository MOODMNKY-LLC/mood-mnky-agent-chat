import AccountForm from "@/app/protected/account-form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <AccountForm user={user} />
    </div>
  );
}
