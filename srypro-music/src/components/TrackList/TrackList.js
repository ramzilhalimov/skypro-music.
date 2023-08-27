import  { useState, useEffect } from "react";
import SkeletonTrack from "../SkeletonBar/SkeletonTrack";
import './TrackList.css'
import { Track } from '../Track/Track'
import { TrackOne } from "../Track/TrackOne";
import { TrackTwo } from "../Track/TrackTwo";
import { TrackThree } from "../Track/TrackThree";
import { TrackFour } from "../Track/TrackFour";
import { TrackFive } from "../Track/TrackFive";
import { TrackSix } from "../Track/TrackSix";
import { TrackSeven } from "../Track/TrackSeven";
import { TrackEight } from "../Track/TrackEight";
import { TrackNine } from "../Track/TrackNine";
import { TrackTen } from "../Track/TrackTen";
export function TrackList() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Content__playlist playlist">
      <div className="Playlist__item">
        {loading && <SkeletonTrack/>}
      {!loading && <Track />}
      </div>
      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackOne />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackTwo />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackThree />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackFour />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackFive />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackSix />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackSeven />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackEight />}
      </div>

      <div className="Playlist__item">
      {loading && <SkeletonTrack/>}
      {!loading && <TrackNine />}
      </div>

      <div className="Playlist__item">
       <TrackTen />
      </div>
    </div>
  )
}
