import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.102:3333"
});

export const apiSignUp = async user => {
  try {
    const url = "users";
    const { email, cpf, password } = user;
    return await api.post(url, { email, cpf, password });
  } catch (error) {
    throw error;
  }
};

export const apiLogin = async user => {
  try {
    const url = "session";
    const { email, password } = user;
    return await api.post(url, { email, password });
  } catch (error) {
    throw error;
  }
};

export const apiSymptomReport = async symptoms => {
  try {
    const url = "symptom-report";

    const {
      userId,
      name,
      age,
      headache,
      soreThroat,
      nauseOrVomiting,
      musclePain,
      dryCough,
      runnyNose,
      fever,
      shortnessOfBreath,
      tiredness,
      location,
      observation
    } = symptoms;

    return await api.post(url, {
      user: {
        userId,
        name,
        age,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      symptoms: [
        {
          id: 1,
          intensity: headache
        },
        {
          id: 2,
          intensity: soreThroat
        },
        {
          id: 3,
          intensity: nauseOrVomiting
        },
        {
          id: 4,
          intensity: musclePain
        },
        {
          id: 5,
          intensity: dryCough
        },
        {
          id: 6,
          intensity: runnyNose
        },
        {
          id: 7,
          intensity: tiredness
        },
        {
          id: 8,
          intensity: fever
        },
        {
          id: 9,
          intensity: shortnessOfBreath
        }
      ],
      observation
    });
  } catch (error) {
    throw error;
  }
};

export const apiUserList = async location => {
  try {
    const url = "users";
    const { latitude, longitude } = location;
    return await api.get(url, {
      params: {
        latitude,
        longitude
      }
    });
  } catch (error) {
    throw error;
  }
};
