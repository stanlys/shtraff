import React from "react";
import { Button, Divider, Space, Typography, Input } from "antd";
import { ErrorMessage, FieldArray, FormikErrors, FormikTouched, FormikValues } from "formik";
import { IForm } from "./modal";
const { Text } = Typography;

interface ComponentEmailListProps {
    values: FormikValues;
    errors: FormikErrors<IForm>;
    touched: FormikTouched<IForm>;
    handleChange: React.ChangeEventHandler;
}

const ComponentEmailList: React.FC<ComponentEmailListProps> = ({ values, errors, touched, handleChange }) => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <FieldArray name="emails">
                {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    return (
                        <>
                            <div>
                                {(form.values.emails as string[]).map((email, index) => (
                                    <div key={`email${index}`}>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Text>Email</Text>
                                            <Button danger type="dashed" onClick={() => remove(index)}>
                                                - Удалить email
                                            </Button>
                                        </div>
                                        <Input
                                            size="large"
                                            name={`emails[${index}]`}
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        <Text type="danger">
                                            <ErrorMessage name={`emails[${index}]`}></ErrorMessage>
                                        </Text>
                                        <Divider></Divider>
                                    </div>
                                ))}
                            </div>
                            <Button type="dashed" block onClick={() => push("")}>
                                + Добавить еще email
                            </Button>
                        </>
                    );
                }}
            </FieldArray>
        </Space>
    );
};

export default ComponentEmailList;
