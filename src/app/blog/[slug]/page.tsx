import AddComments from "@/components/AddComments";
import AllComments from "@/components/AllComment";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 60;

export default async function page({ params: { slug },searchParams}: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined ; comments?: string}}) {
  const commentsOrder:string= searchParams?.comments || "desc";
  console.log(searchParams,'serachParams')
  const query = `*[_type=='post' && slug.current == "${slug}"]
  {
    _id,
    title, summary, image, content,
    author->{bio, image, name},
    "comments": *[_type == "comment" && post._ref == ^._id] | order(_createdAt ${commentsOrder}){
    name,
    comment,
    _createAt,
    }
  }[0]`;

  let post;

  try {
    post = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>
       

      <Image
          src={urlFor(post.image)}
          width={500}
          height={500}
          alt={post.title}
          className="rounded"
        />

      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlFor(post.author.image)}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-li:list-disc prose-li-list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
        <PortableText value={post.content} />
        <AddComments postId={post?._id}/>
        <AllComments comments={post?.comments || []} slug={post?.slug?.current} commentsOrder={commentsOrder.toString()}/>
      </section>
    </article>
  );
}
