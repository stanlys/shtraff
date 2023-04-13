import React from "react";
import { Space, Input, Typography, Switch, Button, Divider } from "antd";
const { Text } = Typography;

const ComponentBank = () => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Название счета</Text>
            <Input size="large" />
            <label>Номер счет</label>
            <Input size="large" />
            <label>БИК счета </label>
            <Input size="large" />
            <label>Корр. номер счета</label>
            <Input size="large" />
            <label>Корр. номер счета</label>
            <Switch defaultChecked />
            <Divider></Divider>
            <Button type="dashed" block>
                + Добавить еще счет
            </Button>
        </Space>
    );
};

export default ComponentBank;
