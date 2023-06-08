import axios from "axios";

export interface ActivityResponse {
  activity: string;
  type: string;
  participants: number;
}

const fetchActivity = async () => {
  const res = await axios.get<ActivityResponse>(
    "http://www.boredapi.com/api/activity/"
  );

  return {
    activity: res.data.activity,
    type: res.data.type,
    participants: res.data.participants
  };
};

export default fetchActivity;
