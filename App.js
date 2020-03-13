import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Form } from './Form';
export const App = () => {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState(false);
  console.log(data);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(responsedata => setFullData(responsedata));
  }, []);

  const onSearch = useCallback(e => {
    const { target: { value } } = e;
    const lowerCaseValue = value.toLowerCase();
    setSearch(!!lowerCaseValue);
    const arrayTmp = fullData.filter(element =>
      element.name.toLowerCase().includes(lowerCaseValue) ||
      //element.surname.toLowerCase().includes(lowerCaseValue) ||
      element.email.toLowerCase().includes(lowerCaseValue) ||
      element.phone.includes(value)
    );
    setData(arrayTmp);
  }, [fullData]);

  return <div className="contacts">
    <div>
      <h3>Search contact</h3>
      <input onChange={onSearch} />
    </div>
    <Form data={search ? data : fullData} />
  </div>

}
export default App;
