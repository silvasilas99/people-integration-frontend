import axios from 'axios'

export const getAuthFromGoogle = async (csrf_token) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URI}api/auth/google`,
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrf_token
      },
    });
    
    return await response.data
  } catch (error) {
    return console.log(error)
  }
};

export const handleCallbackFromGoogle = async (csrf_token) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URI}api/auth/google/callback`,
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrf_token
      },
    });

    return await response.data
  } catch (error) {
    return console.log(error)
  }
};

export const getXsrfToken = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_URI}api/auth/getSessionToken`,
      headers: {
        "Content-type": "application/json",
      },
    })

    return await response.url
  } catch (error) {
    return console.log(error)
  }
};
