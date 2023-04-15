import React, { useEffect } from "react";
import { Button, Space, Typography, Input } from "antd";
import { FormikValues, withFormik } from "formik";

const { Text } = Typography;


export interface IClientProps {
    values: FormikValues;
    handleChange: React.ChangeEventHandler;
}

const ComponentClientDetail = ({ values, handleChange }: IClientProps) => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Имя</Text>
            <Input size="large" onChange={handleChange} name="name" value={values.name} />
            <label>Email</label>
            <Input size="large" name="email" value={values.email} onChange={handleChange} />
            <label>Дней отсрочки </label>
            <Input size="large" name="days" value={values.days} onChange={handleChange} />
            <label>Кредитный лимит</label>
            <Input size="large" />
        </Space>
    );
};

// export default withFormik({
//     mapPropsToValues: () => {
//         const res: IClient = {
//             name: "",
//             creditLimit: "",
//             days: "",
//             email: "",
//         };
//         return res;
//     },
//     handleSubmit: (value) => {
//         console.log("test", value.name);
//     },
// })(ComponentClientDetail);

export default ComponentClientDetail;
