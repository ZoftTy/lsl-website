import axios from "@/utils/axios.js";

export const getArticle = (
  categoryId = 1,
  limit = 3,
  nominate = true,
  page = 1
) => {
  return axios.get(
    `/articles?category=${categoryId}&limit=${limit}&nominate=${nominate}&page=${page}`
  );
};
