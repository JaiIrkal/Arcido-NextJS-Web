import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div>
          <h1 className="text-white text-center text-[150px] font-bold">Arcido</h1>
          <p className="absolute text-right -mt-8 ml-70 tracking-[6px]">DIGITAL DONE RIGHT.</p>
        </div>
      </main>
    </div>
  );
}
