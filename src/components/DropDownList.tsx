import { useState } from 'react';
// components
import Drawer from '@material-ui/core/Drawer';
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';
import CheckBox from './CheckBox';
// styles
import './DropDownList.scss';
import { IconBtnHook } from '../custom-hooks/IconButtonHook';
// props
import { ListItemType } from '../App';

type Props = {
  handleClick: any;
  checked: any;
  list: ListItemType[];
}

const DropDownList: React.FC<Props> = ({ list, handleClick, checked }) => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div>
      <Drawer anchor='right' open={listOpen} onClose={() => setListOpen(false)}>
        {
          list.map(item => (
            <CheckBox name={item.name} onChange={handleClick} checked={checked.get(item.name)} />
          ))
        }
      </Drawer>
      <IconButton className={IconBtnHook()} onClick={() => setListOpen(true)}>
        <DehazeIcon />
      </IconButton>
    </div>
  );
}

export default DropDownList;
