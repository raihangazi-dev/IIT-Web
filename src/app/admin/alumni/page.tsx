"use client"

import { useState } from "react"
import Link from "next/link"
import { AdminShell } from "@/components/layout/admin-shell"
import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { AdminTabs } from "@/components/admin/admin-tabs"
import { DefaultBanner } from "@/components/admin/default-banner"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FormGroup } from "@/components/forms/form-group"

// ── Sidebar nav ──────────────────────────────────────────────────────────────

const adminNavGroups = [
  {
    label: "Overview",
    items: [{ label: "Dashboard" }, { label: "Analytics" }],
  },
  {
    label: "Content",
    items: [
      { label: "Blog Posts" },
      { label: "Certifications" },
      { label: "Research Papers" },
      { label: "Events" },
      { label: "Facilitations" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Q&A Moderation" },
      { label: "Forum Moderation" },
      { label: "Alumni" },
      { label: "Researchers" },
    ],
  },
  {
    label: "Users",
    items: [{ label: "All Users" }, { label: "Membership Tiers" }],
  },
]

// ── Static data ───────────────────────────────────────────────────────────────

const pendingRows = [
  { initials: "TR", avatarColor: undefined, name: "Tasnim Rahman", email: "tasnim.r@email.com", org: "ILB Bangladesh", cert: "CDCS · 2024", applied: "Aug 10, 2026" },
  { initials: "FH", avatarColor: undefined, name: "Farhan Hossain", email: "farhan.h@email.com", org: "Bank Asia", cert: "CSDG · 2023", applied: "Aug 9, 2026" },
  { initials: "SA", avatarColor: undefined, name: "Sadia Anjum", email: "sadia.a@email.com", org: "Mutual Trust Bank", cert: "CDCS · 2022", applied: "Aug 7, 2026" },
]

const directoryRows = [
  { initials: "RA", avatarColor: undefined, name: "Rafiq Ahmed", email: "rafiq.ahmed@email.com", org: "Standard Bank", type: "verified" as const, typeLabel: "Automatic", batch: "2019", status: "verified" as const },
  { initials: "MI", avatarColor: "#3d4ba0", name: "M. Islam", email: "m.islam@email.com", org: "Islami Bank", type: "honorary" as const, typeLabel: "Honorary", batch: "—", status: "verified" as const },
  { initials: "KH", avatarColor: undefined, name: "Karim Hasan", email: "karim.hasan@email.com", org: "Contic Bank", type: "verified" as const, typeLabel: "Automatic", batch: "2021", status: "verified" as const },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function WhoCell({ initials, avatarColor, name, email }: { initials: string; avatarColor?: string; name: string; email: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <Avatar initials={initials} size="sm" color={avatarColor} />
      <div>
        <div className="font-semibold text-navy text-[13px]">{name}</div>
        <div className="text-[11.5px] text-muted-foreground">{email}</div>
      </div>
    </div>
  )
}

function TableHeader({ cols }: { cols: string[] }) {
  return (
    <thead>
      <tr>
        {cols.map((col) => (
          <th key={col} className="text-left text-section-label text-muted-foreground px-5 py-3 border-b border-border bg-background">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const tdClass = "px-5 py-[14px] text-[13px] border-b border-[#f1f2f5] last:border-b-0 align-middle"

// ── Tab Panels ─────────────────────────────────────────────────────────────────

function PendingTab() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <table className="w-full border-collapse">
        <TableHeader cols={["Applicant", "Organization", "Certification", "Applied", "Proof", "Actions"]} />
        <tbody>
          {pendingRows.map((row) => (
            <tr key={row.email}>
              <td className={tdClass}><WhoCell {...row} /></td>
              <td className={tdClass}>{row.org}</td>
              <td className={tdClass}>{row.cert}</td>
              <td className={tdClass}>{row.applied}</td>
              <td className={tdClass}>
                <a href="#" className="text-navy font-semibold hover:underline">View file →</a>
              </td>
              <td className={tdClass}>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary">Approve</Button>
                  <button className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border text-red-700 border-red-200 bg-white hover:bg-red-50 transition-colors">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function DirectoryTab() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <table className="w-full border-collapse">
        <TableHeader cols={["Alumni", "Organization", "Type", "Batch", "Status", "Actions"]} />
        <tbody>
          {directoryRows.map((row) => (
            <tr key={row.email}>
              <td className={tdClass}><WhoCell {...row} /></td>
              <td className={tdClass}>{row.org}</td>
              <td className={tdClass}>
                <Badge variant={row.type}>{row.typeLabel}</Badge>
              </td>
              <td className={tdClass}>{row.batch}</td>
              <td className={tdClass}>
                <Badge variant={row.status}>Verified</Badge>
              </td>
              <td className={tdClass}>
                <Button size="sm" variant="outline">Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function HonoraryTab() {
  return (
    <div>
      <p className="text-[12.5px] text-muted-foreground max-w-[560px] mb-5">
        Per Article III.1 of the Alumni Charter, honorary membership is conferred on individuals of distinguished
        industry contribution, whether or not they meet standard eligibility. Adding here grants immediate
        verified alumni access — no application review needed.
      </p>
      <div className="bg-card border border-border rounded-xl p-[30px] max-w-[640px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormGroup label="Full Name">
            <Input type="text" placeholder="e.g. Dr. Nasreen Chowdhury" />
          </FormGroup>
          <FormGroup label="Email">
            <Input type="email" placeholder="name@email.com" />
          </FormGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormGroup label="Current Title / Role">
            <Input type="text" placeholder="e.g. Former Head of Trade, XYZ Bank" />
          </FormGroup>
          <FormGroup label="Organization">
            <Input type="text" placeholder="e.g. XYZ Bank" />
          </FormGroup>
        </div>
        <FormGroup label="Reason for Honorary Membership">
          <Textarea rows={3} placeholder="e.g. 25 years in trade services, contributed to IIT's founding curriculum…" />
        </FormGroup>
        <FormGroup label="Photo">
          <Input type="file" className="py-2" />
        </FormGroup>
        <Button className="w-full py-3">Grant Honorary Membership</Button>
      </div>
    </div>
  )
}

function PrivilegesTab() {
  const [toggles, setToggles] = useState({
    RA: { blog: true, forum: true },
    MI: { blog: true, forum: true },
    KH: { blog: true, forum: true },
  })

  const setToggle = (key: keyof typeof toggles, field: "blog" | "forum", val: boolean) => {
    setToggles((prev) => ({ ...prev, [key]: { ...prev[key], [field]: val } }))
  }

  return (
    <div>
      <DefaultBanner
        title="Default Alumni Privileges"
        description="Applied automatically to every verified alumni member unless overridden individually below."
        actions={
          <>
            <div className="text-center">
              <div className="text-[11px] text-white/60 mb-1">Certifications</div>
              <select
                className="bg-transparent border border-white/30 text-white text-xs rounded px-2 py-1.5 focus:outline-none"
              >
                <option>20% off</option>
                <option>50% off</option>
                <option>Free</option>
              </select>
            </div>
            <div className="text-center">
              <div className="text-[11px] text-white/60 mb-1">Blog (paid posts)</div>
              <select
                className="bg-transparent border border-white/30 text-white text-xs rounded px-2 py-1.5 focus:outline-none"
              >
                <option>Free</option>
                <option>50% off</option>
              </select>
            </div>
            <button className="border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              Save Defaults
            </button>
          </>
        }
      />

      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search alumni to override privileges…" className="w-[260px]" />
        <span className="text-xs text-muted-foreground">Individual overrides take priority over defaults</span>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <TableHeader cols={["Alumni", "Certification Discount", "Free Certifications", "Blog Access", "Forum"]} />
          <tbody>
            {[
              { key: "RA" as const, initials: "RA", name: "Rafiq Ahmed", sub: "Automatic member", discount: "20" },
              { key: "MI" as const, initials: "MI", name: "M. Islam", sub: "Honorary member", discount: "100", avatarColor: "#3d4ba0" },
              { key: "KH" as const, initials: "KH", name: "Karim Hasan", sub: "Automatic member", discount: "20" },
            ].map((row) => (
              <tr key={row.key}>
                <td className={tdClass}>
                  <WhoCell initials={row.initials} avatarColor={(row as { avatarColor?: string }).avatarColor} name={row.name} email={row.sub} />
                </td>
                <td className={tdClass}>
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      defaultValue={row.discount}
                      className="w-14 border border-border rounded px-2 py-1 text-xs text-center focus:outline-none focus:border-ring"
                    />
                    <span className="text-xs text-muted-foreground">%</span>
                  </div>
                </td>
                <td className={tdClass}>
                  <select className="border border-border rounded text-xs px-2 py-1.5 text-foreground bg-card focus:outline-none focus:border-ring">
                    <option>None selected</option>
                    <option>CDCS – 1st Phase</option>
                    <option>All certifications</option>
                  </select>
                </td>
                <td className={tdClass}>
                  <Toggle
                    checked={toggles[row.key].blog}
                    onChange={(v) => setToggle(row.key, "blog", v)}
                  />
                </td>
                <td className={tdClass}>
                  <Toggle
                    checked={toggles[row.key].forum}
                    onChange={(v) => setToggle(row.key, "forum", v)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const tabs = [
  { id: "pending", label: "Pending Verification", count: 6 },
  { id: "directory", label: "Alumni Directory", count: 278 },
  { id: "honorary", label: "Add Honorary Member" },
  { id: "privileges", label: "Privileges" },
]

export default function AdminAlumniPage() {
  const [activeTab, setActiveTab] = useState("directory")
  const [activeNav, setActiveNav] = useState("Alumni")

  return (
    <AdminShell
      sidebar={
        <Sidebar
          navGroups={adminNavGroups}
          activeItem={activeNav}
          onItemClick={setActiveNav}
        />
      }
    >
      <Topbar
        title="Alumni"
        actions={
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-navy text-white text-[13px] font-semibold px-[18px] py-[10px] rounded-lg hover:bg-navy/90 transition-colors"
          >
            View Live Site
          </Link>
        }
      />

      <div className="p-8 flex-1">
        <AdminTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "pending" && <PendingTab />}
        {activeTab === "directory" && <DirectoryTab />}
        {activeTab === "honorary" && <HonoraryTab />}
        {activeTab === "privileges" && <PrivilegesTab />}
      </div>
    </AdminShell>
  )
}
