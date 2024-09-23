import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "@/components/mdx/init";
import { Spotlight } from "@/components/ui/spotlight";

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (mdxPost) => mdxPost._raw.flattenedPath === params.slug,
  );

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const { title } = post;

  return {
    title,
  };
};

function PostLayout({ params }: { readonly params: { slug: string } }) {
  const post = allPosts.find(
    (mdxPost) => mdxPost._raw.flattenedPath === params.slug,
  );

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="flex flex-col items-center">
      {/* <time dateTime={post.date}> */}
      {/*   {format(parseISO(post.date), "LLLL d, yyyy")} */}
      {/* </time> */}
      <article className="flex max-w-[100vw] flex-col max-md:px-4 sm:max-w-prose">
        <h1 className="ml-4 scroll-m-20 bg-gradient-to-b from-text to-subtext1/80 bg-clip-text text-left text-4xl font-extrabold tracking-tight text-transparent lg:text-5xl my-16">
          {post.title}
        </h1>
        <MDXContent components={mdxComponents} />
      </article>
    </div>
  );
}

export default PostLayout;
