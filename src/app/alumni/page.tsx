"use client"

import { useState } from "react"
import Link from "next/link"
import { TopNav } from "@/components/layout/top-nav"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/shared/hero"
import { StatBar } from "@/components/shared/stat-bar"
import { ForumBanner } from "@/components/shared/forum-banner"
import { LockedOverlay } from "@/components/shared/locked-overlay"
import { GateCard } from "@/components/cards/gate-card"
import { AlumCard } from "@/components/cards/alum-card"
import { Avatar } from "@/components/ui/avatar"
import { EventCard } from "@/components/cards/event-card"
import { StoryCard } from "@/components/cards/story-card"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

const alumniData = [
  {
    initials: "RA",
    name: "Rafiq Ahmed",
    role: "Trade Finance Manager",
    org: "Standard Bank · Batch 2019",
    badgeVariant: "verified" as const,
    contact: { email: "rafiq.ahmed@email.com", phone: "+880 1XXX-XXXXXX" },
  },
  {
    initials: "MI",
    avatarColor: "#946c00",
    name: "M. Islam",
    role: "CDCS Instructor, 22 yrs banking",
    org: "Islami Bank",
    badgeVariant: "honorary" as const,
    contact: { email: "m.islam@email.com" },
  },
  {
    initials: "KH",
    name: "Karim Hasan",
    role: "CDCS Certified",
    org: "Contic Bank · Batch 2021",
    badgeVariant: "verified" as const,
    contact: { email: "karim.hasan@email.com", phone: "+880 1XXX-XXXXXX" },
  },
  {
    initials: "SA",
    name: "Sumaiya Akter",
    role: "Trade Compliance Lead",
    org: "Prime Bank · Batch 2020",
    badgeVariant: "verified" as const,
    contact: { email: "sumaiya.akter@email.com" },
  },
]

