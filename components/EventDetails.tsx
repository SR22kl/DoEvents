import Image from "next/image";
import { cacheLife } from "next/cache";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.action";
import { notFound } from "next/navigation";
import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDeatailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <Image src={icon} alt={alt} width={16} height={16} />
        <p className="text-sm">{label}</p>
      </div>
    </>
  );
};

const EventAgendaItem = ({ agendaItem }: { agendaItem: string[] }) => {
  return (
    <>
      <div className="agenda">
        <h2>Agenda</h2>
        <ul>
          {agendaItem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

const EventTags = ({ tags }: { tags: string[] }) => {
  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap cursor-pointer">
        {tags.map((tag) => (
          <div className="pill" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

const EventDetails = async ({ params }: { params: Promise<string> }) => {
  "use cache";
  cacheLife("hours");
  const slug = await params;

  let event;
  try {
    const request = await fetch(`${BASE_URL}/api/events/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!request.ok) {
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }

    const response = await request.json();
    event = response.event;

    if (!event) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    return notFound();
  }

  const {
    description,
    image,
    title,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    tags,
    organizer,
  } = event;

  if (!description) return notFound();

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <>
      <section id="event">
        <div className="header">
          <h1>{title}</h1>
          <p className="mt-2">{description}</p>
        </div>

        <div className="details">
          {/* Left Side - Event Content */}
          <div className="content">
            <Image
              src={image}
              alt={title}
              width={800}
              height={800}
              className="banner w-auto h-auto "
            />

            <section className="flex-col gap-2">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p>{overview}</p>
            </section>

            <section className="flex-col gap-2">
              <h2 className="text-2xl font-bold">Event Details</h2>
              <EventDeatailItem
                icon="/icons/calendar.svg"
                alt="calendar"
                label={date}
              />
              <EventDeatailItem
                icon="/icons/clock.svg"
                alt="Time"
                label={time}
              />
              <EventDeatailItem
                icon="/icons/pin.svg"
                alt="Location"
                label={location}
              />
              <EventDeatailItem
                icon="/icons/mode.svg"
                alt="mode"
                label={mode}
              />
              <EventDeatailItem
                icon="/icons/audience.svg"
                alt="Audience"
                label={audience}
              />
            </section>

            <EventAgendaItem agendaItem={agenda} />

            <section className="flex-col gap-2">
              <h2 className="text-2xl font-bold">About the Organizer</h2>
              <p>{organizer}</p>
            </section>

            <EventTags tags={tags} />
          </div>

          {/* Right Side - booking form */}
          <aside className="booking">
            <div className="signup-card">
              <h2 className="text-2xl font-bold mb-4">Book Your Spot</h2>
              {bookings > 0 ? (
                <p className="text-sm">
                  Book Now! Only {bookings} Spots Available.
                </p>
              ) : (
                <p className="text-sm">Be the first one to book your spot!</p>
              )}

              <BookEvent eventId={event._id} slug={event.slug} />
            </div>
          </aside>
        </div>

        <div className="flex w-full flex-col gap-4 pt-20">
          <h2 className="text-2xl font-bold">Similar Events</h2>

          <div className="events">
            {similarEvents.length > 0 ? (
              similarEvents.map((similarEvent: IEvent) => (
                <EventCard key={similarEvent.title} {...similarEvent} />
              ))
            ) : (
              <p className="text-sm">No similar events found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
