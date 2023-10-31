import getServerUser from "@/actions/getServerUser";
import BookingContent from "@/components/bookings/BookingContent";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Booking = async () => {
  const user = await getServerUser();
  const cookieStore = cookies();
  const booking = JSON.parse(cookieStore.get("booking")?.value || "{}");
  console.log("booking", booking);
  if (!booking) redirect("error");
  return <BookingContent user={user} booking={booking} />;
};

export default Booking;
