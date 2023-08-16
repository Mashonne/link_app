import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen relative bg-[url('/background.jpg')] bg-no-repeat bg-cover">
      <SignIn />
    </div>
  );
}