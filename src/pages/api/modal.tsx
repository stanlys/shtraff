import React, { FC, ReactNode, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import { DownOutlined, FrownFilled, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import ComponentKeyValue from "./componentKeyValue";
import ComponentEmailList from "./componentEmailList";
import ComponentClientDetail, { IClient } from "./componentClientDetail";
import ComponentBank from "./componentBank";
import ComponentOrganizationDetail from "./componentOrganizationDetail";
import { FormikConfig, FormikValues, useFormik } from "formik";
import ORGForm from "./componentOrganizationDetail";
import ClientForm from "./componentClientDetail";

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

interface ModalWindowProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ open, setOpen }) => {
    const [emailList, setEmailList] = useState<string[]>([""]);

    const [metaKeyValue, setMetaKeyValue] = useState<DataType[]>([]);

    const formik = useFormik({
        initialValues: {
            name: "",
            days: "",
            email: "",
            orgname: "",
            orgINN: "",
            orgKPP: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    let a: FormikValues;

    const initTreeData: DataNode[] = [
        {
            title: <span>Детали клиента</span>,
            key: "0",
            children: [
                {
                    key: "0-1",
                    title: (
                        <ComponentClientDetail
                            values={formik.values}
                            handleChange={formik.handleChange}
                        ></ComponentClientDetail>
                    ),
                },
            ],
        },
        {
            title: <span>Детали организации</span>,
            key: "1",
            children: [
                {
                    key: "1-1",
                    title: (
                        <ComponentOrganizationDetail
                            values={formik.values}
                            handleChange={formik.handleChange}
                        ></ComponentOrganizationDetail>
                    ),
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
                    title: <ComponentEmailList emailList={emailList} setEmailList={setEmailList}></ComponentEmailList>,
                },
            ],
        },
        {
            title: <span>Meta</span>,
            key: "4",
            children: [
                {
                    key: "4-1",
                    title: (
                        <ComponentKeyValue keyValue={metaKeyValue} setKeyValue={setMetaKeyValue}></ComponentKeyValue>
                    ),
                },
            ],
        },
    ];

    const submitForm = () => {
        formik.submitForm();
        console.log("Send:", formik.values);
        const keyValues = metaKeyValue.map((kv) => `${kv.value} + ${kv.keyValue}`);
        console.log("Send:", keyValues);
        setOpen(false);
    };

    const [formValues, setFormValues] = React.useState({
        formA: {},
        formB: {},
    });

    function handleFormAChange(values: IClient) {
        setFormValues({
            ...formValues,
            formA: values,
        });
    }

    function handleFormBChange(values: any) {
        setFormValues({
            ...formValues,
            formB: values,
        });
    }

    function handleSubmit() {
        alert(JSON.stringify(formValues, null, 2));
    }

    return (
        <Modal
            title="Клиенты"
            centered
            open={open}
            okText="Создать"
            cancelText="Отменить"
            onOk={() => submitForm()}
            onCancel={() => setOpen(false)}
            width={1000}
        >
            <Divider></Divider>
            <Tree treeData={initTreeData} switcherIcon={<DownOutlined />} />
        </Modal>
    );
};
