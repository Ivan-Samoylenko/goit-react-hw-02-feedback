import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Option, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="center"
      alignItems="center"
    >
      {options.map(option => {
        return (
          <Option key={option}>
            <Button
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          </Option>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
