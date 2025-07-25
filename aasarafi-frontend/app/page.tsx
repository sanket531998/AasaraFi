// app/(auth)/login/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginPage() {
  const { login, logout, authenticated, user } = usePrivy();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex rounded-3xl shadow-2xl overflow-hidden w-[90%] max-w-6xl h-[80vh] bg-amber-100">
        <div className="w-1/2 bg-white flex flex-col justify-center px-12 py-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            AasaraFi
            <p className="text-xl font-medium">
              Get loans with trust, not paperwork
            </p>
          </h1>

          <div className="flex flex-col items-center p-4">
            {authenticated ? (
              <>
                <p>
                  👋 Welcome{" "}
                  {typeof user?.email === "string"
                    ? user.email
                    : typeof user?.email === "object" && user?.email !== null
                    ? user.email.address // or user.email.value, depending on your Email type
                    : user?.google?.name}
                </p>
                {/* <p>🔑 Wallet: {wallet?.address}</p> */}
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <button
                onClick={login}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
