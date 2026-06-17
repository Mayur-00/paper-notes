import { ArrowLeft, Loader2, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EditorNavBarProps {
  onSubmitClick: () => Promise<void>;
  isSaving: boolean;
  deleteDiabled: boolean;
  hasUnsavedChanges?: boolean;
  onDelete?: () => Promise<void>;
  isDeleting?: boolean;
}

const EditorNavBar = ({
  onSubmitClick,
  isSaving,
  hasUnsavedChanges,
  deleteDiabled,
  onDelete,
  isDeleting,
}: EditorNavBarProps) => {
  
  const handleClick = async () => {
    onSubmitClick();
  };
  return (
    <nav className="flex h-[10%] w-full items-center justify-between border bg-white px-5 shadow-lg md:h-[15%] md:px-20 dark:bg-neutral-900">
      <h1 className=" ">
        <Link
          href={"/dashboard"}
          className="text-md flex items-center justify-center gap-3 text-black dark:text-neutral-500"
        >
          <ArrowLeft className="size-5" /> <span> Back To Notes</span>
        </Link>
      </h1>
      <div className="flex items-center gap-5">
        <button
          onClick={handleClick}
          className="flex h-10 w-25 cursor-pointer items-center justify-center gap-1 rounded border border-black bg-white text-black hover:bg-neutral-50 md:h-10 md:w-30 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-600"
        >
          {isSaving && <Loader2 className="size-5 animate-spin" />}

          <Save
            className={`size-5 ${hasUnsavedChanges ? "animate-bounce" : "animate-none"}`}
          />
          <span>save</span>
        </button>

        <button
          disabled={deleteDiabled}
          onClick={onDelete}
          className="flex h-10 w-25 cursor-pointer items-center justify-center gap-2 rounded bg-red-300 text-black hover:bg-red-200 hover:text-black md:h-10 md:w-30 dark:bg-red-200 dark:hover:bg-red-300"
        >
          {isDeleting ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Trash2 className="size-5" />
          )}{" "}
          <span> Delete </span>
        </button>
      </div>
    </nav>
  );
};

export default EditorNavBar;
