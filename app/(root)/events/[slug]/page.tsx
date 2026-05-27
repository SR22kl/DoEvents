import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";
import Loader from "@/components/loader";

const EventsDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = params.then((p) => p.slug);

  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <EventDetails params={slug} />
        </Suspense>
      </main>
    </>
  );
};

export default EventsDetailsPage;
