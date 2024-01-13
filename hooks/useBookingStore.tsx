import { create } from "zustand";
import Cookies from "js-cookie";

export type Booking = {
  id: number;
  start_station: {
    id: number;
    name: string;
    address: string;
    city_code: string;
    distance_to_sender: number | null;
    partner: {
      id: number;
      name: string;
      avatar: string;
    };
    latitude: number;
    longitude: number;
  };
  end_station: {
    id: number;
    name: string;
    address: string;
    city_code: string;
    distance_to_receiver: number | null;
    partner: {
      id: number;
      name: string;
      avatar: string;
    };
    latitude: number;
    longitude: number;
  };
  lowest_price: number;
  total_distance: number;
  note: string | null;
  acceptable_package_types: number[];
};
interface BookingStore {
  booking?: Booking;
  set: (booking: Booking) => void;
  remove: () => void;
}

const useBookingStore = create<BookingStore>((set) => ({
  booking: Cookies.get("booking")
    ? JSON.parse(Cookies.get("booking") || "")
    : undefined,

  set: (bookingItem) => {
    set({ booking: bookingItem });
    Cookies.set("booking", JSON.stringify(bookingItem), {
      expires: 1 / 48,
      path: "",
    });
  },

  remove: () => {
    Cookies.remove("booking");
    set({ booking: undefined });
  },
}));

export default useBookingStore;
