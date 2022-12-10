import React, { useState } from 'react';

export default function Haamid() {
    const inputData = [
        { id: 1, name: 'faraz' },
        { id: 2, name: 'ayaz' },
        { id: 3, name: 'dalvi' },
        { id: 4, name: 'shanaz' },
      ];
      const [data, setData] = useState(inputData)
  const [showTable, setShowTable] = useState(false);
  const [filter, setFilter] = useState('');


  function handleFilter(value){
    setFilter(value);
    let updatedData = inputData.filter(e => e?.name.includes(value))
    setData(updatedData);
  }
  return (
    <div style={{marginLeft: '45%'}}>
      <h1 >INTERVIEW</h1>
      <button onClick={() => setShowTable(!showTable)}>SHOW TABLE</button>
      {showTable && (
        <div style={{marginTop: 30 }}>
          <input
            type='text'
            value={filter}
            onChange={(e) => handleFilter(e.target.value)}
            placeholder='filter'
          />
          <table>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
            {data.map((x) => {
              return (
                <tr>
                  <th>{x.id}</th>
                  <th>{x.name}</th>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}
