import { useState, useRef, useEffect, type KeyboardEvent } from "react";

import { Mic, MicOff, ImagePlus, Send, Sparkles } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SmartInputProps {
    onSubmit: (value: string) => void;
    placeholder?: string;
    isLoading?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartInputField({
    onSubmit,
    placeholder = "Beli kopi 20k, bayar listrik 500rb...",
    isLoading = false,
}: SmartInputProps) {
    const [value, setValue] = useState("");
    const [isListening, setIsListening] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const recognitionRef = useRef<SpeechRecognitionEvent | null>(null);

    // Auto-resize textarea
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [value]);

    // Speech recognition setup
    const toggleMic = () => {
        if (isListening) {
            recognitionRef.current?.stopPropagation();
            setIsListening(false);
            return;
        }

        const SpeechRecognition =
            (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) return;

        const recognition = new SpeechRecognition();
        recognition.lang = "id-ID";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (e: SpeechRecognitionEvent) => {
            const transcript = e.results[0][0].transcript;
            setValue((prev) => (prev ? prev + " " + transcript : transcript));
            setIsListening(false);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);

        recognitionRef.current = recognition;
        recognition.start();
        setIsListening(true);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (!value.trim() || isLoading) return;
        onSubmit(value.trim());
        setValue("");
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-4 w-full shadow-sm">
            {/* Label */}
            <div className="flex items-center gap-1.5 mb-3">
                <Sparkles size={16} color="blueviolet" />
                <span className="text-[11px] font-normal tracking-widest text-gray-400 uppercase">
                    Smart Input
                </span>
            </div>

            {/* Textarea */}
            <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                rows={4}
                className="w-full text-sm text-gray-700 placeholder-gray-300 resize-none outline-none bg-transparent leading-relaxed min-h-[48px] max-h-40"
            />

            {/* Listening indicator */}
            {isListening && (
                <div className="flex items-center gap-2 px-3 py-2 bg-red-50 rounded-xl mb-3">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-sm text-red-400 font-medium">Mendengarkan...</span>
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between mt-2">
                {/* Left actions */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleMic}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-150
              ${isListening
                                ? "border-red-200 bg-red-50 text-red-400"
                                : "border-gray-200 bg-white text-gray-400 hover:bg-gray-50"
                            }`}
                    >
                        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                    </button>
                    <button className="w-8 h-8 rounded-xl flex items-center justify-center border border-gray-200 bg-white text-gray-400 hover:bg-gray-50 transition-all duration-150">
                        <ImagePlus size={18} />
                    </button>
                </div>

                {/* Right: hint + send */}
                <div className="flex items-center gap-3">
                    <span className="hidden sm:block text-[11px] text-gray-400 select-none">
                        Enter untuk kirim · Shift+Enter baris baru
                    </span>
                    <button
                        onClick={handleSubmit}
                        disabled={!value.trim() || isLoading}
                        className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border transition-all duration-150
              ${value.trim() && !isLoading
                                ? "border-gray-300 bg-neutral-900 text-white hover:bg-gray-50"
                                : "border-gray-100 bg-gray-50 text-gray-400 font-normal cursor-not-allowed"
                            }`}
                    >
                        <Send size={16} />
                        Kirim
                    </button>
                </div>
            </div>
        </div>
    );
}
