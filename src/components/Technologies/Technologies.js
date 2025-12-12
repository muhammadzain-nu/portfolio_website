import React from 'react';
import { DiCode, DiFirebase, DiGithub, DiLinux, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've Started my journey in the world of Software Development by learning various technologies. Here are a few technologies I've worked with:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git-Hub</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Version Control and Collaboration
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiLinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ubuntu
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>C and C++</ListTitle>
          <ListParagraph>
            Experience with <br />
            Visual Studio and Leetcode
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
