import getServerUser from "@/actions/getServerUser";
import BookingContent from "@/components/bookings/BookingContent";
import { axios } from "@/lib/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Booking = async () => {

  const user = await getServerUser();
  const cookieStore = cookies();
  const booking = cookieStore.get("booking")?.value || "";
  if (!booking) {
    redirect("error");
  }
  const parsedBooking = JSON.parse(booking);
  return (
    <BookingContent user={user} booking={parsedBooking} />
  );
};

export default Booking;
