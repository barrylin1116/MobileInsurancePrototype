import React from 'react';

const SubmitAndCancelButtonGroup: React.FC<{
    leftButtonText?: string,
    rightButtonText?: string,
    leftButtonOnclick?: (param?: any) => void,
    rightButtonOnclick?: (param?: any) => void,
    showSingleButton?: boolean
}> = (props) => {
  const handleLeftOnclick = () => {
    if (props.leftButtonOnclick) props.leftButtonOnclick();
  };

  const handRightOnclick = () => {
    if (props.rightButtonOnclick) props.rightButtonOnclick();
  };

  return (
    <div className="d-flex justify-content-center">
      {
            props.showSingleButton
              ? (
                <div className="col-auto m-2">
                  <button className="w-100 btn btn-custom btn-elife-green" onClick={() => handleLeftOnclick()}>
                    {props.leftButtonText ?? '確認'}
                  </button>
                </div>
                )
              : (
                <>
                  <div className="col-auto m-2">
                    <button className="w-100 btn btn-custom btn-elife-green" onClick={() => handleLeftOnclick()}>
                      {props.leftButtonText ?? '確認'}
                    </button>
                  </div>
                  <div className="col-auto m-2">
                    <button className="w-100 btn btn-custom btn-elife-outline-green" onClick={() => handRightOnclick()}>
                      {props.rightButtonText ?? '取消'}
                    </button>
                  </div>
                </>
                )
      }
    </div>
  );
};

export default SubmitAndCancelButtonGroup;
