import React from 'react';

const ListGroup: React.FC<any> = (props) => {
  return (
    <>
      <div className="p-3 border">
        <div className="d-flex justify-content-between">
          <div className="labelName"> {`${props.title}(${props.index + 1})`}</div>
          <div className="d-flex align-items-center">
            <div className="arrow up" />
            <div className="arrow down" />
            <div className="delete">刪除</div>
          </div>
        </div>
        <div className="container mw-100 w-100 p-0 m-0">
          {props.children}
        </div>
      </div>
      {
        props.showAddButton && (
          <div className="d-flex mt-2">
            <button className="btn btn-outline-primary" onClick={props.handleAddButtonClick}>{props.addButtonText}</button>
          </div>
        )
      }
    </>
  );
};

ListGroup.defaultProps = {
  addButtonText: '新增'
};

export default ListGroup;
