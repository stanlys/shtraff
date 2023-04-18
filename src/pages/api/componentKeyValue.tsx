import React, { ReactNode, RefObject, createRef, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { FieldArray, FormikProvider, useFormik } from "formik";

export interface DataType {
    key: string;
    keyValue: ReactNode;
    value: ReactNode;
    control: ReactNode;
}

const metaColumns: ColumnsType<DataType> = [
    {
        key: "key",
        dataIndex: "keyValue",
        title: "Ключ",
    },
    {
        key: "value",
        dataIndex: "value",
        title: "Значение",
    },
    {
        key: "control",
        dataIndex: "control",
        title: "",
        render: (_, recoder) => (
            <Button type="text" color="error" onClick={() => console.log("delete" + recoder.key)}>
                Х
            </Button>
        ),
    },
];

const addKeyValue = (columns: DataType[]): DataType[] => {
    const newValue: DataType = {
        control: (
            <Button type="text" danger onClick={() => console.log("delete")}>
                Х
            </Button>
        ),
        key: uuidv4(),
        value: <Input />,
        keyValue: <Input />,
    };

    return [...columns, newValue];
};

interface IKeyValues {
    key: string;
    value: string;
}

interface IKeysArray {
    keys: Array<IKeyValues>;
}

export interface ComponentKeyValueProp {
    keyValue: Array<DataType>;
    setKeyValue: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const ComponentKeyValue: React.FC<ComponentKeyValueProp> = ({ keyValue, setKeyValue }) => {
    const smallFormik = useFormik<IKeysArray>({
        initialValues: { keys: [] },
        onSubmit: (values) => console.log(values),
    });

    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            {/* <Table columns={metaColumns} dataSource={keyValue} pagination={false}/> */}
            <div>
                <FormikProvider value={smallFormik}>
                    <table>
                        <thead>
                            <tr>
                                <td>Ключ</td>
                                <td>Значение</td>
                                <td> </td>
                            </tr>
                        </thead>

                        <FieldArray name="keys">
                            {(fieldsProps) => {
                                const { push, remove, form } = fieldsProps;
                                return (
                                    <tbody>
                                        {(form.values.keys as IKeysArray[]).map((el, index) => (
                                            <tr key={"key" + index}>
                                                <td>
                                                    <Input />
                                                </td>
                                                <td>
                                                    <Input />
                                                </td>
                                                <td>
                                                    <Button type="text" danger onClick={() => remove(index)}>
                                                        Х
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}

                                        <tr>
                                            <Button
                                                type="link"
                                                onClick={() => {
                                                    push({ key: "", value: "" });
                                                }}
                                            >
                                                Добавить ключ-значение
                                            </Button>
                                        </tr>
                                    </tbody>
                                );
                            }}
                        </FieldArray>
                    </table>
                </FormikProvider>
            </div>
        </Space>
    );
};

export default ComponentKeyValue;
