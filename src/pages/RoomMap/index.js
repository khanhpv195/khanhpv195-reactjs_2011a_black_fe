import React from 'react';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
function RoomMap(props) {
  return (
    <LoadingMask loading={true} text={"loading..."}>
      <div style={{ width: 500, height: 300 }}>Compoment You want to display</div>
    </LoadingMask>
  );
}

export default RoomMap;