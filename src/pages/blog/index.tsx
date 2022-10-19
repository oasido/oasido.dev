import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Wrapper from "~/components/Wrapper";
import readingTime from "reading-time";

export const getStaticProps = () => {
  const posts = allPosts
    .filter((post: Post) => !post.draft)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return { props: { posts } };
};

const PostCard = (post: Post) => {
  return (
    <Link href={post.url}>
      <a>
        <div className="mb-6 cursor-pointer rounded-lg p-4 transition-all duration-300 hover:bg-zinc-800">
          <h3 className="text-2xl text-t-pink">{post.title}</h3>
          <p className="pt-4 text-slate-200">{post.description}</p>

          <div className="text- flex items-center gap-2 pt-4 text-sm">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <span>•</span>
            <span>{readingTime(post.body.code).text}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Wrapper title="oasido • blog" description="Web development blog">
      <h1 className="pt-14 text-3xl font-bold text-t-purple">Blog</h1>
      <p className="pt-1 text-lg text-slate-200">
        Here I write about programming and tech I like. You can expect writings
        on new tech I explore and web development.
      </p>
      <div className="mx-auto max-w-2xl pt-16">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Blog;
