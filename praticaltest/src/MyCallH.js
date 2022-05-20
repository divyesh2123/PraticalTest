import React from 'react';
import axios from 'axios';

export default function MyCallH() {
    const [submitting, setSubmitting] = React.useState(true)
    const [data, setData] = React.useState(null)
    const [query, setQuery] = React.useState("react hooks")
  
    const getData = React.useCallback(async () => {

            console.log("fuction call");
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      )
      setData(response.data)
    }, [query])
  
    React.useEffect(() => {

        console.log("ddddd");
      if (submitting) { // is true initially, and again when button is clicked
        getData().then(() => setSubmitting(false))
      }
    }, [submitting, getData])

    
  
    const handleChange = event => {
      event.preventDefault()
      setQuery(event.target.value)
    }
  return (
    <div>
    <input type='text' onChange={handleChange} value={query} />
<button type='button' onClick={() => setSubmitting(true)}>
    test
     </button>
    </div>
  )
}