import React, { FC, memo, useState, useCallback } from 'react';
import { Skeleton, Switch, Card, Avatar  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Meta } = Card;

interface IProps {}
type GetProps = IProps & any;

const Index: FC = memo<IProps>((props: GetProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const onChange = useCallback<boolean>((checked: boolean): void => {
    console.log("checked: ", checked)
    setLoading(!checked);
  }, [loading]);


  return (
    <div className={styles.normal}>
      <h1 className="title">Page About</h1>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>

      {/* 骨架屏 */}
      <Switch checked={!loading} onChange={onChange} />
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </div>
  );
});

export default Index;
