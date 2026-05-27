import Link from "next/link";

const Page = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="mx-auto container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-6xl font-semibold leading-tight max-sm:text-4xl">
            Built for people who love great events
          </h1>
          <p className="mt-6 text-light-100 text-lg max-w-prose">
            DoEvents makes discovering, organizing and booking local events
            effortless — whether you run a meetup or a multi-day festival. We
            combine beautiful design, fast performance and privacy-first
            analytics so creators can focus on what matters.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/"
              className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:scale-[1.02] transform transition"
            >
              Browse Events
            </Link>
            {/* <Link
              href="/dashboard"
              className="glass px-5 py-3 rounded-full text-sm hover:shadow-lg transition"
            >
              Create an Event
            </Link> */}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
            <StatCard label="Events" value="1.2k+" />
            <StatCard label="Organizers" value="540+" />
            <StatCard label="Cities" value="85" />
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full max-w-md glass p-6 rounded-2xl card-shadow transform transition hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80"
                alt="events collage"
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="absolute left-4 bottom-4 glass px-3 py-2 rounded-md text-sm">
                Trusted by creators worldwide
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-lg">Designed for creators</h3>
              <p className="text-light-200 mt-2 text-sm">
                Tools to publish events, manage bookings and engage your
                attendees — all without paying per-attendee fees.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-8 right-6 w-40 h-40 rounded-full bg-linear-to-br from-[#5dfeca]/40 to-[#59deca]/8 blur-3xl animate-blob" />
        </div>
      </div>

      <div className="mt-20 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Fast Setup"
            desc="Create an event in under 60 seconds with simple, intuitive forms."
            icon="⚡"
          />
          <FeatureCard
            title="Flexible Tickets"
            desc="Support free, paid and donation-based tickets with QR check-in."
            icon="🎟️"
          />
          <FeatureCard
            title="Privacy-first"
            desc="We never sell your data — analytics are lightweight and optional."
            icon="🔒"
          />
        </div>

        <div className="mt-16 glass p-8 rounded-2xl card-shadow flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Our mission</h3>
            <p className="text-light-100 mt-3 max-w-prose">
              We build delightful tools that empower anyone to host memorable
              experiences. Great events are about connection — our job is to
              remove friction so creators can focus on community.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            <MiniCard title="Open by default" subtitle="Flexible event pages" />
            <MiniCard title="Payments" subtitle="Stripe & manual options" />
            <MiniCard title="Embed" subtitle="Widget for any site" />
            <MiniCard title="Analytics" subtitle="Privacy-first metrics" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="bg-transparent border border-border-dark rounded-lg p-4 flex flex-col items-start gap-1 animate-fade-in">
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-light-200 text-sm">{label}</span>
  </div>
);

const FeatureCard: React.FC<{ title: string; desc: string; icon?: string }> = ({
  title,
  desc,
  icon,
}) => (
  <div className="glass p-6 rounded-xl card-shadow hover:-translate-y-1.5 transition-transform">
    <div className="text-3xl">{icon}</div>
    <h4 className="mt-4 font-bold">{title}</h4>
    <p className="text-light-200 mt-2 text-sm">{desc}</p>
  </div>
);

const MiniCard: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="bg-dark-100 p-4 rounded-lg border border-gray-800">
    <div className="font-semibold">{title}</div>
    <div className="text-light-200 text-sm mt-1">{subtitle}</div>
  </div>
);

export default Page;
