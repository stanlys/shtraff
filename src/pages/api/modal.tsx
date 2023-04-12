import React, { FC, ReactNode } from "react";
import { Button, Modal, Divider, Tree } from "antd";
import { DownOutlined, FrownFilled, FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

interface DataNode {
    title: React.ReactNode;
    key: string;
    isLeaf?: boolean;
    component?: ReactNode;
    children?: DataNode[];
}

const initTreeData: DataNode[] = [
    {
        title: <span>Детали клиента</span>,
        key: "0",
        children: [
            {
                key: "0-1",
                title: (
                    <div>
                        <label>Имя </label>
                        <input />
                        <label>Email</label>
                        <input />
                        <label>Дней отсрочки </label>
                        <input />
                        <label>Кредитный лимит</label>
                        <input />
                    </div>
                ),
            },
        ],
    },
    { title: <span>Детали организации</span>, key: "1" },
    { title: <span>Банковские счета</span>, key: "2" },
    { title: <span>Emails для счетов</span>, key: "3" },
    { title: <span>Meta</span>, key: "4" },
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
