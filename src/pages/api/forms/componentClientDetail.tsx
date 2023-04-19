import React from "react";
import { Space, Typography, Input } from "antd";
import { ISubFormProps } from "./interface";

const { Text } = Typography;

const ComponentClientDetail = ({ values, handleChange, errors, touched }: ISubFormProps) => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Имя</Text>
            <Input
                size="large"
                status={errors.name ? "error" : ""}
                onChange={handleChange}
                name="name"
                value={values.name}
            />
            {errors.name && <Text type="danger">{errors.name}</Text>}
            <label>Email</label>
            <Input
                size="large"
                status={errors.email ? "error" : ""}
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <Text type="danger">{errors.email}</Text>}
            <label>Дней отсрочки </label>
            <Input
                size="large"
                status={errors.days ? "error" : ""}
                name="days"
                value={values.days}
                onChange={handleChange}
            />
            {errors.days && <Text type="danger">{errors.days}</Text>}
            <label>Кредитный лимит</label>
            <Input
                size="large"
                status={errors.email ? "error" : ""}
                name="credit"
                value={values.credit}
                onChange={handleChange}
            />
            {errors.credit && <Text type="danger">{errors.credit}</Text>}
        </Space>
    );
};

export default ComponentClientDetail;
