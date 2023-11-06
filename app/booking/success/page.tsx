import BookingSuccessContent from "@/components/bookings/BookingSuccess";

export default async function BookingSuccess({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return <BookingSuccessContent params={searchParams}/>;
}
