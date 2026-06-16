"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import NotesCard from "./NotesCard";
import { Document } from "mongoose";

export interface INote extends Document {
  author: string;
  icon: string;
  title: string;
  body: string;
  folderId: string;
  status: string;
  isArchieved: boolean;
  isPinned: boolean;
  __v:number;
  updatedAt: Date;
  createdAt?: Date;
}
const NotesGrid = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to truncate text to specified word count
  const truncateText = (text: string, wordLimit = 20) => {
    return text.slice(0, wordLimit);
  };

  // Function to format date to relative time
  const getRelativeTime = (dateString: Date) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now.getTime() - date.getTime();

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  // Fetch all notes (initial load)
  const fetchNotes = useCallback(async () => {
    try {
      setIsFetching(true);
      setError(null);

      const response = await axios.get(`/api/note/get-notes`);

      if (response.data.success) {
        setNotes(response.data.notes);
        // console.log("Fetched notes:", response.data.notes);
      }
    } catch (error) {
      toast.error("Can't get notes");
      setError("Failed to connect, make sure you have stable connection");
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  if (isFetching) {
    return (
      <div className="w-full">
        <div className="flex h-64 items-center justify-center">
          <div className="text-gray-500">Loading notes...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full ">
      {/* Search Input */}

      {/* Results Summary */}

      {/* Notes Grid */}
      {error && (
        <div className="flex h-64 flex-col items-center justify-center text-gray-500">
          <div className="mb-2 text-lg">'No notes available</div>
          <div className="text-sm">{error}</div>
        </div>
      )}

      {notes.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center text-gray-500">
          <div className="mb-2 text-lg">'No notes available</div>
          <div className="text-sm">'Create your first note to get started</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NotesCard
              title={note.title}
              description={truncateText(note.body, 100) + "..."}
              time={getRelativeTime(note.updatedAt)}
              noteId={note._id.toString()}
              key={note.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesGrid;
