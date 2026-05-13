import { SectionWatcher } from "@/_components/SectionWatcher";
import SlideUpInView from "@/_components/SlideUpInView";
import BlogCard from "@/_components/BlogCard";
import CTAButton from "@/_components/buttons/CTAButton";
import { ExternalLink } from "react-feather";
import { getBlogs } from "@/utils/api";

export default async function BlogSection() {
  const blogs = await getBlogs();

  return (
    <SectionWatcher id="blog">
      <SlideUpInView className="flex flex-col items-center">
        <p className="section-eyebrow">Blog</p>
        <h2 className="section-title">What I Write</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full mb-8">
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
        <CTAButton
          href="https://velog.io"
          icon={<ExternalLink size={16} />}
        >
          Go to Blog
        </CTAButton>
      </SlideUpInView>
    </SectionWatcher>
  );
}
