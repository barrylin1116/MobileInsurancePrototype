import React, { useState } from 'react';
import { Card, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import _ from 'lodash';
import TopButton from '../components/TopButton';

const ProductChoose: React.FC<any> = (props) => {
  const [additionalProduct, setAdditionalProduct] = useState<any>([]);
  return (
    <>
      <Card style={{ minHeight: '450px', width: '95%' }}>
        <div className="row">
          <div className="col-2">
            <label className="text labelName">主約商品</label>
          </div>
          <div className="col-8">
            <Select
              className="productSelect"
              showSearch
              placeholder="主約商品"
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={[
                { value: '1', label: 'E好保旅行平安保險' },
                { value: '2', label: '小額終身險' },
                { value: '3', label: '重大疾病險' }
              ]}
            />
          </div>
          <div className="col-2" />
        </div>
        {
                    additionalProduct.map((a: any, index: number) => (
                      <div key={index} className="row pt-1">
                        <div className="col-2">
                          <label className="text labelName">附約商品</label>
                        </div>
                        <div className="col-8">
                          <Select
                            value={a.selectKey}
                            onChange={(e) => {
                              const _clone = _.clone(additionalProduct);
                              _clone[index].selectKey = e;
                              setAdditionalProduct(_clone);
                            }}
                            className="productSelect"
                            showSearch
                            placeholder="附約商品"
                            filterOption={(input, option) =>
                              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                            options={[
                              { value: '1', label: '身故保險金或喪葬費用保險金' },
                              { value: '2', label: '完全失能保險金' },
                              { value: '3', label: '祝壽保險金' },
                              { value: '4', label: '意外失能保險金' }
                            ]}
                          />
                        </div>
                        <div className="col-2  pt-1">
                          <button
                            type="button"
                            className="btn btn-danger me-lg-0 cus-outline-transparent InsuranceEndButton"
                            onClick={() => {
                              const _clone = _.clone(additionalProduct);
                              _clone.splice(index, 1);
                              setAdditionalProduct(_clone);
                            }}
                          >刪除
                          </button>
                        </div>
                      </div>
                    ))
                }
        <div className="row mt-3 justify-center">
          <div className="col-4" style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="btn btn-outline-primary me-lg-0 cus-outline-transparent"
              onClick={() => {
                const _clone = _.clone(additionalProduct);
                _clone.push({});
                setAdditionalProduct(_clone);
              }}
            >增加附約商品 <PlusOutlined />
            </button>
          </div>
        </div>
      </Card>
      <TopButton />
    </>
  );
};

export default ProductChoose;
