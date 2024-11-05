import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  // Fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Convert `userInfo._id` to a string
  const userId = userInfo._id.toString();

  return (
    <>
      <h1 className="head-text">Upload Posts</h1>

      {/* Pass userId as a string */}
      <PostThread userId={userId} />
    </>
  );
}

export default Page;
