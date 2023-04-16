import React from "react";
import { Space, Typography, Input, Button } from "antd";
import {
    Form,
    FormikConfig,
    Formik,
    FormikValues,
    useFormik,
    withFormik,
    FormikProps,
    Field,
    FormikErrors,
    FormikTouched,
} from "formik";
import { IForm } from "./modal";

const { Text } = Typography;

export interface IOrgProps {
    values: FormikValues;
    errors: FormikErrors<IForm>;
    touched: FormikTouched<IForm>;
    handleChange: React.ChangeEventHandler;
}

const ComponentOrganizationDetail = ({ values, handleChange, errors, touched }: IOrgProps) => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Text>Название организации</Text>
            <Input size="large" name="orgname" value={values.orgname} onChange={handleChange} />
            {touched.orgname && <p>{errors.orgname}</p>}
            <label>ИНН организации</label>
            <Input size="large" name="orgINN" value={values.orgINN} onChange={handleChange} />
            {errors.orgINN && touched.orgINN ? <div>{errors.orgINN}</div> : null}
            <label>КПП организации</label>
            <Input size="large" name="orgKPP" value={values.orgKPP} onChange={handleChange} />
            <label>ОГРН организации</label>
            <Input size="large" name="orgOGRN" value={values.orgOGRN} onChange={handleChange} />
            <label>Юридический адрес</label>
            <Input size="large" name="orgAddress" value={values.orgAddress} onChange={handleChange} />
        </Space>
    );
};

export default ComponentOrganizationDetail;
