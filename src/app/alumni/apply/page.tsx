"use client"

import Link from "next/link"
import { TopNav } from "@/components/layout/top-nav"
import { Footer } from "@/components/layout/footer"
import { ProgressDots } from "@/components/ui/progress-dots"
import { FormCard } from "@/components/forms/form-card"
import { FormGroup } from "@/components/forms/form-group"
import { FormSectionLabel } from "@/components/forms/form-section-label"
import { UploadBox } from "@/components/forms/upload-box"
import { InfoNote } from "@/components/forms/info-note"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function AlumniApplyPage() {
  return (
    <>
      <TopNav />
      <main className="pt-20 bg-background min-h-screen">
        <div className="max-w-[820px] mx-auto px-6 py-14 pb-20">

          <Link
            href="/alumni"
            className="inline-block mb-5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Alumni Network
          </Link>

          {/* Page header */}
          <div className="text-center mb-9">
            <span className="text-eyebrow text-gold block mb-[14px]">Alumni Application</span>
            <h1 className="font-heading text-[32px] text-navy mb-[10px]">
              Apply for Alumni Membership
            </h1>
            <p className="text-sm text-muted-foreground max-w-[520px] mx-auto">
              Membership is open to trade finance and trade services professionals who have completed
              an IIT certification or program. Applications are reviewed by IIT admin, typically within
              3–5 business days.
            </p>
          </div>

          <ProgressDots steps={3} current={2} className="mb-10" />

          <FormCard>

            {/* Personal Information */}
            <FormSectionLabel>Personal Information</FormSectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              <FormGroup label="Full Name" required>
                <Input type="text" placeholder="e.g. Rafiq Ahmed" />
              </FormGroup>
              <FormGroup label="Email Address" required>
                <Input type="email" placeholder="you@company.com" />
              </FormGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              <FormGroup label="Phone Number" required>
                <Input type="tel" placeholder="+880 1XXX-XXXXXX" />
              </FormGroup>
              <FormGroup label="LinkedIn Profile">
                <Input type="url" placeholder="linkedin.com/in/yourname" />
              </FormGroup>
            </div>

            {/* Professional Background */}
            <FormSectionLabel>Professional Background</FormSectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              <FormGroup label="Current Designation" required>
                <Input type="text" placeholder="e.g. Trade Finance Manager" />
              </FormGroup>
              <FormGroup label="Organization" required>
                <Input type="text" placeholder="e.g. Standard Bank" />
              </FormGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              <FormGroup label="Years in Trade Finance / Banking">
                <Select>
                  <option>Less than 2 years</option>
                  <option>2–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </Select>
              </FormGroup>
              <FormGroup label="Career Stage">
                <Select>
                  <option>Junior Officer</option>
                  <option>Relationship Manager</option>
                  <option>Unit / Department Head</option>
                  <option>Veteran / Retired Banker</option>
                </Select>
              </FormGroup>
            </div>

            {/* IIT Certification */}
            <FormSectionLabel>IIT Certification / Program</FormSectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              <FormGroup label="Certification Completed" required>
                <Select>
                  <option value="">Select certification</option>
                  <option>CDCS</option>
                  <option>CSDG</option>
                  <option>CITF</option>
                  <option>CTFP</option>
                  <option>Other IIT Program</option>
                </Select>
              </FormGroup>
              <FormGroup label="Year Completed" required>
                <Input type="text" placeholder="e.g. 2023" />
              </FormGroup>
            </div>

            <FormGroup label="Upload Certificate / Proof of Completion">
              <UploadBox hint="PDF, JPG, PNG (max 5MB)" />
            </FormGroup>

            {/* Charter Note */}
            <FormSectionLabel>A Note on Membership</FormSectionLabel>

            <InfoNote>
              Alumni membership connects you to <b>mentorship</b>,{" "}
              <b>structured networking</b> across institutions and generations, and access to
              best-practice publications developed by the IIT Alumni community. Members are expected
              to uphold the Alumni Code of Professionalism and participate in at least one Alumni
              initiative where feasible. Read the full{" "}
              <a href="/alumni/charter">Alumni Charter</a>.
            </InfoNote>

            {/* Consent */}
            <label className="flex gap-[10px] items-start text-[12.5px] text-muted-foreground mt-6 mb-6 cursor-pointer">
              <input type="checkbox" className="mt-[3px] accent-navy" />
              I confirm the information above is accurate and I agree to uphold the IIT Alumni
              Code of Professionalism.
            </label>

            <Button className="w-full py-3.5 text-[14px]">
              Submit Application for Review
            </Button>

          </FormCard>
        </div>
      </main>
      <Footer />
    </>
  )
}
