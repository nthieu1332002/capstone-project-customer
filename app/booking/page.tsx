import getServerUser from "@/actions/getServerUser";
import BookingContent from "@/components/bookings/BookingContent";
import { axios } from "@/lib/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getPricing = async () => {
  try {
    const res = await axios.get("/api/customer/boxSizes");
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const Booking = async () => {
  const pricing = await getPricing();

  const user = await getServerUser();
  const cookieStore = cookies();
  const booking = cookieStore.get("booking")?.value || "";
  if (!booking) {
    redirect("error");
  }
  const parsedBooking = JSON.parse(booking);
  return (
    <BookingContent user={user} booking={parsedBooking} pricing={pricing} />
  );
};

export default Booking;
