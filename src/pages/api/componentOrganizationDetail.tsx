import React from "react";
import { Space, Typography, Input } from "antd";
import { FormikErrors, FormikTouched, ErrorMessage, FormikValues } from "formik";
import { IForm } from "./interface";
import { getInputStatus } from "./helpers";

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
            <Input
                size="large"
                name="orgname"
                value={values.orgname}
                onChange={handleChange}
                status={getInputStatus(errors, "orgname")}
            />
            <Text type="danger">
                <ErrorMessage name="orgname"></ErrorMessage>
            </Text>
            <label>ИНН организации</label>
            <Input
                size="large"
                name="orgINN"
                value={values.orgINN}
                onChange={handleChange}
                status={getInputStatus(errors, "orgINN")}
            />
            <Text type="danger">
                <ErrorMessage name="orgINN"></ErrorMessage>
            </Text>
            <label>КПП организации</label>
            <Input
                size="large"
                name="orgKPP"
                value={values.orgKPP}
                onChange={handleChange}
                status={getInputStatus(errors, "orgKPP")}
            />
            <Text type="danger">
                <ErrorMessage name="orgKPP"></ErrorMessage>
            </Text>
            <label>ОГРН организации</label>
            <Input
                size="large"
                name="orgOGRN"
                value={values.orgOGRN}
                onChange={handleChange}
                status={getInputStatus(errors, "orgOGRN")}
            />
            <Text type="danger">
                <ErrorMessage name="orgOGRN"></ErrorMessage>
            </Text>
            <label>Юридический адрес</label>
            <Input
                size="large"
                name="orgAddress"
                value={values.orgAddress}
                onChange={handleChange}
                status={getInputStatus(errors, "orgAddress")}
            />
            <Text type="danger">
                <ErrorMessage name="orgAddress"></ErrorMessage>
            </Text>
        </Space>
    );
};

export default ComponentOrganizationDetail;
