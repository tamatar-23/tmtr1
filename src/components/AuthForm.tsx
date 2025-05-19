"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            alert("Auth failed: " + err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-sm mx-auto">
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                {isLogin ? "Login" : "Register"}
            </button>
            <p
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer text-sm underline text-center"
            >
                {isLogin ? "New? Register" : "Already have an account? Login"}
            </p>
        </form>
    );
}
