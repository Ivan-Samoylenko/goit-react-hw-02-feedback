import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { Option, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <Box as="ul" display="flex" justifyContent="center">
        {options.map((option, index) => {
          return (
            <Option key={index}>
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
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
