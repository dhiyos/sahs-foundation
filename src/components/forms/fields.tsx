import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

const labelClass =
  "text-[11px] font-medium tracking-[0.2em] uppercase text-ink-600";

const controlClass =
  "w-full bg-white border border-ink-900/15 rounded px-3 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-coral-600 focus:ring-offset-2";

export interface FieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function Field({ label, required, children, className }: FieldProps) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className={labelClass}>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${controlClass} ${props.className ?? ""}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${controlClass} min-h-[120px] resize-y ${props.className ?? ""}`}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${controlClass} ${props.className ?? ""}`} />;
}

export interface ConsentProps {
  name?: string;
}

export function Consent({ name = "consent" }: ConsentProps) {
  return (
    <label className="flex items-start gap-3 text-sm text-ink-600">
      <input
        type="checkbox"
        name={name}
        required
        className="mt-1 w-4 h-4 accent-coral-600"
      />
      <span>I agree to be contacted by SAHS Foundation.</span>
    </label>
  );
}
