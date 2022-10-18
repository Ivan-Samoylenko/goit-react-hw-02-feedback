import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box
      width={['100%', 'mobile', 'tablet', 'desctop']}
      mx="auto"
      px="4"
      py="3"
      bg="background"
    >
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
