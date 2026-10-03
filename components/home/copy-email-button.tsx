"use client";

import { useEffect, useRef, useState } from "react";
import { buttonClassName } from "@/components/ui/button";
import { CopyIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type CopyEmailButtonProps = {
  email: string;
  /** id of the element holding the address, selected as a fallback when copying fails */
  addressId: string;
};

type CopyState = "idle" | "copied" | "failed";

const labels: Record<CopyState, string> = {
  idle: "Copy email",
  copied: "Copied!",
  failed: "Press Ctrl/⌘ + C",
};

async function copyText(value: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  // Fallback for non-secure contexts
  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  ta.remove();
  if (!ok) throw new Error("copy failed");
}

export function CopyEmailButton({ email, addressId }: CopyEmailButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = async () => {
    try {
      await copyText(email);
      setState("copied");
      setStatus("Email address copied to clipboard");
    } catch {
      // Select the address so the visitor can copy it manually
      const address = document.getElementById(addressId);
      if (address) window.getSelection()?.selectAllChildren(address);
      setState("failed");
      setStatus("Email address selected. Press Control or Command plus C to copy.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          buttonClassName({ variant: "plain" }),
          "min-w-[158px] justify-center text-ink",
          state === "copied" ? "border-mint bg-mint" : "border-butter bg-butter",
        )}
      >
        <CopyIcon className="size-4" />
        <span>{labels[state]}</span>
      </button>
      <p className="sr-only" role="status" aria-live="polite">
        {status}
      </p>
    </>
  );
}
