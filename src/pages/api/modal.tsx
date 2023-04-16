import React, { ComponentElement, FC, ReactNode, createRef, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import { DownOutlined, FrownFilled, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import ComponentKeyValue from "./componentKeyValue";
import ComponentEmailList from "./componentEmailList";
import ComponentClientDetail, { IClientProps } from "./componentClientDetail";
import ComponentBank from "./componentBank";
import ComponentOrganizationDetail from "./componentOrganizationDetail";
import { FormikConfig, FormikValues, useFormik } from "formik";
import ORGForm from "./componentOrganizationDetail";
import ClientForm from "./componentClientDetail";
import * as Yup from "yup";
import { CompoundedComponent } from "antd/es/float-button/interface";

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

// const metaColumns: ColumnsType<DataType> = [
//     {
//         key: "key",
//         dataIndex: "keyValue",
//         title: "Ключ",
//     },
//     {
//         key: "value",
//         dataIndex: "value",
//         title: "Значение",
//     },
//     {
//         key: "control",
//         dataIndex: "control",
//         title: "",
//     },
// ];

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

export interface IForm {
    name: string;
    days: string;
    email: string;
    credit: string;
    orgname: string;
    orgINN: string;
    orgKPP: string;
    orgOGRN: string;
    orgAddress: string;
    emails: Array<string>;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ open, setOpen }) => {
    const [emailList, setEmailList] = useState<string[]>([""]);

    const [metaKeyValue, setMetaKeyValue] = useState<DataType[]>([]);

    const formValidate = Yup.object().shape({
        name: Yup.string().required("Обязательно к заполнению"),
        days: Yup.number().moreThan(0, "Больше нуля").required("Обязательно к заполнению"),
        email: Yup.string().email("Введите Email").required("Обязательно к заполнению"),
        credit: Yup.string().required("Обязательно к заполнению"),
        orgname: Yup.string().required("Обязательно к заполнению"),
        orgINN: Yup.string().required("Обязательно к заполнению").min(7),
        orgKPP: Yup.string().required("Обязательно к заполнению"),
        orgOGRN: Yup.string().required("Обязательно к заполнению"),
        orgAddress: Yup.string().required("Обязательно к заполнению"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            days: "",
            email: "",
            creadit: "",
            orgname: "",
            orgINN: "",
            orgKPP: "",
            orgOGRN: "",
            orgAddress: "",
        },
        validationSchema: formValidate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                            errors={formik.errors}
                            touched={formik.touched}
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
                            errors={formik.errors}
                            touched={formik.touched}
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
        formik.handleSubmit();
        // formik.validateForm(formik.values);
        // if (formik.isValid) {
        //     formik.submitForm();
        //     console.log("Send:", formik.values);
        //     const keyValues = metaKeyValue.map((kv) => `${kv.value} + ${kv.keyValue}`);
        //     console.log("Send:", keyValues);
        //     setOpen(false);
        // } else {
        //     console.log(formik.errors);
        // }
    };

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
            <form onSubmit={formik.handleSubmit}>
                <Tree treeData={initTreeData} switcherIcon={<DownOutlined />} />
                <button type="submit"> - Send - </button>
            </form>
        </Modal>
    );
};
