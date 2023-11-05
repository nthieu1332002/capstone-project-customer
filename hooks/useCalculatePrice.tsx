"use client";

import { axios } from "@/lib/axios";
import { useEffect, useState } from "react";
import qs from "query-string";

type Props = {
    length: number;
    width: number;
    height: number;
    weight: number;
    distance: number;
};

const useCalculatePrice = ({length, width, height, weight, distance}: Props) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchPrice = async () => {
        try {
            const url = qs.stringifyUrl(
                {
                  url: "/api/customer/prices",
                  query: {
                    length: length,
                    width: width,
                    height: height,
                    weight: weight,
                    distance: distance,
                  },
                },
                { skipNull: true }
              );
              console.log("url", url);
            const res = await axios.get(url);
            setPrice(res.data);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    fetchPrice();
  }, [distance, height, length, weight, width])

  return price;
};

export default useCalculatePrice;
