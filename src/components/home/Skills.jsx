import React, { useEffect, useRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = ({ heading, compSkills, labSkills }) => {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Modified scroll position handling
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [isScrolled],
    containerRef
  );

  return (
    <div ref={containerRef}>
      <Jumbotron fluid className="bg-white m-0" id="skills">
        <Container className="p-5">
          <h2 className="display-4 pb-5 text-center">{heading}</h2>
          <Tabs
            className="skills-tabs"
            defaultActiveKey="comp-skills"
            id="skills-tabs"
            fill
          >
            <Tab
              tabClassName="skills-tab lead"
              eventKey="comp-skills"
              title="Computational Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={compSkills} isScrolled={isScrolled} />
              </Row>
            </Tab>
            <Tab
              tabClassName="skills-tab lead"
              eventKey="lcb-skills"
              title="Lab Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={labSkills} isScrolled={isScrolled} />
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Skills;
