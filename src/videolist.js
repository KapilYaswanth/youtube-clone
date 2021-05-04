import React from 'react'
import './Videos.css'
import Videos from './Videos'
export default function videolist({ data, onVideoSelected }) {
    return (
        <div className="videolist">
            <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Recommended
        </h3>
        <Videos data={data} onVideoSelected={onVideoSelected} />
      </div>
        </div>
    )
}
