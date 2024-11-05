import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import UserCard from "../cards/UserCard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



async function RightSidebar ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | undefined };
  }) {

    const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

    const result = await fetchUsers({
        userId: user.id,
        pageNumber: searchParams?.page ? +searchParams.page : 1,
        pageSize: 25,
      });

    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-light-1">Similar Users</h3>
                <div className='mt-10 flex flex-col gap-9'>
        {result.users.length === 0 ? (
          <p className='no-result'>No Result</p>
        ) : (
          <>
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType='User'
              />
            ))}
          </>
        )}
      </div>
            </div>
        </section>
    );
};

export default RightSidebar;