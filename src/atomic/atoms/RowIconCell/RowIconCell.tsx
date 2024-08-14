import React from 'react';
import folder from '/src/assets/images/icons/folder.svg';

const RowIconCell: React.FC = () => {
  return (
    <div style={{ padding: "0 30px 0 30px" }}>
      <img src={folder}/>
    </div>
  );
};

export default RowIconCell;
