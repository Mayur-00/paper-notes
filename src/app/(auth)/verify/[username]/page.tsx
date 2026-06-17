"use client";

import  { useEffect, useState } from "react";
import { CheckCircle2, Loader, AlertCircle } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios, { isAxiosError } from "axios";
import { toast } from "sonner";

const Page = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationCode, setVerificationCode] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const router = useRouter();
  const searchParam = useSearchParams();

  useEffect(() => {
    const token = searchParam.get("token");
    const username = params.username as string;

    if (token && username) {
      setVerificationCode(token);
      setUsername(username);
    } else {
      setError("Missing verification token or username");
      setIsVerifying(false);
    }
  }, [searchParam, params]);

  const onVerify = async () => {
    try {
      setIsVerifying(true);
      setError(null);

      const res = await axios.post(`/api/auth/verify-email`, {
        username,
        token: verificationCode,
      });

      if (res.data.success) {
        setIsVerified(true);
        toast.success("Email verified successfully!");

        // Redirect after a short delay to show success message
        setTimeout(() => {
          router.replace("/sign-in");
        }, 2000);
      } else {
        throw new Error(res.data.message || "Verification failed");
      }
    } catch (error) {
      console.log(error);

      // Extract meaningful error message
      let errorMessage;
      if (isAxiosError(error)) {
        errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Verification failed. Please try again.";
      }

      setError("Failed To Connect, Please Check you Internet Connection");
      toast.error(errorMessage || "Failed To Verify");
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    if (verificationCode.length > 0 && username) {
      onVerify();
    }
  }, [verificationCode, username]);

  const handleRetry = () => {
    if (verificationCode && username) {
      onVerify();
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      {isVerifying && (
        <>
          <Loader className="mb-6 h-16 w-16 animate-spin text-foreground" />
          <h1 className="mb-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            Verifying Email <span className="animate-pulse">...</span>
          </h1>
          <p className="text-foreground/50">
            Please wait while we verify your email address.
          </p>
        </>
      )}

      {isVerified && (
        <>
          <CheckCircle2 className="mb-6 h-16 w-16 text-green-600" />
          <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
            Email Verified!
          </h1>
          <p className="max-w-md text-foreground/50">
            Your email has been successfully verified. You can now log in to
            your account and start using the app.
          </p>
          <p className="mt-4 text-sm text-foreground/50">
            Redirecting you to the login page...
          </p>
        </>
      )}

      {!isVerifying && !isVerified && error && (
        <>
          <AlertCircle className="mb-6 h-16 w-16 text-red-500" />
          <h1 className="mb-3 text-3xl font-semibold text-foreground md:text-4xl">
            Verification Failed
          </h1>
          <p className="mb-6 max-w-md text-red-600">{error}</p>
          <div className="space-y-3">
            <button
              onClick={handleRetry}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
            >
              Try Again
            </button>
            <p className="text-sm text-gray-500">
              or{" "}
              <button
                onClick={() => router.push("/sign-up")}
                className="text-blue-600 hover:underline"
              >
                go back to sign up
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
