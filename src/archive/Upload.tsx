import { useState, useEffect } from "react";
import { Upload as UploadIcon, Check, Loader2 } from "lucide-react";

export function Upload() {
    const [status, setStatus] = useState<"idle" | "processing" | "completed">("idle");
    const [progress, setProgress] = useState(0);
    const [checklist, setChecklist] = useState([
        { id: 1, label: "Transcribing...", completed: false },
        { id: 2, label: "Captioning...", completed: false },
        { id: 3, label: "Trimming...", completed: false },
    ]);

    useEffect(() => {
        if (status === "processing") {
            const duration = 10000; // 10 seconds total
            const interval = 100; // Update every 100ms
            const step = (interval / duration) * 100;

            const timer = setInterval(() => {
                setProgress((prev) => {
                    const next = prev + step;
                    if (next >= 100) {
                        clearInterval(timer);
                        setStatus("completed");
                        return 100;
                    }
                    return next;
                });
            }, interval);

            return () => clearInterval(timer);
        }
    }, [status]);

    useEffect(() => {
        if (status === "processing") {
            setChecklist((prev) =>
                prev.map((item) => {
                    if (item.id === 1 && progress >= 33) return { ...item, completed: true };
                    if (item.id === 2 && progress >= 66) return { ...item, completed: true };
                    if (item.id === 3 && progress >= 95) return { ...item, completed: true };
                    return item;
                })
            );
        }
    }, [progress, status]);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setStatus("processing");
    };

    const handleFileSelect = () => {
        setStatus("processing");
    };

    return (
        <section className="bg-[#f9f9f4] min-h-[80vh] w-full px-6 py-18 md:py-10 md:px-12 lg:px-20" aria-label="Upload section">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-4xl md:text-5xl lg:text-5xl text-[#2e2e2e] leading-[1.1]">
                        Magic Edit
                    </h1>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed max-w-xl">
                        Upload your raw footage and let AI do the heavy lifting.
                    </p>
                </div>

                <div className={`${status === "completed"
                    ? "p-0"
                    : "bg-white/50 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-3xl p-8 md:p-12"
                    }`}>
                    {status === "idle" && (
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            className="flex flex-col items-center justify-center gap-6 cursor-pointer group"
                            onClick={handleFileSelect}
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <UploadIcon className="w-8 h-8 text-[#2e2e2e]" />
                            </div>
                            <div className="text-center">
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xl text-[#2e2e2e]">
                                    Drop your videos here
                                </p>
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-500 mt-2">
                                    or click to browse files
                                </p>
                            </div>
                        </div>
                    )}

                    {status === "processing" && (
                        <div className="flex flex-col gap-8 max-w-md mx-auto">
                            <div className="space-y-4">
                                {checklist.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${item.completed ? 'bg-green-500' : 'bg-gray-200'}`}>
                                            {item.completed ? (
                                                <Check className="w-4 h-4 text-white" />
                                            ) : (
                                                <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                                            )}
                                        </div>
                                        <span className={`font-['Plus_Jakarta_Sans',sans-serif] font-medium ${item.completed ? 'text-[#2e2e2e]' : 'text-gray-400'}`}>
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-[#2e2e2e] h-full transition-all duration-100 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}

                    {status === "completed" && (
                        <div className="flex flex-col items-center gap-8">
                            <div className="w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl">
                                <video
                                    src="/video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                {/* <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-2xl text-[#2e2e2e]">
                                    Your Magic Edit is ready!
                                </h3> */}
                                <button
                                    onClick={() => {
                                        setStatus("idle");
                                        setProgress(0);
                                        setChecklist(c => c.map(i => ({ ...i, completed: false })));
                                    }}
                                    className="mt-0 mr-6 bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-3 px-8 rounded-full hover:scale-105 transition-transform"
                                >
                                    Download Video
                                </button>
                                <button
                                    onClick={() => {
                                        setStatus("idle");
                                        setProgress(0);
                                        setChecklist(c => c.map(i => ({ ...i, completed: false })));
                                    }}
                                    className="mt-0 bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-3 px-8 rounded-full hover:scale-105 transition-transform"
                                >
                                    Upload Another
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
