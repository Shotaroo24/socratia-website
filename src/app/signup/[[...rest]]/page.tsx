import { SignUp } from "@clerk/nextjs";

const clerkAppearance = {
  variables: {
    colorPrimary: "#C9A84C",
    colorBackground: "#FFFFFF",
    colorText: "#0B1522",
    colorTextSecondary: "#5A6A7A",
    colorInputBackground: "#FAF7F2",
    colorInputText: "#0B1522",
    borderRadius: "6px",
    fontFamily: "var(--font-dm-sans), sans-serif",
  },
  elements: {
    card: "shadow-xl border border-[#E8E2D6]",
    headerTitle: "font-semibold text-[#0B1522]",
    headerSubtitle: "text-[#5A6A7A]",
    formButtonPrimary:
      "bg-[#C9A84C] text-[#0B1522] hover:bg-[#E8D5A8] font-semibold rounded-[20px]",
    footerActionLink: "text-[#C9A84C] hover:text-[#A07B2E]",
    identityPreviewEditButton: "text-[#C9A84C]",
    formFieldInput: "border-[#E8E2D6] focus:border-[#C9A84C] focus:ring-[#C9A84C]",
    dividerLine: "bg-[#E8E2D6]",
    dividerText: "text-[#5A6A7A]",
    socialButtonsBlockButton: "border-[#E8E2D6] text-[#0B1522] hover:bg-[#FAF7F2]",
    socialButtonsBlockButtonText: "text-[#0B1522]",
  },
};

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
