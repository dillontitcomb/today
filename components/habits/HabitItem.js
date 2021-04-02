import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;

const WarningContainer = styled.div`
  color: ${({ theme }) => theme.colors.danger};
`;

const WarningText = styled.span`
  padding: 0.4rem;
`;

export default function HabitItem({ habit }) {
  return (
    <Link href={`/habits/${habit._id}`}>
      <ItemContainer>
        <span>{habit.name}</span>
        <WarningContainer>
          {habit.tasks.length == 0 && (
            <div>
              <FontAwesomeIcon icon={faTimes} />
              <WarningText>Needs Task</WarningText>
            </div>
          )}
        </WarningContainer>
      </ItemContainer>
    </Link>
  );
}
