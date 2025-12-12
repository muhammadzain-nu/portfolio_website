import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Muhammad Zain <br />
         An Aspiring Software Engineer
        </SectionTitle>
        <SectionText>
          Passionate about crafting efficient and innovative software solutions. Eager to contribute my skills and grow in a dynamic tech environment.
        </SectionText>
        <Button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
  Learn More
</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;