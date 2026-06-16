"use client";

import EditorNavBar from "@/components/EditorNavBar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const playSound = () => {
  const audio = new Audio("/sound/mixkit-single-key-type-2533.wav");
  audio.play();
};
const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
   const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const saveNote = async () => {
    try {
      setIsSaving(true);
      console.log(title, content);
      const res = await axios.post("/api/note/create-note", {
        title: title,
        body: content.trim(),
      });

      if (res.data.success) {
        toast.success("👍 note saved successfullly redirecting....");
        router.replace(`/dashboard`);
      }

      setError(null);
    } catch (err) {
      toast.error("an error occured 😭");

      setError("Failed to save note");
      console.error("Error saving note:", err);
    } finally {
      setIsSaving(false)
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setTimeout(() => {
      playSound();
    }, 200);

    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      saveNote();
    }
  };
  const handleTitleKeyDown = () => {
    setTimeout(() => {
      playSound();
    }, 200);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl">{error}</div>
        </div>
      </div>
    );
  }

  
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-white dark:bg-neutral-900 ">
      <EditorNavBar deleteDiabled={true} onSubmitClick={saveNote} isSaving={isSaving} />

      <main className="w-[100%] h-[100%]  rounded-md overflow-y-scroll flex flex-col items-center   ">
        <div className="min-h-[600px] w-[60%] border-2 mt-10 rounded-md note-shadow bg-white dark:bg-neutral-800 border-gray-200 dark:border-neutral-500 p-8 flex flex-col i">
          {/* Title */}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleTitleKeyDown}
            placeholder="Note title..."
            className="text-3xl text-black rounded w-full font-bold dark:text-neutral-200  border border-neutral-300 focus:ring-0 outline-none dark:border-neutral-600 shadow-none p-2 mb-6 bg-transparent focus-visible:ring-0"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your thoughts..."
            onKeyDown={handleKeyDown}
            className="min-h-[400px] text-lg  bg-transparent border-none text-black outline-none focus:ring-0 dark:text-neutral-200 shadow-none p-1  resize-none focus-visible:ring-0 leading-7"
            style={{
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, rgba(71, 70, 70, 0.911) 27px, rgba(71, 70, 70, 0.911) 28px)",
              lineHeight: "28px",
            }}
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 handwritten text-sm">
            {
              "Tip: Use Ctrl+S to save quickly, or let your thoughts flow freely"
            }
          </p>
        </div>
      </main>
    </div>
  );
};

export default Page;
