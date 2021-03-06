import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as dataActions from '../../storage/data/actions';

const { confirm } = Modal;

type TDeleteSession = {
  id: string;
};

const DeleteSession: FC<TDeleteSession> = ({ id }) => {
  const dispatch = useDispatch();
  const deleteCrosscheckSession = payload =>
    dispatch(dataActions.crosscheckSessions.delete(payload));

  function showDeleteConfirm() {
    confirm({
      title: 'Are you sure to delete this session?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCrosscheckSession(id);
      },
    });
  }

  return (
    <Space>
      <Button type="text" onClick={showDeleteConfirm} style={{color:'red'}}>
        <i className="fas fa-trash-alt" />
      </Button>
    </Space>
  );
};

export default DeleteSession;
