import React, {useState ,useEffect} from 'react'
import SetLocation from './SettingsLocation/SetLocation'
import SetValvesName from './SettingsValvesName/SetValvesName'

function Settings (props) {

const [cityName, setCityName] = useState("update your location")
useEffect(()=>{
  console.log("component updated");
  
})

  return (
    <div>
    <SetLocation cityName={cityName}/>
    <SetValvesName/>
    </div>
  )
}

export default Settings