export default function AlumniPage() {
  const [isAlumni, setIsAlumni] = useState(false)

  return (
    <>
      <TopNav />
      <main className="pt-20">

        {/* Demo state toggle — remove when auth is wired up */}
        <div className="bg-muted border-b border-border px-8 py-2 flex items-center justify-center gap-3 text-[12.5px] text-muted-foreground">
          <span>Demo view:</span>
          <button
            onClick={() => setIsAlumni(false)}
            className={`px-3 py-1 rounded font-semibold transition-colors ${!isAlumni ? "bg-navy text-white" : "hover:text-foreground"}`}
          >
            Guest
          </button>
          <button
            onClick={() => setIsAlumni(true)}
            className={`px-3 py-1 rounded font-semibold transition-colors ${isAlumni ? "bg-primary text-primary-foreground" : "hover:text-foreground"}`}
          >
            Verified Alumni
          </button>
        </div>

        {/* Hero */}
        <Hero
          eyebrow="Alumni Network"
          title="Alumni Network"
          subtitle="Connect with IIT graduates across the global trade finance community. Find mentors, colleagues, and career opportunities."
        />

        {/* Stats */}
        <StatBar
          stats={[
            { value: "278", label: "Registered Alumni" },
            { value: "18", label: "Countries Represented" },
            { value: "64", label: "Certified Alumni" },
            { value: "12", label: "Alumni Events / Year" },
          ]}
        />

        {/* ── STATE A: Guest ── */}
        {!isAlumni && (
          <section className="py-16">
            <div className="max-w-[1180px] mx-auto px-6">
              <div className="text-center mb-10">
                <h2 className="font-heading text-[30px] text-navy mb-2">Join the Network</h2>
                <p className="text-sm text-muted-foreground">
                  Sign in with your alumni account, or apply if this is your first time here.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[840px] mx-auto">
                <GateCard
                  variant="primary"
                  tag="Already a member"
                  title="Sign In"
                  description="Access the full alumni directory, contact details, events, and the private discussion forum."
                  buttonLabel="Sign In as Alumni"
                  buttonHref="/login"
                />
                <GateCard
                  variant="outline"
                  tag="First time here"
                  title="Apply for Membership"
                  description="Submit your details for admin verification. Most applications are reviewed within 3–5 business days."
                  buttonLabel="Start Application"
                  buttonHref="/alumni/apply"
                />
              </div>

              <p className="max-w-[840px] mx-auto mt-[22px] text-center text-[12.5px] text-muted-foreground">
                Honorary members are added directly by IIT admin and do not need to apply. If you believe
                you already have alumni access, contact{" "}
                <strong className="text-navy">iitrade.org@gmail.com</strong>.
              </p>

              {/* Locked directory preview */}
              <div className="mt-14">
                <LockedOverlay
                  title="Directory locked"
                  description="Sign in as a verified alumni member to view full profiles and contact information."
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[18px]">
                    {[
                      { initials: "RA", name: "Rafiq Ahmed", role: "Trade Finance Manager", org: "Standard Bank" },
                      { initials: "NI", name: "Nafisa Islam", role: "Head of Trade Ops", org: "HSBC Bangladesh" },
                      { initials: "KH", name: "Karim Hasan", role: "CDCS Certified", org: "Contic Bank" },
                      { initials: "SA", name: "Sumaiya Akter", role: "Compliance Lead", org: "Prime Bank" },
                    ].map((a) => (
                      <div key={a.initials} className="bg-card border border-border rounded-xl p-[22px] text-center">
                        <Avatar initials={a.initials} className="mx-auto mb-3" />
                        <div className="text-sm font-bold text-navy mb-[2px]">{a.name}</div>
                        <div className="text-xs text-muted-foreground mb-[2px]">{a.role}</div>
                        <div className="text-xs text-muted-foreground">{a.org}</div>
                      </div>
                    ))}
                  </div>
                </LockedOverlay>
              </div>
            </div>
          </section>
        )}

        {/* ── STATE B: Verified Alumni ── */}
        {isAlumni && (
          <>
            <section className="py-16 bg-muted/40">
              <div className="max-w-[1180px] mx-auto px-6">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-[30px] text-navy mb-2">Alumni Directory</h2>
                  <p className="text-sm text-muted-foreground">
                    Connect with our growing network of international trade professionals.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex gap-3 mb-7 flex-wrap">
                  <Input placeholder="Search alumni by name, company…" className="flex-1 min-w-[200px]" />
                  <Select className="w-auto min-w-[180px]">
                    <option>All Certifications</option>
                    <option>CDCS</option>
                    <option>CSDG</option>
                    <option>CITF</option>
                  </Select>
                  <Select className="w-auto min-w-[160px]">
                    <option>All Countries</option>
                    <option>Bangladesh</option>
                    <option>Singapore</option>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[18px]">
                  {alumniData.map((a) => (
                    <AlumCard key={a.initials} {...a} />
                  ))}
                </div>
              </div>
            </section>

            {/* Forum CTA */}
            <section className="pb-16">
              <div className="max-w-[1180px] mx-auto px-6">
                <ForumBanner
                  title="Alumni Discussion Forum"
                  description="Start a topic or join ongoing discussions with fellow alumni — market insight, career moves, mentorship requests, and more."
                  buttonLabel="Enter Discussion Forum"
                  buttonHref="/alumni/forum"
                />
              </div>
            </section>
          </>
        )}

        {/* Alumni Events — always visible */}
        <section className="py-16 bg-muted/40">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-heading text-[30px] text-navy mb-2">Alumni Events</h2>
              <p className="text-sm text-muted-foreground">
                Exclusive networking events, reunions, and webinars for IIT alumni.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
              <EventCard
                tag="Alumni Reunion"
                title="IIT Annual Alumni Gathering 2026"
                description="A networking dinner for all IIT alumni to reconnect and celebrate the community's growth."
                date="August 28, 2026"
                location="Dhaka, Bangladesh"
                rsvpHref="/alumni/events/reunion-2026"
              />
              <EventCard
                tag="Webinar"
                title="Career Growth in Trade Finance — Alumni Panel"
                description="Senior alumni share career insights and the impact of IIT certifications on their trajectory."
                date="June 22, 2026"
                location="Online"
                rsvpHref="/alumni/events/webinar-june"
              />
              <EventCard
                tag="Mentorship"
                title="Alumni Mentorship Matching Session"
                description="Connect with junior members working towards the IIT community through structured mentorship."
                date="May 30, 2026"
                location="Alumni Only"
                rsvpHref="/alumni/events/mentorship-may"
              />
            </div>
          </div>
        </section>

        {/* Alumni Stories — always visible */}
        <section className="py-16">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-heading text-[30px] text-navy mb-2">Alumni Stories</h2>
              <p className="text-sm text-muted-foreground">
                Real stories from IIT graduates who transformed their careers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
              <StoryCard
                initials="RA"
                quote="Passing the CDCS through IIT's program gave me the confidence and credibility to move into leadership at Standard Bank."
                name="Rafiq Ahmed"
                role="Trade Finance Manager, Standard Bank"
              />
              <StoryCard
                initials="NI"
                quote="The CSDG and CDCS combination through IIT positioned me perfectly for my current role overseeing trade operations at HSBC."
                name="Nafisa Islam"
                role="Head of Trade Ops, HSBC Bangladesh"
              />
              <StoryCard
                initials="KH"
                quote="Beyond the certification itself, the alumni network connected me with mentors I still turn to today."
                name="Karim Hasan"
                role="CDCS Certified, Contic Bank"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
