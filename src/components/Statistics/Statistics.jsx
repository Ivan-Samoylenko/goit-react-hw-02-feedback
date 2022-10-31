import PropTypes from 'prop-types';
import { Box } from 'components/Box';
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
  return total > 0 ? (
    <>
      <Box
        as="ul"
        width="100%"
        mb="4"
        display="flex"
        flexDirection={['column', 'column', 'row']}
        justifyContent="center"
        alignItems="center"
      >
        <MainStatItem>
          <HiBadgeCheck size="24" />
          <p>Good: {good}</p>
        </MainStatItem>
        <MainStatItem>
          <HiGlobeAlt size="24" />
          <p>Neutral: {neutral}</p>
        </MainStatItem>
        <MainStatItem>
          <HiBan size="24" />
          <p>Bad: {bad}</p>
        </MainStatItem>
      </Box>
      <Box
        as="ul"
        width="100%"
        display="flex"
        flexDirection={['column', 'column', 'row']}
        justifyContent="center"
        alignItems="center"
      >
        <OtherStatItem>
          <HiExclamationCircle size="24" />
          <p>Total: {total}</p>
        </OtherStatItem>
        <OtherStatItem>
          {true && <HiFire size="24" />}
          <p>Positive feedback: {positivePercentage}</p>
        </OtherStatItem>
      </Box>
    </>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
