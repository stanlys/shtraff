import React from "react";
import { Button, Divider, Space, Typography, Input } from "antd";
import { ErrorMessage, FieldArray } from "formik";
import { ISubFormProps } from "./interface";
import { getInputStatus } from "./helpers";
const { Text } = Typography;

const ComponentEmailList: React.FC<ISubFormProps> = ({ values, errors, touched, handleChange }) => {
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
                                        <div style={{ display: "flex" }}>
                                            <Text>Email</Text>
                                            {index !== 0 && (
                                                <Button danger type="dashed" onClick={() => remove(index)}>
                                                    - Удалить email
                                                </Button>
                                            )}
                                        </div>
                                        <Input
                                            size="large"
                                            name={`emails[${index}]`}
                                            status={getInputStatus(errors, `emails[${index}]`)}
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
