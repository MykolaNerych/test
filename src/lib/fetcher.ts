import axiosInstance from "./axiosInstance";

type FetcherParams = {
  url: string;
  description?: string;
  params?: Record<string, unknown>;
};

export const fetcher = async <T = unknown>({
  url,
  params,
  description,
}: FetcherParams): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    console.error(`${description || url}`, error);
    throw error;
  }
};
