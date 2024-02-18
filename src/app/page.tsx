import Link from "next/link";
import Button from "@/components/Button";
import Post from "@/components/Post";
import { getPosts } from "./actions";

// For vercel - prisma issue
interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Post here your message!</h1>
          <h6 className="leading-10 text-slate-400">
            Add your posts so everybody can see it!!!!
          </h6>
        </div>
        <Link href="/new-post">
          <Button>Create new Post</Button>
        </Link>
      </header>
      <main className="flex flex-wrap gap-5 py-10">
        {posts.map((post: Post, index) => (
          <Post key={index} {...post} />
        ))}
      </main>
    </div>
  );
}
