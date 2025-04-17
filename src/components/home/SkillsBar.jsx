import React, { useState, useEffect, useRef } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value }) {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const currentRef = progressBarRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={isVisible ? "progress-bar-animation" : "progress"}
        now={isVisible ? value : 0}
        ref={progressBarRef}
      />
    </div>
  );
}

export default SkillsBar;
