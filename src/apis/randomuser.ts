import axiosInstance from "../utils/axiosInstance";

const api = {
  // @ts-expect-error : success와 fail은 any 타입을 가짐
  fetchMultipleData: async (params, success, fail) => {
    await axiosInstance.get("/", { params }).then(success).catch(fail);
  },
};

export default api;
