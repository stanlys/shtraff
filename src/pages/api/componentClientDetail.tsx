import React from "react";
import { Button, Space, Typography, Input } from "antd";

const { Text } = Typography;

const ComponentClientDetail = () => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Имя</Text>
            <Input size="large" />
            <label>Email</label>
            <Input size="large" />
            <label>Дней отсрочки </label>
            <Input size="large" />
            <label>Кредитный лимит</label>
            <Input size="large" />
        </Space>
    );
};

export default ComponentClientDetail;
