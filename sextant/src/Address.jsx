import React, {useState, useEffect} from 'react'

export default function Address(props) {
  const [ipAddress, setIPAddress] = useState("")

  useEffect(() => {
    if(props.addressType === "IPv4") {
      fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }
    else if (props.addressType === "IPv6") {
      fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }
  }, [])

  return (
    <div>
      {ipAddress}
    </div>
  )
}
