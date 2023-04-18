import React from "react";
import { Space, Input, Typography, Switch, Button, Divider } from "antd";
import { IFormik, ISubFormProps } from "./interface";
import { FieldArray } from "formik";
const { Text } = Typography;

const ComponentBank: React.FC<ISubFormProps> = ({ errors, values, handleChange, touched }) => {
    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <FieldArray name="scores">
                {(fielsProp) => {
                    const { form, push, remove } = fielsProp;
                    const values = form.values as IFormik;
                    return (
                        <>
                            {values.scores.map((score, index) => (
                                <div key={`score${index}`} style={{ marginTop: "10px" }}>
                                    {index != 0 && (
                                        <div style={{ display: "flex", justifyContent: "end" }}>
                                            <Button
                                                type="dashed"
                                                danger
                                                style={{ justifyContent: "start" }}
                                                onClick={() => remove(index)}
                                            >
                                                - Удалить счет
                                            </Button>
                                        </div>
                                    )}
                                    <Text>Название счета</Text>
                                    <Input
                                        size="large"
                                        name={`scores[${index}].name`}
                                        value={score.name}
                                        onChange={handleChange}
                                        placeholder="Название счета"
                                    />
                                    <label>Номер счет</label>
                                    <Input size="large" placeholder="Номер счет" />
                                    <label>БИК счета </label>
                                    <Input size="large" placeholder="Корр. номер счета" />
                                    <label>Корр. номер счета</label>
                                    <Input size="large" placeholder="" />
                                    <label>Дефолтный счет</label>
                                    <Switch defaultChecked={index == 0} onClick={() => console.log(index)} />
                                    {/* {index == 0 ? (
                                        <Switch defaultChecked onClick={() => console.log(index)} />
                                    ) : (
                                        <Switch onChange={() => console.log(index)} />
                                    )} */}
                                </div>
                            ))}
                            <Divider></Divider>
                            <Button type="dashed" block onClick={() => push({})}>
                                + Добавить еще счет
                            </Button>
                        </>
                    );
                }}
            </FieldArray>
        </Space>
    );
};

export default ComponentBank;
