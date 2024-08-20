import { BASE_API_URL } from "@/app/lib/constants";
import { JobItem } from "@/app/lib/types";

type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

// GET all Job Items
export const fetchJobItems = async (
  searchText: string,
): Promise<JobItemsApiResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();
  return data;
};
