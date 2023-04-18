import React, { ReactNode, RefObject, createRef, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { FieldArray, FormikErrors, FormikProvider, FormikTouched, FormikValues, useFormik } from "formik";
import { IForm, IFormik, IKeysArray } from "./interface";

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
