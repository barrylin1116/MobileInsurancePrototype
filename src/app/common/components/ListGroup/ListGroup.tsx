import React from 'react';
import { Card } from 'antd';

const ListGroup: React.FC<any> = (props) => {
  return (
    <>
      <div id="ListGroup" className="row flex-column my-2">
        <div className="col">
          <Card
            hoverable
            title={
              props.showTitle && (
              // `${props.title}(${props.index + 1})`
                <div className="row flex-column flex-md-row justify-content-md-between align-items-center">
                  <div className="col">
                    {`${props.title}(${props.index + 1})`}
                  </div>
                  <div className="col-auto">
                    <div className="row align-items-center">
                      <div className="col-auto"> <div className="arrow up" /> </div>
                      <div className="col-auto"> <div className="arrow down" /> </div>
                      <div className="col-auto"> <div className="delete">刪除</div> </div>
                    </div>
                  </div>
                </div>
              )
          }
            classNames={{
              header: 'mt-3 p-0 border-0 labelName fs-5 px-3',
              body: 'px-3'
            }}
            className={props.className}
          >
            {props.children}
          </Card>
        </div>
        <div className="col">
          {
              props.showAddButton && (
                <div className="d-flex mt-2">
                  <>
                    {props.customAddButtonBlock
                      ? (props.customAddButtonBlock)
                      : (
                        <button
                          name={props.name}
                          key={props.key}
                          className="btn btn-custom btn-elife-outline-green"
                          onClick={props.handleAddButtonClick}
                        >{props.addButtonText}
                        </button>
                        )}
                  </>
                </div>
              )
          }
        </div>
      </div>
      {/* <div className="p-3 border"> */}
      {/*  <div className="d-flex justify-content-between"> */}
      {/*    <div className="labelName"> {`${props.title}(${props.index + 1})`}</div> */}
      {/*    <div className="d-flex align-items-center"> */}
      {/*      <div className="arrow up" /> */}
      {/*      <div className="arrow down" /> */}
      {/*      <div className="delete">刪除</div> */}
      {/*    </div> */}
      {/*  </div> */}
      {/*  <div className="container mw-100 w-100 p-0 m-0"> */}
      {/*    {props.children} */}
      {/*  </div> */}
      {/* </div> */}
      {/* { */}
      {/*  props.showAddButton && ( */}
      {/*    <div className="d-flex mt-2"> */}
      {/*      <button className="btn btn-custom btn-elife-outline-green" onClick={props.handleAddButtonClick}>{props.addButtonText}</button> */}
      {/*    </div> */}
      {/*  ) */}
      {/* } */}
    </>
  );
};

ListGroup.defaultProps = {
  addButtonText: '新增',
  showTitle: true,
  className: ''
};

export default ListGroup;
