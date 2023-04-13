import React, { useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
const { Text, Link } = Typography;

const ComponentEmailList = () => {
    const [emailList, setEmailList] = useState<string[]>([]);

    const addEmail = () => {
        setEmailList((emailList) => [...emailList, ""]);
    };

    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Email</Text>
            <Input size="large" />
            <Divider></Divider>
            {emailList.map((email, index) => (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Text>Email</Text>
                        <Button danger onClick={() => console.log("delete", index)}>
                            - Удалить email
                        </Button>
                    </div>

                    <Input size="large" />

                    <Divider></Divider>
                </>
            ))}
            <Button type="dashed" block onClick={addEmail}>
                + Добавить еще email
            </Button>
        </Space>
    );
};

export default ComponentEmailList;
