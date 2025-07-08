import axiosInstance from "../../utils/AxiosInstance";

const useAuth = () => {
  const loginUser = async (inputData) => {
    const reqData = new FormData();
    reqData.append("email", inputData.email);
    reqData.append("password", inputData.password);
    try {
      const { status, data } = await axiosInstance.post("/login", reqData);
      if (status === 200) {
        localStorage.setItem("accessToken", data.access_token);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (inputData) => {
    const reqData = new FormData();
    Object.entries(inputData).forEach(([k, v]) => {
      if (Boolean(v)) {
        reqData.append(k, v);
      }
    });
    try {
      const { data, status } = await axiosInstance.post("/register", reqData);
      if (status === 200) {
        console.log("Registration successful", data);
      }
      return { data, status };
    } catch (err) {
      console.log(err);
    }
  };

  return { loginUser, registerUser };
};

export default useAuth;
