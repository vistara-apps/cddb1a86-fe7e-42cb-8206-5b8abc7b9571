'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-heading text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-body text-gray-600 mb-6">
          We encountered an error while loading LinguaCzech. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
