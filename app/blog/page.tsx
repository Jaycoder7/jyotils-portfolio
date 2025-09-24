export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "My Journey into Web Development",
      date: "2024-03-15",
      excerpt: "How I started learning React and Next.js, the challenges I faced, and the projects that helped me grow as a developer.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building My First Full-Stack Application",
      date: "2024-02-28",
      excerpt: "A deep dive into creating a task management app with authentication, database integration, and responsive design.",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "What I Learned from Open Source Contributions",
      date: "2024-02-10",
      excerpt: "My experience contributing to open source projects and how it improved my coding skills and collaboration abilities.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Mastering CSS Grid and Flexbox",
      date: "2024-01-22",
      excerpt: "A practical guide to modern CSS layout techniques with examples from my portfolio projects.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center sm:text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sharing my learning journey and development experiences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer hover:bg-[#f9f9f9] dark:hover:bg-[#1a1a1a]"
            >
              <div className="flex justify-between items-start mb-3">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </time>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-3 hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center mt-12">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
          >
            &larr; Back to Home
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="mailto:student@email.com"
          >
            Contact Me
          </a>
        </div>
      </main>
    </div>
  );
}