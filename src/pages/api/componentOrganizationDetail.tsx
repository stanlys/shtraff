import React from "react";
import { Space, Typography, Input } from "antd";

const { Text } = Typography;

const ComponentOrganizationDetail = () => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Название организации</Text>
            <Input size="large" />
            <label>ИНН организации</label>
            <Input size="large" />
            <label>КПП организации</label>
            <Input size="large" />
            <label>ОГРН организации</label>
            <Input size="large" />
            <label>Юридический адрес</label>
            <Input size="large" />
        </Space>
    );
};

export default ComponentOrganizationDetail;
