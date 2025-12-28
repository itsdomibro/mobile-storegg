import {
  ProductResponseDto,
  productResponseSchema,
} from "../schemas/productSchema";
import axios from "axios";
import { api } from "./api";

const API_URL = "/products";

export const productService = {
  getAll: async (): Promise<ProductResponseDto[]> => {
    try {
      const res = await api.get(API_URL);
      return productResponseSchema.array().parse(res.data);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  getById: async (id: number): Promise<ProductResponseDto> => {
    try {
      const res = await api.get(`${API_URL}/${id}`);
      return productResponseSchema.parse(res.data);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};

function handleApiError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || error.message;
    throw new Error(`API Error: ${message}`);
  }

  throw new Error("Unexpected error occured");
}
