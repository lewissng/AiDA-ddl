import { makeStyles } from '@material-ui/core/styles';

const iconBtnStyle = makeStyles({
    root: {
        position: 'fixed',
        zIndex: 100,
        right: '20px',
        top: '20px',
    },
});

const IconBtnHook = () => {
    const classes = iconBtnStyle();
    return classes.root;
}

export {IconBtnHook};