// treat it as the route of the app folder
// used to make page interactive, so that next 13 knows not to treat it like a server component.

"use client";
import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flex flex-col justify-center items-center sm:mx-auto sm:w-full sm:max-w-md">
        <Image src="/images/logo.png" alt="Logo" height="48" width="48" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* AuthForm */}
      <AuthForm />
    </div>
  );
}
