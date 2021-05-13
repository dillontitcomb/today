import styled from 'styled-components';
import { ListItem } from './Lists';
import { useState } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledAccordion = styled.div`
  /* For some reason, aria-expanded doesn't work when put inside Header or Details elements, seems to require use of classes. */
  .icon {
    transition: all 0.35s ease;
  }
  .icon[aria-expanded='true'] {
    transform: rotateZ(90deg);
  }

  .details {
    overflow: hidden;
    max-height: 300px;
    transition: max-height 1s ease-in-out;
  }
  .details[aria-expanded='true'] {
    max-height: 0px;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const OpenChevron = styled.div`
  margin: 0 0.5rem 0 0;
`;
const Details = styled.div``;

export default function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    console.log('Trying to toggle accordion');
    setIsActive(!isActive);
  }

  return (
    <ListItem>
      <StyledAccordion onClick={toggleAccordion}>
        <Header className='header' aria-expanded={isActive}>
          <span>{props.title}</span>
          <OpenChevron>
            <FontAwesomeIcon
              className='icon'
              icon={faAngleRight}
              aria-expanded={isActive}
            />
          </OpenChevron>
        </Header>
        <Details className='details' aria-expanded={!isActive}>
          {props.children}
        </Details>
      </StyledAccordion>
    </ListItem>
  );
}
