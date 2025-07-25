"use client";
import { useState } from "react";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <Head>
        <title>AasaraFi | Login</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl p-8 max-w-4xl w-full">
          {/* Left Panel */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              Welcome to AasaraFi
            </h1>
            <p className="text-gray-600 mb-6">
              Onboard Real-World Assets into DeFi
            </p>
            <img
              src="/assets/illustration.svg"
              alt="AasaraFi Illustration"
              className="w-full max-w-xs"
            />
          </div>

          {/* Right Panel (Login Form) */}
          <div className="md:w-1/2 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleEmailLogin}
                className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Login with Email
              </button>

              <div className="text-center text-gray-500">or</div>

              {/* <ConnectButton showBalance={false} accountStatus="address" /> */}

              <p className="text-xs text-gray-400 text-center mt-6">
                By logging in, you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
