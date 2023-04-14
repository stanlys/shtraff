import React from "react";
import { Space, Input, Typography, Switch, Button, Divider } from "antd";
const { Text } = Typography;

const ComponentBank = () => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Название счета</Text>
            <Input size="large" placeholder="Название счета"/>
            <label>Номер счет</label>
            <Input size="large" placeholder="Номер счет"/>
            <label>БИК счета </label>
            <Input size="large" placeholder="Корр. номер счета"/>
            <label>Корр. номер счета</label>
            <Input size="large" placeholder=""/>
            <label>Дефолтный счет</label>
            <Switch defaultChecked />
            <Divider></Divider>
            <Button type="dashed" block>
                + Добавить еще счет
            </Button>
        </Space>
    );
};

export default ComponentBank;
