// app/data/blogs.ts

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    author: "Kashish",
    date: "2026-05-15",
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content: `Next.js ek powerful React framework hai jo server-side rendering, static site generation, aur bahut kuch provide karta hai. 

    Key Features:
    - File-based routing
    - API routes
    - Image optimization
    - Built-in CSS support (Tailwind, CSS Modules)
    
    Next.js ke saath aap quickly production-ready apps bana sakte ho. Ye framework React ke upar built hai, toh agar aapko React aati hai, Next.js seekhna bahut easy hai.`,
    tags: ["Next.js", "React", "Beginner"],
    readTime: "15 min read"
  },
  {
    id: 2,
    title: "Understanding React Components",
    author: "Kashish",
    date: "2026-05-18",
    excerpt: "Deep dive into React components - Server vs Client components.",
    content: `React components do types ke hote hain Next.js 16 mein:

    1. Server Components (Default)
    - Server pe render hote hain
    - Data directly fetch kar sakte hain
    - JavaScript bundle mein include nahi hote
    
    2. Client Components ("use client")
    - Browser mein render hote hain
    - State, effects, event handlers use kar sakte hain
    - Interactivity ke liye zaroori
    
    Kab kya use karna hai ye samajhna important hai performance ke liye.`,
    tags: ["React", "Components", "Advanced"],
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Tailwind CSS Tips and Tricks",
    author: "Kashish",
    date: "2026-05-20",
    excerpt: "Best practices and useful Tailwind CSS classes for beginners.",
    content: `Tailwind CSS utility-first framework hai jo rapid development ke liye best hai.

    Useful Tips:
    - responsive prefixes: sm:, md:, lg:, xl:
    - hover, focus, active states
    - group hover effects
    - custom colors extend karna
    - @apply directive use karna complex components ke liye
    
    Tailwind ke saath CSS likhne ki zaroorat nahi padti, classes directly HTML mein likho!`,
    tags: ["CSS", "Tailwind", "Design"],
    readTime: "4 min read"
  }
];

export function getAllBlogs() {
  return blogs;
}

export function getBlogById(id: number) {
  return blogs.find(blog => blog.id === id);
}