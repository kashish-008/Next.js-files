export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white text-slate-500">
      <div className="mx-auto max-w-4xl px-4 py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Simple Todo App. Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}