import styled from 'styled-components';
import { SeparatedListItem } from './Lists';
import { useState } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledAccordion = styled.div`
  /* For some reason, aria-expanded doesn't work when put inside Header or Details elements, seems to require use of classes. */
  .icon {
    transition: all 0.3s ease;
  }
  .icon[aria-expanded='true'] {
    transform: rotateZ(90deg);
  }

  .details {
    overflow: hidden;
    max-height: 300px;
    transition: max-height 0.4s ease-in;
  }
  .details[aria-expanded='true'] {
    max-height: 0px;
    transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
  }
  &:hover {
    cursor: pointer;
  }
`;
const Header = styled.div``;
const OpenChevron = styled.div`
  padding-left: 1rem;
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
    <SeparatedListItem>
      <StyledAccordion onClick={toggleAccordion}>
        <Header aria-expanded={isActive}>
          {props.title}
          {props.hasChevron ? (
            <OpenChevron>
              <FontAwesomeIcon
                className='icon'
                icon={faAngleRight}
                aria-expanded={isActive}
              />
            </OpenChevron>
          ) : (
            ''
          )}
        </Header>
        <Details className='details' aria-expanded={!isActive}>
          {props.children}
        </Details>
      </StyledAccordion>
    </SeparatedListItem>
  );
}
