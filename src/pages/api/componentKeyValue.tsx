import React from "react";
import { Button, Space, Input } from "antd";
import { FieldArray, FormikErrors, FormikTouched, FormikValues } from "formik";
import { IForm, IFormik } from "./interface";
import { Empty } from "antd";

interface ComponentEmailListProps {
    values: FormikValues;
    errors: FormikErrors<IForm>;
    touched: FormikTouched<IForm>;
    handleChange: React.ChangeEventHandler;
}

const ComponentKeyValue: React.FC<ComponentEmailListProps> = ({ values, errors, touched, handleChange }) => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Ключ</td>
                            <td>Значение</td>
                            <td> </td>
                        </tr>
                    </thead>

                    <FieldArray name="keyValues">
                        {(fieldsProps) => {
                            const { push, remove, form } = fieldsProps;
                            const values = form.values as IFormik;
                            return (
                                <tbody>
                                    {values.keyValues.length == 0 && (
                                        <tr>
                                            <td colSpan={2}>
                                                <Empty />
                                            </td>
                                        </tr>
                                    )}
                                    {values.keyValues.map((keyvalue, index) => (
                                        <tr key={"key" + index}>
                                            <td>
                                                <Input
                                                    name={`keyValues[${index}].key`}
                                                    value={keyvalue.key}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td>
                                                <Input
                                                    name={`keyValues[${index}].value`}
                                                    value={keyvalue.value}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td>
                                                <Button type="text" danger onClick={() => remove(index)}>
                                                    Х
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td>
                                            <Button
                                                type="link"
                                                onClick={() => {
                                                    push({ key: "", value: "" });
                                                }}
                                            >
                                                Добавить ключ-значение
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        }}
                    </FieldArray>
                </table>
            </div>
        </Space>
    );
};

export default ComponentKeyValue;
