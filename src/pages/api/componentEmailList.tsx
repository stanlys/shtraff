import React, { ChangeEvent, useState } from "react";
import { Button, Modal, Divider, Tree, Space, Typography, Input } from "antd";
import { Field, FieldArray, FormikProvider, useFormik } from "formik";
const { Text } = Typography;

interface ComponentEmailListProps {
    emailList: Array<string>;
    setEmailList: React.Dispatch<React.SetStateAction<string[]>>;
}

const ComponentEmailList: React.FC<ComponentEmailListProps> = ({ emailList, setEmailList }) => {
    // const [emailList, setEmailList] = useState<string[]>([""]);

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

    const formikEmailList = useFormik({
        initialValues: {
            emails: ["11111", "222222", "333333"],
        },
        onSubmit: (values) => console.log(values),
    });

    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            {/* {emailList.length === 1 ? (
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
            )} */}
            {/* <FormikProvider value={formikEmailList}>
                <FieldArray name="emails">
                    {(el) => {
                        formikEmailList.values.emails.map((_el, index) => <p key={index}>{_el}</p>);
                        return (
                            <Button type="dashed" block onClick={() => el.push("")}>
                                + Добавить еще email
                            </Button>
                        );
                    }}
                </FieldArray>
            </FormikProvider> */}
            <FormikProvider value={formikEmailList}>
                <FieldArray name="emails">
                    {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;

                        return (
                            <>
                                <div>
                                    {(form.values.emails as string[]).map((el, index) => (
                                        <div key={`email${index}`}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <Text>Email</Text>
                                                <Button danger type="dashed" onClick={() => remove(index)}>
                                                    - Удалить email
                                                </Button>
                                            </div>
                                            <Input
                                                size="large"
                                                name={`emails[${index}]`}
                                                value={el}
                                                onChange={formikEmailList.handleChange}
                                            />

                                            <Divider></Divider>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    type="dashed"
                                    block
                                    onClick={() => {
                                        push(" ");
                                        console.log(form);
                                    }}
                                >
                                    + Добавить еще email
                                </Button>
                            </>
                        );
                    }}
                </FieldArray>
                {/* <FieldArray
                    name="emails"
                    render={(element) => (
                        <div>
                            {emails.map((email, index) => (
                                <div key={`email${index}`}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Text>Email</Text>
                                        <Button danger type="dashed" onClick={() => element.remove(index)}>
                                            - Удалить email
                                        </Button>
                                    </div>
                                    <Input
                                        size="large"
                                        name={email}
                                        value={email}
                                        onChange={formikEmailList.handleChange}
                                    />

                                    <Divider></Divider>
                                </div>
                            ))}
                            <Button type="dashed" block onClick={() => element.push("")}>
                                + Добавить еще email
                            </Button>
                        </div>
                    )}
                /> */}
            </FormikProvider>
        </Space>
    );
};

export default ComponentEmailList;
