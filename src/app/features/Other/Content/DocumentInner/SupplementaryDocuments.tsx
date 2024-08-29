import React, { useEffect, useRef, useState } from 'react';
import { Button, message, Modal, Table, TableColumnsType, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import maxzIndexService from '../../../../core/services/maxzIndexService';

declare const $: any;

const SupplementaryDocuments: React.FC<any> = (props) => {
  const inputElemRef = useRef<HTMLSelectElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null); // Ref for document description input
  const [fileName, setFileName] = useState<string>('未選擇任何檔案');
  const [fileList, setFileList] = useState<any[]>([]); // Store the selected files
  const [fileUploadSuccessList, setFileUploadSuccessList] = useState<any[]>([]); // Store the selected files
  const [removeIndex, setRemoveIndex] = useState<number>(0); // Store the selected files
  const [previewContent, setPreviewContent] = useState<string>(''); // Store preview content
  const [previewFileType, setPreviewFileType] = useState<string>(''); // Store file type for preview
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // Control modal visibility
  const [tipsModalVisible, setTipsModalVisible] = useState(false);

  useEffect(() => {
    $(inputElemRef.current).selectpicker();
  }, []);

  const uploadProps: UploadProps = {
    beforeUpload: (file: File) => {
      message.success(`File selected: ${file.name}`);
      setFileList([file]);
      setFileName(file.name);
      return false; // Prevents auto-upload
    },
    fileList: fileList
  };

  const handlePreview = (file: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const content = e.target.result;

      // Set the content and file type based on file type
      if (file.type.startsWith('image/')) {
        setPreviewFileType('image');
        setPreviewContent(content); // Data URL for image preview
      } else if (file.type === 'text/plain' || file.type === 'application/json') {
        setPreviewFileType('text');
        setPreviewContent(content); // Plain text or JSON content
      } else {
        setPreviewFileType('unknown');
        setPreviewContent('不支持的文件类型'); // Unsupported file type
      }

      setIsModalVisible(true);
    };

    reader.readAsDataURL(file); // For images
    if (file.type === 'text/plain' || file.type === 'application/json') {
      reader.readAsText(file); // For text and JSON files
    }
  };

  const handleRemove = (index: number) => {
    setTipsModalVisible(true);
    setRemoveIndex(index);
  };

  const handleTipsModalSubmit = () => {
    setFileUploadSuccessList((prevList) => {
      const newList = [...prevList];
      newList.splice(removeIndex, 1);
      return newList;
    });
    setTipsModalVisible(false);
  };

  const handleTipsModalCancel = () => {
    // tipsModalRef.current.close();
    setTipsModalVisible(false);
  };

  const handleUpload = () => {
    if (fileList.length === 0) {
      message.warning('請選擇一個檔案後再上傳');
      return;
    }

    const documentType = inputElemRef.current?.value || ''; // Get the selected document type
    const description = descriptionInputRef.current?.value || ''; // Get the document description

    // Normally, you would send the file to the server here
    // For demonstration, we'll just show a success message
    message.success(`Uploading: ${fileList[0].name}`);

    // Get the next sequence number
    const nextSequenceNumber = fileUploadSuccessList.length + 1;
    const selectedOption = documentTypeOption.find((item: any) => item.value === documentType);
    console.log(selectedOption);
    setFileUploadSuccessList([
      {
        no: nextSequenceNumber,
        fileName: fileList[0].name,
        documentType: selectedOption ? selectedOption.description : '',
        description: description,
        file: fileList[0] // Store the file object for preview
      },

      ...fileUploadSuccessList
    ]);

    // Reset the file list and file name after upload
    setFileList([]);
    setFileName('未選擇任何檔案');
    if (inputElemRef.current) inputElemRef.current.value = '';
    if (descriptionInputRef.current) descriptionInputRef.current.value = '';
  };

  const documentTypeOption: any = [
    { description: '身分證明文件', key: 'identityDocument', value: 'identityDocument' },
    { description: '繳費憑證', key: 'paymentVoucher', value: 'paymentVoucher' },
    { description: '其他', key: 'other', value: 'other' }
  ];

  const columns: TableColumnsType = [
    {
      title: '序號',
      dataIndex: 'no',
      width: 80
    },
    {
      title: '文件類型',
      dataIndex: 'documentType',
      width: 200
    },
    {
      title: '文件說明',
      dataIndex: 'description'
    },
    {
      title: '檔案操作',
      dataIndex: 'fileOperations',
      width: 200,
      render: (text, record, index) => (
        <>
          <div className="p-2">
            <button type="button" className="btn btn-outline-primary" onClick={() => handlePreview(record.file)}>
              查看
            </button>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-outline-primary" onClick={() => handleRemove(index)}>
              移除
            </button>
          </div>
        </>
      )
    }
  ]
  ;

  return (
    <div id="SupplementaryDocuments">
      <div className="row m-0 p-2" style={{ background: '#C1E5FA' }}>
        <div className="col-12">
          <div className="labelName m-0">
            請選擇要上傳的補充文件
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5">
          <div className="name labelName">文件類型</div>
          <select ref={inputElemRef} {...props} aria-label={props.title} name="documentType">
            {
              documentTypeOption.map((option: any) => {
                return (
                  <option
                    key={option.key} value={option.value} title={option.description}
                    aria-label={option.description}
                  >{option.description}
                  </option>
                );
              })
            }
          </select>
        </div>
        <div className="col-5">
          <div className="name labelName">文件說明</div>
          <input ref={descriptionInputRef} type="labelName" name="description" className="form-control" />
        </div>
      </div>
      <div className="row m-0">
        <div className="col-5 ">
          <div className="name labelName">選擇檔案</div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #a9a9a9',
            borderRadius: '4px',
            height: '50px'
          }}
          >
            <div
              className="labelName m-0" style={{
                padding: '8px',
                flexGrow: 1,
                color: fileName === '未選擇任何檔案' ? '#999' : '#000',
                height: '50px'
              }}
            >{fileName}
            </div>
            <Upload {...uploadProps} showUploadList={false}>
              <Button
                className="labelName m-0"
                icon={<UploadOutlined />}
                style={{ borderRadius: '0 4px 4px 0', backgroundColor: '#003E63', color: '#fff', height: '50px' }}
              >
                請選擇檔案
              </Button>
            </Upload>
          </div>
        </div>
        <div className="col-5 align-content-end">
          <button type="button" className="btn btn-primary" onClick={handleUpload}>
            確認上傳
            <div className="add-icon" />
          </button>
        </div>
      </div>
      {
        fileUploadSuccessList.length > 0 && (
          <>
            <div className="row m-0" style={{ background: '#C1E5FA' }}>
              <div className="name labelName">補充文件清單</div>
            </div>
            <div className="row m-0">
              <Table pagination={false} columns={columns} dataSource={fileUploadSuccessList} />
            </div>
          </>
        )
      }
      <Modal
        visible={isModalVisible}
        title="檔案預覽"
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        {previewFileType === 'image' && (
          <img src={previewContent} alt="File Preview" style={{ width: '100%' }} />
        )}
        {previewFileType === 'text' && (
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{previewContent}</pre>
        )}
        {previewFileType === 'unknown' && (
          <p>{previewContent}</p>
        )}
      </Modal>
      <Modal
        visible={tipsModalVisible}
        title={false}
        footer={null}
        zIndex={maxzIndexService.getMaxZIndex()}
        closable={false}
      >
        <div className="row labelName justify-content-center">
          是否確認移除
        </div>
        <div className="row labelName row-cols-auto justify-content-center">
          {/* <div className="col-6"> */}
          <button type="button" className="p-2 m-2 btn btn-outline-primary" onClick={() => handleTipsModalSubmit()}>
            確認
          </button>
          <button type="button" className="p-2 m-2 btn btn-outline-primary" onClick={() => handleTipsModalCancel()}>
            取消
          </button>
          {/* </div> */}
        </div>
      </Modal>
    </div>
  );
};
export default SupplementaryDocuments;
