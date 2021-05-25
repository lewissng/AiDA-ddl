// styles
import './CheckBox.scss';

type Props = {
  name: string;
  onChange: () => void;
  checked: boolean;
}

const CheckBox: React.FC<Props> = ({ name, onChange, checked }) => {

  return (
    <p>
      <input type="checkbox" value={name} checked={checked} onChange={onChange} />
      <label>{name}</label>
    </p>
  );
}

export default CheckBox;