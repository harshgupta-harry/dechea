import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.3em',
      height: '6.3em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#556E9A',
      // outline: '1px solid slategrey',
    },
  },
  root: {
    backgroundColor: '#142A51',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  paper: {
    marginTop: 0,
    backgroundColor: '#142A51',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputRoot: {
    backgroundColor: '#1C3663',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    fontSize: 13,
    color: '#6F8BBC',
    // '& .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'green',
    // },
    // '&:hover .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'red',
    // },
    // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'purple',
    // },
  },

  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    // boxShadow:
    //   'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#041532',
    // backgroundImage:
    //   'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      //   outlineOffset: 2,
    },
    // 'input:hover ~ &': {
    //   backgroundColor: '#ebf1f5',
    // },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#346BD1',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

export default useStyles;
