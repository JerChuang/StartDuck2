import React from 'react';

const CompletedActivitiesItem = (props) => {
  return (
    <div className="activities_activityItem">
      <span>{props.duration} m</span>
      <span >{props.name}</span>
      <input type="checkbox" disabled={true} checked={props.is_complete} />
    </div>
  )
}

export default CompletedActivitiesItem;
