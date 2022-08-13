import axios from "axios";

const BaseUrl = "https://cubo-eric.herokuapp.com/";

export const insert = async (form) => {
  try {
    await axios.post(`${BaseUrl}graphic/insert`, form);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const select = async (getAll, setLoader) => {
  setLoader(true);
  try {
    const result = await axios.get(`${BaseUrl}graphic/select`);
    setLoader(false);
    getAll(result.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const update = async (form) => {
  try {
    await axios.put(`${BaseUrl}graphic/update`, form);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteColum = async (id) => {
  try {
    await axios.delete(`${BaseUrl}graphic/delete`, { data: id });
  } catch (error) {
    console.log(error.response.data);
  }
};
