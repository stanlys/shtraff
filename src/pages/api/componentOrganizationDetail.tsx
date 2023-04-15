import React from "react";
import { Space, Typography, Input, Button } from "antd";
import { Form, FormikConfig, Formik, FormikValues, useFormik, withFormik, FormikProps, Field } from "formik";

const { Text } = Typography;

export interface IOrgProps {
    values: FormikValues;
    handleChange: React.ChangeEventHandler;
}

const ComponentOrganizationDetail = ({values, handleChange}: IOrgProps) => {
    return (
            <Space direction="vertical" style={{ width: "30rem" }}>
                <Text>Название организации</Text>
                <Input size="large" name="orgname" value={values.orgname} onChange={handleChange} />
                <label>ИНН организации</label>
                <Input size="large" name="orgINN" value={values.orgINN} onChange={handleChange} />
                <label>КПП организации</label>
                <Input size="large" name="orgKPP" value={values.orgKPP} onChange={handleChange} />
                <label>ОГРН организации</label>
                <Input size="large" />
                <label>Юридический адрес</label>
                <Input size="large" />
            </Space>
    );
};

export default ComponentOrganizationDetail;
