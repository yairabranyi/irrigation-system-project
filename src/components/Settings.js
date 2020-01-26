import React, {useState ,useEffect} from 'react'
import SetLocation from './SettingsLocation/SetLocation'

function Settings (props) {

const [cityName, setCityName] = useState("update your location")
useEffect(()=>{
  console.log("component updated");
  
})

  return (
    <div>
    <SetLocation cityName={cityName}/>
    </div>
  )
}

export default Settings
