"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sampleWords = "the quick brown fox jumps over the lazy dog".split(" ");

export default function TypingBox() {
    const [typed, setTyped] = useState("");
    const [startTime, setStartTime] = useState<number | null>(null);

    const handleTyping = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!startTime) setStartTime(Date.now());
        setTyped(e.currentTarget.value);
    };

    const calculateWPM = () => {
        if (!startTime) return 0;
        const words = typed.trim().split(" ").length;
        const timeElapsed = (Date.now() - startTime) / 60000;
        return Math.round(words / timeElapsed);
    };

    return (
        <div className="p-4">
            <div className="mb-4 text-xl flex gap-2 flex-wrap">
                {sampleWords.map((word, i) => (
                    <motion.span
                        key={i}
                        className="px-1"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
            <input
                className="w-full p-2 border border-gray-300 rounded"
                value={typed}
                onChange={() => {}}
                onKeyDown={handleTyping}
                placeholder="Start typing..."
            />
            <p className="mt-4">WPM: {calculateWPM()}</p>
        </div>
    );
}
