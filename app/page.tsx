import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-primary">DaisyUI Works!</h1>
        <button className="btn btn-secondary">Click me</button>
        <Link href="/users" className="btn btn-primary">
          View Users
        </Link>
      </div>
    </main>
  );
}
