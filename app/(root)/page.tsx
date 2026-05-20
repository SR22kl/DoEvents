import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";


const Home = () => {
  return (
    <>
      <section>
        <h1 className="text-5xl text-center">
          The Hub for Everyone <br /> Events That You Can't Miss
        </h1>
        <p className="text-center mt-5">
          Discover the latest and greatest events in your area.
        </p>

        <ExploreBtn />

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>

          <ul className="events list-none">
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
