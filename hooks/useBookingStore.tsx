import { create } from "zustand";

export type Booking = {
  start_station: {
    id: number;
    name: string;
    address: string;
    city_code: number;
    distance_to_sender: number;
    partner: {
      id: number;
      name: string;
    };
  };
  end_station: {
    id: number;
    name: string;
    address: string;
    city_code: number;
    distance_to_receiver: number;
    partner: {
      id: number;
      name: string;
    };
  };
  lowest_price: 120000;
};
interface BookingStore {
  booking?: Booking;
  set: (booking: Booking) => void;
  remove: () => void;
}

const useBookingStore = create<BookingStore>((set) => ({
  booking: undefined,

  set: (bookingItem) => {
    set({ booking: bookingItem });
  },

  remove: () => {
    set({ booking: undefined });
  },
}));

export default useBookingStore;
