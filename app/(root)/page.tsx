import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import ThreadCard from '@/components/cards/ThreadCard';
import Pagination from '@/components/shared/Pagination';

import { fetchPosts } from '@/lib/actions/thread.actions';
import { fetchUser } from '@/lib/actions/user.actions';

async function Home({ searchParams }: { searchParams: { page?: string } }) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  // Extract and parse page number, defaulting to 1 if undefined or invalid
  const pageNumber = searchParams.page
    ? parseInt(searchParams.page, 10) || 1
    : 1;

  // Fetch posts
  const result = await fetchPosts(pageNumber, 30);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>

      <Pagination path="/" pageNumber={pageNumber} isNext={result.isNext} />
    </>
  );
}

export default Home;
