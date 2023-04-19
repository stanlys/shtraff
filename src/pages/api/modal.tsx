import React from "react";
import { Modal, Divider, Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ComponentKeyValue from "./forms/componentKeyValue";
import ComponentEmailList from "./forms/componentEmailList";
import ComponentClientDetail from "./forms/componentClientDetail";
import ComponentBank from "./forms/componentBank";
import ComponentOrganizationDetail from "./forms/componentOrganizationDetail";
import { FormikProvider, useFormik } from "formik";

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
        onSubmit: async (values) => {
            let response = await fetch("/addnote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(values),
            });
            console.log(response.status);
            setOpen(false);
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

    return (
        <Modal
            title="Клиенты"
            centered
            open={open}
            okText="Создать"
            cancelText="Отменить"
            onOk={() => formik.handleSubmit()}
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
