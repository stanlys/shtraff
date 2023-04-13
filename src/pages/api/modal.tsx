import React, { FC, ReactNode } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import { DownOutlined, FrownFilled, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import ComponentKeyValue from "./componentKeyValue";
import ComponentEmailList from "./componentEmailList";
import ComponentClientDetail from "./componentClientDetail";
import ComponentBank from "./componentBank";
import ComponentOrganizationDetail from "./componentOrganizationDetail";

const { Text, Link } = Typography;

interface DataNode {
    title: React.ReactNode;
    key: string;
    isLeaf?: boolean;
    component?: ReactNode;
    children?: DataNode[];
}

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
    },
];

const metaKeyValue: DataType[] = [];

const addKeyValue = () => {
    metaKeyValue.push({
        control: (
            <Button type="text" color="error">
                Х
            </Button>
        ),
        key: uuidv4(),
        value: <Input />,
        keyValue: <Input />,
    });
    console.log(metaKeyValue);
};

const initTreeData: DataNode[] = [
    {
        title: <span>Детали клиента</span>,
        key: "0",
        children: [
            {
                key: "0-1",
                title: <ComponentClientDetail></ComponentClientDetail>,
            },
        ],
    },
    {
        title: <span>Детали организации</span>,
        key: "1",
        children: [
            {
                key: "1-1",
                title: <ComponentOrganizationDetail></ComponentOrganizationDetail>,
            },
        ],
    },
    {
        title: <span>Банковские счета</span>,
        key: "2",
        children: [
            {
                key: "2-1",
                title: <ComponentBank></ComponentBank>,
            },
        ],
    },
    {
        title: <span>Emails для счетов</span>,
        key: "3",
        children: [
            {
                key: "3-1",
                title: <ComponentEmailList></ComponentEmailList>,
            },
        ],
    },
    {
        title: <span>Meta</span>,
        key: "4",
        children: [
            {
                key: "4-1",
                title: <ComponentKeyValue></ComponentKeyValue>,
            },
        ],
    },
];

interface ModalWindowProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ open, setOpen }) => {
    return (
        <Modal
            title="Клиенты"
            centered
            open={open}
            okText="Создать"
            cancelText="Отменить"
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
        >
            <Divider></Divider>
            <Tree treeData={initTreeData} switcherIcon={<DownOutlined />} />
        </Modal>
    );
};
