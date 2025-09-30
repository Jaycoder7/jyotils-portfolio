export default function Blog() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Sharing my learning journey and development experiences
          </p>
        </div>

        <div className="text-center py-20">
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently working on creating valuable content to share my development journey, 
            project insights, and technical learnings. Stay tuned for upcoming blog posts!
          </p>
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