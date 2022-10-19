import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import {
  HiBadgeCheck,
  HiGlobeAlt,
  HiBan,
  HiExclamationCircle,
  HiFire,
} from 'react-icons/hi';
import { MainStatItem, OtherStatItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      {total ? (
        <>
          <Box
            as="ul"
            width="100%"
            mb="4"
            display="flex"
            justifyContent="center"
          >
            <MainStatItem>
              <HiBadgeCheck />
              <p>Good: {good}</p>
            </MainStatItem>
            <MainStatItem>
              <HiGlobeAlt />
              <p>Neutral: {neutral}</p>
            </MainStatItem>
            <MainStatItem>
              <HiBan />
              <p>Bad: {bad}</p>
            </MainStatItem>
          </Box>
          <Box as="ul" width="100%" display="flex" justifyContent="center">
            <OtherStatItem>
              <HiExclamationCircle />
              <p>Total: {total}</p>
            </OtherStatItem>
            <OtherStatItem>
              <HiFire />
              <p>Positive feedback: {positivePercentage}</p>
            </OtherStatItem>
          </Box>
        </>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
