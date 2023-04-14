import React, { ReactNode, RefObject, createRef, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";

interface DataType {
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

export interface ComponentKeyValueProp {
    emails?: Array<string>;
    getValue: (email: Array<DataType>) => void;
}

const ComponentKeyValue: React.FC<ComponentKeyValueProp> = ({ getValue }) => {
    const [metaKeyValue, setMetaKeyValue] = useState<DataType[]>([]);

    

    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <Table columns={metaColumns} dataSource={metaKeyValue} pagination={false} />
            <Button
                type="link"
                onClick={() => {
                    getValue(metaKeyValue);
                    setMetaKeyValue(addKeyValue(metaKeyValue));
                }}
            >
                Добавить ключ-значение
            </Button>
        </Space>
    );
};

export default ComponentKeyValue;
