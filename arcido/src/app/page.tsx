import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <h1 className="text-white">Welcome to Arcido</h1>
      </main>
    </div>
  );
}
