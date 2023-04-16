import React, { ChangeEvent, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input } from "antd";
const { Text } = Typography;

interface ComponentEmailListProps {
    emailList: Array<string>;
    setEmailList: React.Dispatch<React.SetStateAction<string[]>>;
}

const ComponentEmailList: React.FC<ComponentEmailListProps> = ({ emailList, setEmailList }) => {
    // const [emailList, setEmailList] = useState<string[]>([""]);

    const a = React.createRef();

    const addEmail = () => {
        setEmailList((emailList) => [...emailList, ""]);
    };

    const delEmail = (index: number) => {
        setEmailList((emailList) => emailList.filter((_, i) => i !== index));
    };

    const changeEmail = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setEmailList((emails) => {
            let copy = Object.assign([], emails) as string[];
            copy[index] = e.target.value;
            return copy;
        });
    };

    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            {emailList.length === 1 ? (
                <>
                    <Text>Email</Text>
                    <Input size="large" value={emailList[0]} onChange={(e) => changeEmail(e, 0)} />
                    <Divider></Divider>
                </>
            ) : (
                emailList.map((email, index) => (
                    <div key={`email${index}`}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Text>Email</Text>
                            <Button danger type="dashed" onClick={() => delEmail(index)}>
                                - Удалить email
                            </Button>
                        </div>

                        <Input size="large" value={emailList[index]} onChange={(e) => changeEmail(e, index)} />

                        <Divider></Divider>
                    </div>
                ))
            )}

            {/* {emailList.map((email, index) => (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Text>Email</Text>
                        <Button danger type="dashed" onClick={() => delEmail(index)}>
                            - Удалить email
                        </Button>
                    </div>

                    <Input size="large" />

                    <Divider></Divider>
                </>
            ))} */}
            <Button type="dashed" block onClick={addEmail}>
                + Добавить еще email
            </Button>
        </Space>
    );
};

export default ComponentEmailList;
