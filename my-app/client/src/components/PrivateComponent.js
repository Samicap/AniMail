import axios from 'axios';
import { useState } from 'react';

export default function PrivateComponent(props) {

  const [privateData, setPrivateData] = useState(null)

  const fetchInfo = () => {
    axios.post('/api/private').then(res => {
      if (res.data.err) {
        setPrivateData(res.data.err)
      } else {
        setPrivateData(res.data.data)
      }
    })
  }
  return (
    <section>
      <h1>PrivateComponent</h1>
      <section>{privateData}</section>
      <button onClick={fetchInfo}>Fetch private route information</button>
    </section>
  )
}