import React from 'react'

export default function ShowMoreTextToggle({text}) {
    const [showMore, setShowMore] = React.useState(false);
    const truncateText = React.useMemo(() => {
        console.log("this is the calculating");
      return text.slice(0, 30).concat('...');
});


    const myData =() => {
      console.log("this is the calculating");
      return text.slice(0, 30).concat('...');
    }

  return (
    <div>
        <p onClick={() => setShowMore(!showMore)}>
      {showMore ? text : truncateText} {showMore ? 'less' : 'more'}
    </p>
    </div>
  )
}