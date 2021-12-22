import axios from "@/utils/axios.js";

export const getArticle = (
  categoryId = 1,
  limit = 3,
  nominate = true,
  page = 1
) => {
  if (limit === 0) {
    // 0为不限制
    return axios.get(`/articles?category=${categoryId}&nominate=${nominate}`);
  } else {
    return axios.get(
      `/articles?category=${categoryId}&limit=${limit}&nominate=${nominate}&page=${page}`
    );
  }
};
// 获取轮播图数据
export const getCarouselList = () => {
  return axios.get(`/settings/carousel`);
};
