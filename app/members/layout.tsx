import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {children}
    </div>
  );
}
