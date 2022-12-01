import React from 'react'

export default function Activity({activity}) {
    console.log(activity)
  return (
    <div key={activity.key}>
        <h3>You could: {activity.activity}</h3>
        <p>Type of activity: {activity.type}</p>
        {activity.link? <p>Click to learn more about this activity: {activity.link}</p> : null}
        
    </div>
  )
}
