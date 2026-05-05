import type { FormEvent } from "react";
import { Button } from "../ui/Button";
import { Field, Input, Select, Textarea, Consent } from "./fields";
import { pillars } from "../../lib/pillars";
import { site } from "../../lib/site";

const initiativeOptions = [
  ...pillars.map((p) => p.title),
  "General",
];

export function PartnerForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Partnership inquiry — ${fd.get("name") || "SAHS Foundation"}`;
    const body = [
      `Name: ${fd.get("name") ?? ""}`,
      `Organisation: ${fd.get("organisation") ?? ""}`,
      `Email: ${fd.get("email") ?? ""}`,
      `Phone: ${fd.get("phone") ?? ""}`,
      `Initiative of interest: ${fd.get("initiative") ?? ""}`,
      "",
      "Message:",
      `${fd.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Name" required>
        <Input name="name" required autoComplete="name" />
      </Field>
      <Field label="Organisation">
        <Input name="organisation" autoComplete="organization" />
      </Field>
      <Field label="Email" required>
        <Input name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label="Phone">
        <Input name="phone" type="tel" autoComplete="tel" />
      </Field>
      <Field label="Initiative of interest" className="md:col-span-2">
        <Select name="initiative" defaultValue="General">
          {initiativeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Message" required className="md:col-span-2">
        <Textarea name="message" required />
      </Field>
      <div className="md:col-span-2">
        <Consent />
      </div>
      <div className="md:col-span-2 mt-2">
        <Button type="submit" variant="secondary">
          Discuss Partnership
        </Button>
      </div>
    </form>
  );
}
