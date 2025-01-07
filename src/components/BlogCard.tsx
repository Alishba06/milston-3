import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col justify-between h-[500px] rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg transform transition duration-500 hover:scale-105">
      {/* Image Section */}
      <div className="relative flex-1 overflow-hidden rounded-t-lg">
        <Image
          src={urlForImage(post.image)}
          alt={post.title}
          fill
          className="object-cover hover:opacity-90 transition-opacity duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between gap-y-3 p-6">
        {/* Blog Title */}
        <h2 className="text-xl font-bold dark:text-white  leading-tight line-clamp-2">
          {post.title}
        </h2>

        {/* Blog Summary */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {post.summary}
        </p>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="px-5 py-2 mt-4 text-white font-medium text-center bg-gradient-to-r from-orange-400 to-pink-500 rounded-md hover:shadow-lg transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
