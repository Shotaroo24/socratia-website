import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        background: "linear-gradient(175deg, #0B1522 0%, #162640 60%, #1E3355 100%)",
      }}
    >
      <SignUp
        forceRedirectUrl="/dashboard"
        appearance={clerkAppearance}
      />
    </div>
  );
}
