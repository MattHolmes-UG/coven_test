import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function PositionedSnackbar(props) {
  const { vertical, horizontal, open, message } = props.state;

  const handleClose = () => {
    props.setState({ ...props.state, open: false });
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      >
      </Snackbar>
    </div>
  );
}
