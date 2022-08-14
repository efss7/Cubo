import axios from "axios";

const BaseUrl = "http://localhost:3003/";

export const insert = async (form) => {
  try {
    await axios.post(`${BaseUrl}graphic/insert`, form);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const selectAll = async (getAll, setLoader) => {
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
    await axios.put(`${BaseUrl}graphic/update/${form.id}`, form);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteColum = async (id) => {
  try {
    await axios.delete(`${BaseUrl}graphic/delete/${id}`);
  } catch (error) {
    console.log(error.response.data);
  }
};
