import React from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input, Switch, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import ComponentKeyValue from "./componentKeyValue";
import ComponentEmailList from "./componentEmailList";
import ComponentClientDetail from "./componentClientDetail";
import ComponentBank from "./componentBank";
import ComponentOrganizationDetail from "./componentOrganizationDetail";
import { FormikProvider, FormikTouched, FormikValues, useFormik } from "formik";

import { DataNode } from "antd/es/tree";
import { IFormik } from "./interface";
import { INITIAL_IFORMIK, formValidate } from "./forms";

interface ModalWindowProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ open, setOpen }) => {
    const formik = useFormik<IFormik>({
        initialValues: INITIAL_IFORMIK,
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
                    title: (
                        <ComponentBank
                            errors={formik.errors}
                            values={formik.values}
                            handleChange={formik.handleChange}
                            touched={formik.touched}
                        ></ComponentBank>
                    ),
                },
            ],
        },
        {
            title: <span>Emails для счетов</span>,
            key: "3",
            children: [
                {
                    key: "3-1",
                    title: (
                        <ComponentEmailList
                            values={formik.values}
                            errors={formik.errors}
                            handleChange={formik.handleChange}
                            touched={formik.initialTouched}
                        ></ComponentEmailList>
                    ),
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
                        <ComponentKeyValue
                            values={formik.values}
                            errors={formik.errors}
                            touched={formik.touched}
                            handleChange={formik.handleChange}
                        ></ComponentKeyValue>
                    ),
                },
            ],
        },
    ];

    const submitForm = () => {
        console.log(formik.values);
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
                <FormikProvider value={formik}>
                    <Tree treeData={initTreeData} switcherIcon={<DownOutlined />} />
                </FormikProvider>
            </form>
        </Modal>
    );
};
