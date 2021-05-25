import { useState } from 'react';
// components
import DropDownList from './components/DropDownList'
// styles
import './App.scss';

export type ListItemType = {
  name: string;
}

const countriesList: ListItemType[] = [
  {
    name: 'Australia',
  },
  {
    name: 'Bahrain',
  },
  {
    name: 'China',
  },
  {
    name: 'Denmark',
  },
  {
    name: 'Finland',
  }
];

const App = () => {

  const [boxIsChecked, setChecked] = useState(new Map());

  const handleClick = (event: Event) => {
    // mutate the current Map
    boxIsChecked.set((event.target as HTMLInputElement).value, (event.target as HTMLInputElement).checked)
    // update the state by creating a new Map
    setChecked(new Map(boxIsChecked));
    console.log("checkedItems: ", boxIsChecked);
  }

  return (
    <div>
      <DropDownList list={countriesList} handleClick={handleClick} checked={boxIsChecked} />
      <h1>Countries checkboxes</h1>
    </div>
  );
}

export default App;
