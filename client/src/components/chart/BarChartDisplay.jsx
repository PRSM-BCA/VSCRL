import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import "./BarChartDisplay.scss";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = [
    "#540D6E",
    "#ee4266",
    "#FFD23F",
    "#3bceac",
    "#0EAD69",
    "#FFA630",
    "#D7E8BA",
    "#4DA1A9",
    "#2E5077",
    "#611C35",
    "#E6C79C",
    "#CDDFA0",
    "#6FD08C",
    "#7B9EA8",
    "#78586F",
    "#006E90",
    "#F18F01",
    "#ADCAD6",
    "#99C24D",
    "#41BBD9"
]


export default function BarChartDisplay() {

  const { currentUser, getUser, getBrand } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [brand, setBrand] = useState("");
  const [keyWordValue, setKeyWordValue] = useState([])
  const [dataPoints, setDataPoints] = useState("")

  useEffect(() => {
    if (currentUser && !userInfo && !brand) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
      getBrand("SurgeonShoes").then((data) => setBrand(data.surveyList.SurgeonShoeSurvey.KeyWordQuestions.questionData))
    }
    if (brand && !dataPoints) {
        Object.keys(brand).map((keyName, keyIndex) => {
            console.log(keyName, brand[keyName])
            setKeyWordValue(keyWordValue => [...keyWordValue, {[keyName]: brand[keyName]}])
            setDataPoints(dataPoints => [...dataPoints, {word: brand[keyName].word, value: brand[keyName].value, fill: colors[keyIndex], stroke: colors[keyIndex]}])
        })
    }

  }, [getUser, userInfo, currentUser, brand, getBrand]);

  return (
    <div className="BarChartDisplay">
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={dataPoints} barSize={20} layout="vertical">
          <YAxis dataKey="word" type="category" />
          <XAxis type="number"/>
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" background={{ fill: "#eee" }} onClick={(evt) => {
              console.log(evt)
          }}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
