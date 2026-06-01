import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import SectionHeader from "@/_components/SectionHeader";
import BlogCard from "@/_components/BlogCard";
import BlogGoButton from "@/_components/BlogGoButton";
import { getBlogs } from "@/utils/api";

export default async function BlogSection() {
  const blogs = await getBlogs();

  return (
    <SectionWatcher id="blog">
      <SlideUpInView className="flex flex-col items-center">
        <SectionHeader section="blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full mb-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              forwardLink={blog.forwardLink}
              bgImageUrl={blog.bgImageUrl}
            />
          ))}
        </div>
        <BlogGoButton />
      </SlideUpInView>
    </SectionWatcher>
  );
}
