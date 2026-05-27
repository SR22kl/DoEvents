import Image from "next/image";
import Link from "next/link";
import styles from "./EventCard.module.css";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <>
      <Link href={`/events/${slug}`} id="event-card">
        <div className={styles.posterContainer}>
          <Image
            src={image}
            alt={title}
            width={410}
            height={300}
            className={styles.poster}
          />
        </div>

        <div className="flex flex-row gap-2">
          <Image
            src="/icons/pin.svg"
            alt="location"
            width={14}
            height={14}
            className="w-auto h-auto"
          />
          <p>{location}</p>
        </div>

        <p className="title">{title}</p>

        <div className="datetime">
          <div>
            <Image
              src="/icons/calendar.svg"
              alt="date"
              width={14}
              height={14}
              className="w-auto h-auto"
            />
            <p className="date">{date}</p>
          </div>
          <div>
            <Image
              src="/icons/clock.svg"
              alt="time"
              width={14}
              height={14}
              className="w-auto h-auto"
            />
            <p className="time">{time}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventCard;
